from django.urls import path
from django.conf.urls.static import static
from django.conf import settings
from .views import (PostList,
                    ApprovedPostsList,
                    PostDetail,
                    PostCreate,
                    PostUpdate,
                    PostDelete,
                    CommentsList,
                    CommentsCreate,
                    ApprovePost)

urlpatterns = [
    path('api/posts/', PostList.as_view()),
    path('api/approvedposts/', ApprovedPostsList.as_view()),
    path('api/approvepost/<int:pk>/', ApprovePost.as_view()),
    path('api/posts/<int:pk>/', PostDetail.as_view()),
    path('api/create/', PostCreate.as_view()),
    path('api/update/<int:pk>/', PostUpdate.as_view()),
    path('api/delete/<int:pk>/', PostDelete.as_view()),
    path('api/comments/<int:pk>/', CommentsList.as_view()),
    path('api/comments/create/<int:pk>/', CommentsCreate.as_view()),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
