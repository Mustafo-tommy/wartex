import Nav from "./components/Nav";
import "./App.css";
import Header from "./components/Header";
import Center from "./components/Center";
import Karta from "./components/Karta";
import Cat from "./components/Cat";

function App() {
  return (
    <div>
      <Nav />;
      <Header />;
      <Center />
      <Karta />
      <Cat />
    </div>
  );
}

export default App;
