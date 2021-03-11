import "./App.css";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import DeveloperSection from "./DeveloperSection/DevSection";
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <DeveloperSection />
      <Footer />
    </div>
  );
}

export default App;
