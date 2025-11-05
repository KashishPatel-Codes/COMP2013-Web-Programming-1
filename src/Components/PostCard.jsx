export default function PostCard({ post }) {
  return (
    <div className="post-box">
      <h3 style={{ textTransform: "lowercase", fontWeight: "bold" }}>
        {post.title}
      </h3>
      <p>{post.body}</p>
    </div>
  );
}
