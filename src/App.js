
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import SingleMovie from "./SingleMovie";
import "./App.css";

import Watchlist from "./Watchlist";
import { GlobalProvider } from "./GlobalState";
import NavMUI from "./NavMUI";



const App = () => {
  return (
    <div>
    <div>

    <NavMUI></NavMUI>
    
    <div>
<GlobalProvider>
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="movie/:id" element={<SingleMovie />} />
      <Route path="/Watchlist" element={<Watchlist/>}/>

    </Routes>
    </GlobalProvider>
    </div>

    </div>
  
    </div>
  );
};

export default App;