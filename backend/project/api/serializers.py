from rest_framework import serializers
from django.contrib.auth.models import User
from .models import UserProfile


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'password', 'email']

    def create(self, validated_data):
        username = User.objects.create_user(**validated_data)
        return username


class UserProfileSerializer(serializers.ModelSerializer):
    email = serializers.SerializerMethodField()
    username = serializers.SerializerMethodField()

    class Meta:
        model = UserProfile
        fields = 'username', 'role', 'profile_image', 'email'

    def get_email(self, obj):
        return obj.user.email

    def get_username(self, obj):
        return obj.user.username
