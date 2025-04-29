import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { BlogContext } from './BlogContext';

const PostDetail = () => {
  const { id } = useParams();
  const { posts } = useContext(BlogContext);
  const post = posts.find(p => p.id.toString() === id);

  return post ? (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  ) : (
    <h2>Post not found</h2>
  );
};

export default PostDetail;
