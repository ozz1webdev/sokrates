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
                    ApprovePost,
                    CommentsCount,
                    LikeView,
                    GetLastThreePosts)

urlpatterns = [
    path('posts/', PostList.as_view()),
    path('approvedposts/', ApprovedPostsList.as_view()),
    path('approvepost/<int:pk>/', ApprovePost.as_view()),
    path('posts/<int:pk>/', PostDetail.as_view()),
    path('create/', PostCreate.as_view()),
    path('update/<int:pk>/', PostUpdate.as_view()),
    path('delete/<int:pk>/', PostDelete.as_view()),
    path('comments/<int:pk>/', CommentsList.as_view()),
    path('comments/create/<int:pk>/', CommentsCreate.as_view()),
    path('comments/count/<int:pk>/', CommentsCount.as_view()),
    path('likes/<int:pk>/', LikeView.as_view()),
    path('lastthree/', GetLastThreePosts.as_view()),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
