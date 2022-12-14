import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Meals from "./components/Shop/Meals";

function App() {
  return (
    <div className="page-container">
      <div className="body-wrapper">
        <Header />

        <Meals />
      </div>
      <Footer />
    </div>
  );
}

export default App;
