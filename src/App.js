import { Routes, Route } from "react-router-dom";
import Home from "./routes/home";
import SignIn from "./routes/sign-in";
import { Navigation } from "./routes/navigation";

const App = () => {
  return (
    <Routes>
      <Route path='/' Component={Navigation}>
        <Route index Component={Home} />
        <Route path='/shop' element={<div>hello world</div>} />
        <Route path='/sign-in' Component={SignIn} />
      </Route>
    </Routes>
  );
}

export default App;
