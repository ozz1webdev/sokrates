from django.contrib import admin
from django.urls import path, include
from rest_framework.authtoken.views import obtain_auth_token


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    path('post/', include('posts.urls')),
    path('auth/', obtain_auth_token, name='auth'),
]
