from django.urls import path
from django.conf.urls.static import static
from django.conf import settings
from rest_framework.authtoken.views import obtain_auth_token
from .views import RegisterView, LoginView, LogoutView, ProfileView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='registerview'),
    path('token-auth/', obtain_auth_token, name='token-auth'),
    path('login/', LoginView.as_view(), name='loginview'),
    path('logout/', LogoutView.as_view(), name='logoutview'),
    path('profile/', ProfileView.as_view(), name='profileview'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
