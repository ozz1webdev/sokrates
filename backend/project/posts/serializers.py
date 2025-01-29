from rest_framework import serializers
from .models import Post, Comments, Like


class PostSerializer(serializers.ModelSerializer):
    author = serializers.ReadOnlyField(source='author.username')

    class Meta:
        model = Post
        fields = '__all__'
        read_only_fields = ['author']
        extra_kwargs = {
            'image': {'required': False, 'allow_null': True}
        }

    def create(self, validated_data):
        validated_data['author'] = self.context['request'].user
        return Post.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.title)
        instance.content = validated_data.get('content', instance.content)
        instance.author = validated_data.get('author', instance.author)
        instance.approved = validated_data.get('approved', instance.approved)
        instance.updated_at = validated_data.get('updated_at', instance.updated_at)
        instance.created_at = validated_data.get('created_at', instance.created_at)
        if 'image' not in validated_data:
            validated_data['image'] = instance.image
        instance.image = validated_data.get('image', instance.image)
        instance.save()
        return super().update(instance, validated_data)

    def delete(self, instance):
        instance.delete()
        return instance


class CommentsSerializer(serializers.ModelSerializer):
    author = serializers.ReadOnlyField(source='author.username')
    post = serializers.ReadOnlyField(source='post.title')

    class Meta:
        model = Comments
        fields = '__all__'
        read_only_fields = ['author', 'post']

    def create(self, validated_data):
        validated_data['author'] = self.context['request'].user
        return Comments.objects.create(**validated_data)

    def delete(self, instance):
        instance.delete()
        return instance


class LikesSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.username')
    post = serializers.ReadOnlyField(source='post.title')

    def create(self, validated_data):
        validated_data['user'] = self.context['request'].user
        return super().create(validated_data)

    def update(self, instance, validated_data):
        instance.user = validated_data.get('user', instance.user)
        instance.post = validated_data.get('post', instance.post)
        instance.save()
        return super().update(instance, validated_data)

    def delete(self, instance):
        instance.delete()
        return instance

    def CountLikes(self, id):
        count = Like.objects.filter(post=id).count()
        return count

    class Meta:
        model = Post
        fields = '__all__'
        read_only_fields = ['user', 'post']