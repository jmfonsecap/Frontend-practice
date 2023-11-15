import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
function App() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const [appearPressed, setAppearPressed] = useState(false);
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      {appearPressed && (
        <Alert onClose={() => setAppearPressed(false)}>
          Le metiste un <strong>virus</strong> a tu computador pendejo
        </Alert>
      )}

      <div>
        <Button onClick={() => setAppearPressed(true)}>Download</Button>
        <a href="https://www.google.com">hola</a>
      </div>
    </div>
  );
}
export default App;
