import {Routes ,Route , BrowserRouter as Router} from 'react-router-dom'
import CoinDetails from "./components/CoinDetails";
import Home from "./components/Home";
import Header from "./components/Header";
import Exchange from "./components/Exchange";
import Coins from "./components/Coins";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/exchange" element={<Exchange />} />
        <Route path="/coin/:id" element={<CoinDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
