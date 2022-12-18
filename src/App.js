import ContextProvider from "./store/ReducerContex";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Meals from "./components/Shop/Meals";
import "./App.css";

function App() {
  return (
    <ContextProvider>
      <div className="page-container">
        <div className="body-wrapper">
          <Header />
          <Meals />
        </div>
        <Footer />
      </div>
    </ContextProvider>
  );
}

export default App;
