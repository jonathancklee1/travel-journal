import "./styles/styles.css";
import Nav from "./components/Nav";
import Card from "./components/Card";
import data from "./data";

function App() {
  const trips = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });
  return (
    <div className="container">
      <Nav />
      <main className="card-list">{trips}</main>
    </div>
  );
}

export default App;
