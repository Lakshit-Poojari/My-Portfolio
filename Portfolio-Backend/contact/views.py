from django.conf import settings
from django.core.mail import send_mail
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

# Create your views here.

@api_view(['POST'])
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

    send_mail(
        subject=subject,
        message=body,
        from_email=settings.EMAIL_HOST_USER,
        recipient_list=[settings.CONTACT_RECEIVER_EMAIL],
        fail_silently=False,
    )

    return Response(
        {"success": "Message sent successfully"},
        status=status.HTTP_200_OK
    )