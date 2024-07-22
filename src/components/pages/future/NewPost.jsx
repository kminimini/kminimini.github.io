import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FormWrapper,
  Input,
  TextArea,
  Button
} from '../../../styles/components/pages/NewPost.styles'

const NewPost = ({ addPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      content,
      category,
      date: new Date().toISOString().split('T')[0]
    };
    addPost(newPost);
    navigate('/');
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <h2>Create New Post</h2>
      <Input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <Input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <TextArea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <Button type="submit">Create Post</Button>
    </FormWrapper>
  );
};

export default NewPost;