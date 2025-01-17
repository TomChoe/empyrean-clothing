import { Routes, Route } from "react-router-dom";
import Home from "./routes/home";
import Authentication from "./routes/authentication/authentication";
import { Navigation } from "./routes/navigation";
import Shop from "./routes/shop";

const App = () => {
  return (
    <Routes>
      <Route path='/' Component={Navigation}>
        <Route index Component={Home} />
        <Route path='/shop' Component={Shop} />
        <Route path='/auth' Component={Authentication} />
      </Route>
    </Routes>
  );
}

export default App;
