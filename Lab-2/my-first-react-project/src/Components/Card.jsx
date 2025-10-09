// src/components/Card.jsx
export default function Card({ country, hotel, rating, price, image }) {
  // Conditional color for rating
  const ratingColor = rating > 4.0 ? "green" : "red";

  return (
    <div className="card">
      <img src={image} alt={hotel} className="card-image" />
      <div className="card-content">
        <h3>{country}</h3>
        <p>{hotel}</p>
        <p style={{ color: ratingColor, fontWeight: "bold" }}>
          {rating} ★
        </p>
        <p>{price}/night</p>
      </div>
    </div>
  );
}
