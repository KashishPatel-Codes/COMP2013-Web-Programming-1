import { useState, useEffect } from "react";
import PostForm from "./PostForm";
import PostsContainer from "./PostsContainer";

export default function FakeApiApp() {
  const URL = "https://jsonplaceholder.typicode.com/posts";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newPost, setNewPost] = useState({ title: "", body: "" });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(URL);
    const result = await response.json();
    setData(result);
    setLoading(false);
  };

  const handleChange = (e) => {
    setNewPost({
      ...newPost,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
     alert(`Title: ${newPost.title}\nBody: ${newPost.body}`);

    const fakePost = {
      id: data.length + 1,
      title: newPost.title,
      body: newPost.body,
    };
    setData([fakePost, ...data]);
    setNewPost({ title: "", body: "" });
  };

  return (
    <div className="container">
      <h1>Fake API App</h1>
      <PostForm
        newPost={newPost}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {loading ? 
      <h2>Loading...</h2> : 
      <PostsContainer posts={data} />}
    </div>
  );
}
