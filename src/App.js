import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "./utils/firebase.utils";
import { setCurrentUser } from "./store/user/user.action";
import Home from "./routes/home";
import Authentication from "./routes/authentication/authentication";
import { Navigation } from "./routes/navigation";
import Shop from "./routes/shop";
import Checkout from "./routes/checkout";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <Routes>
      <Route path='/' Component={Navigation}>
        <Route index Component={Home} />
        <Route path='/shop/*' Component={Shop} />
        <Route path='/auth' Component={Authentication} />
        <Route path='/checkout' Component={Checkout} />
      </Route>
    </Routes>
  );
};

export default App;
