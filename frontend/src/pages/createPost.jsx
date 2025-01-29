import React, { useEffect, useState } from 'react';
import style from '../styles/createPost.module.css';
import { axiosMultipartWithToken } from '../utils/axiosConfig';
import toast from 'react-hot-toast';
import { useNavigate

 } from 'react-router-dom';
const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);
  
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('approved', false);
    if (image) formData.append('image', image);

    try {
      const response = await axiosMultipartWithToken.post('post/create/', formData);
      setTitle('');
      setContent('');
      setImage(null);
      toast.success('Post created successfully!');
    } catch (error) {
      console.error('Error creating post:', error);
      toast.error('Failed to create post.');
    } finally {
      setIsSubmitting(false);
//      window.location.reload(false);
      navigate('/posts');
    }
  };

  return (
    <div  className={style.createPostContainer}>
      <h2>Create Post</h2>
      <form  onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <textarea
            value={content}
            placeholder="Content"
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write something amazing..."
          />
        </div>
        <div>
          <label>Image</label>
          <input type="file" onChange={handleImageChange} accept="image/*" />
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Posting...' : 'Create Post'}
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
