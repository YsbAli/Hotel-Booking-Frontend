import "./Images.css";

function Image({ url, title, desc }) {
  return (
    <div className="container">
      <div className="image-container">
        <img className="hotel-images" src={url} alt="hotel-img" />
        <div className="img-titles">
          <h1>{title}</h1>
          <h2>{desc}</h2>
        </div>
      </div>
    </div>
  );
}

export default Image;
