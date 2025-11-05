export default function PostForm({ newPost, handleChange, handleSubmit }) {
  return (
    <div className="post-box">
      <h2>Post Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={newPost.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Body:</label>
          <input
            type="text"
            name="body"
            value={newPost.body}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
