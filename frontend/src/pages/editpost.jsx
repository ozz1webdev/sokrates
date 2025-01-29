import styles from '../styles/editpost.module.css';
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Quill } from 'react-quill';
import ImageResize from 'quill-image-resize-module-react';
import { axiosNoToken, axiosMultipartWithToken } from '../utils/axiosConfig';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

Quill.register('modules/imageResize', ImageResize);

function EditPost ({props}) {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const [newImage, setNewImage] = useState(null);
    const [description, setDescription] = useState('');
    const [youtubeUrl, setYoutubeUrl] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const navigate = useNavigate();

    const {id} = useParams();

    const modules = {
        toolbar: [
          [{ header: '1' }, { header: '2' }, { font: [] }],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['bold', 'italic', 'underline', 'strike'],
          ['link', 'image'],
          [{ color: [] }, { background: [] }],
          [{ align: [] }],
          ['clean'],
        ],
        imageResize: {
          parchment: Quill.import('parchment'),
        },
      };
  
      const formats = [
          'header',
          'font',
          'size',
          'bold',
          'italic',
          'underline',
          'strike',
          'link',
          'image',
          'color',
          'background',
          'align',
          'imageResize',
      ];
  
      const handleImageChange = (e) => {
          setNewImage(e.target.files[0]);
      };

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axiosNoToken.get(`/post/${id}/`);
                setTitle(response.data.title);
                setContent(response.data.content);
                setImage(response.data.image);
                setDescription(response.data.description);
                setYoutubeUrl(response.data.youtubeUrl);
            } catch (error) {
                console.error(error);
            }
        };
        fetchPost();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        if (newImage) {
            formData.append('image', newImage);
        }
        formData.append('description', description);
        formData.append('youtubeUrl', youtubeUrl);
        try {
            await axiosMultipartWithToken.put(`/post/update/${id}/`, formData);
            //alert('Post updated successfully!');
            toast.success('Post updated successfully!', {
                position: 'top-left',
                autoClose: 3000,
                theme: 'dark',
                pauseOnHover: true,
            });
            //window.location.reload(false);
            setImage(null);
            navigate('/home');
        } catch (error) {
            toast.success('Post updated failed!', {
                position: 'top-left',
                autoClose: 3000,
                theme: 'dark',
                pauseOnHover: true,
        });

        setIsSubmitting(false);
        };
    }



      return (
        <div className={styles.container}>
            <h1>Update Post</h1>
            
            <form onSubmit={handleSubmit}>
                <br />
                <br />
                <label>Title</label>
                <br />
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    style={{ width: '100%', height: '40px' }}
                />
                <br />
                <br />
                <label>Content</label>
                <ReactQuill
                    value={content}
                    onChange={setContent}
                    modules={modules}
                    formats={formats}
                    placeholder="Write something amazing..."
                    required
                    theme="snow"
                    style={{ width: '100%' }}
                />
                <br />
                <label>Description</label>
                <br />
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                    required
                    style={{ width: '100%', height: '40px' }}
                />
                <br />
                <br />
                <label>Select Cover Image :</label>
                <br />
                <br />
                <input type="file" 
                onChange={handleImageChange}
                accept="image/*" 
                />
                <br />
                <br />
                <label>Youtube URL :</label>
                <br />
                <input
                    type="text"
                    value={youtubeUrl}
                    onChange={(e) => setYoutubeUrl(e.target.value)}
                    placeholder="Youtube URL"
                    style={{ width: '100%', height: '40px' }}
                />
                <br />
                <br />
                <button type="submit" disabled={isSubmitting} style={{ width: '100px', height: '40px' }}>
                    {isSubmitting ? 'Posting...' : 'Update Post'}
                </button>
            </form>
        </div>
    );
}

export default EditPost;
