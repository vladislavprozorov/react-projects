import { useState, useEffect } from 'react';
import Post from './Post';
const API_URL = 'https://jsonplaceholder.typicode.com/posts'
function Posts() {
  const [post, setPost] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((post) => setPost(post))
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  if (error) {
    return <h1>Ашибка: {error}</h1>;
  }
  return (
    <>
      <h1>Posts</h1>
      <hr />
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        post.map((post) => <Post key={post.id} {...post}></Post>)
      )}
    </>
  );
}
export default Posts;
