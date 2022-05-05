export default function Card(props) {
  console.log(props);
  return (
    <div className="card-item">
      <img src={props.item.imageUrl} className="card-img"></img>
      <div className="card-info">
        <div className="location-wrapper">
          <img src={require("../img/pin.png")} className="pin"></img>
          <p className="country">{props.item.location}</p>
          <a href={props.item.googleMapsUrl} className="link">
            View on Google Maps
          </a>
        </div>
        <h1 className="location">{props.item.title}</h1>
        <p className="dates bold">
          {props.item.startDate} - {props.item.endDate}
        </p>
        <p className="description">{props.item.description}</p>
      </div>
    </div>
  );
}
