from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from .serializer import ProfileSerializer
from .models import UserProfile
from django.contrib.auth.models import User

