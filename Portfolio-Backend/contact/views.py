from django.conf import settings
from django.core.mail import send_mail
from rest_framework.decorators import api_view, parser_classes
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import JSONParser
import threading
import resend
import os

# Create your views here.

resend.api_key = os.getenv("RESEND_API_KEY")
def send_email_async(subject, body, receiver):
    # send_mail(
    #     subject,
    #     body,
    #     sender,
    #     receiver,
    #     fail_silently=False,
    # )

    try:
        resend.Emails.send({
            "from": "Portfolio Contact <onboarding@resend.dev>",  # works without domain
            "to": receiver,
            "subject": subject,
            "text": body,
        })
        print("✅ Email sent successfully via Resend")

    except Exception as e:
        print("❌ Email sending failed:", str(e))

@api_view(['POST'])
@parser_classes([JSONParser])
def contact(request):
    name = request.data.get("name")
    phone = request.data.get("phone")
    email = request.data.get("email")
    message = request.data.get("message")

    if not all([name, email, phone, message]):
        return Response(
            {"error": "All fields are required"},
            status=status.HTTP_400_BAD_REQUEST
        )

    subject = "You have got a message from your Portfolio"

    body = f"""
            Name: {name}
            Email: {email}
            Phone: {phone}

            Message:
            {message}
            """ 

    # send_mail(
    #     subject=subject,
    #     message=body,
    #     from_email=settings.EMAIL_HOST_USER,
    #     recipient_list=[settings.CONTACT_RECEIVER_EMAIL],
    #     fail_silently=False,
    # )

    threading.Thread(
        target=send_email_async,
        args=(
            subject,
            body,
            # settings.EMAIL_HOST_USER,
            [settings.CONTACT_RECEIVER_EMAIL],
        ),
    ).start()

    return Response(
        {"success": "Message sent successfully"},
        status=status.HTTP_200_OK
    )