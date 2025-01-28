from rest_framework.permissions import BasePermission, SAFE_METHODS
from api.models import UserProfile


class IsAdminOrTeacher(BasePermission):
    """
    Custom permission to allow only admins to edit posts.
    """
    def has_permission(self, request, view):

        role = UserProfile.objects.get(owner=request.user).role
        if role == 'admin' or role == 'teacher':
            return True

        if not request.user.is_authenticated:
            return False

        # Allow all users to view posts (GET request is safe)
        if request.method in SAFE_METHODS:
            return True
        # Only admins can create, update, or delete
        return request.user and request.user.is_staff


class IsAdminOrReadOnly(BasePermission):
    """
    Custom permission to allow only admins to edit posts.
    """
    def has_permission(self, request, view):

        if not request.user.is_authenticated:
            return False

        # Allow all users to view posts (GET request is safe)
        if request.method in SAFE_METHODS:
            return True
        # Only admins can create, update, or delete
        return request.user and request.user.is_staff
