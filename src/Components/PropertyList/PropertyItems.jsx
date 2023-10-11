import "./PropertyList.css";

function PropertyItems({ url, title, desc }) {
  return (
    <div className="propertylist-items">
      <img className="property-images" src={url} alt="" />
      <div className="propertly-List-titles">
        <h1>{title}</h1>
        <h2>{desc}</h2>
      </div>
    </div>
  );
}

export default PropertyItems;
