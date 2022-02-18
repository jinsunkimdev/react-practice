import Navbar from "./component/Navbar";
import Card from "./component/Card";
import Data from "./component/Data";
function App() {
  const cards = Data.map((items) => {
    return <Card key={items.title} {...items} />;
  });
  return (
    <div>
      <Navbar />
      {cards}
    </div>
  );
}

export default App;
