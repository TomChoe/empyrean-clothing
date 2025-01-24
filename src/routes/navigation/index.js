import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { signOutStart } from "../../store/user/user.action";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import CartIcon from "../../components/cart-icon";
import CartDropDown from "../../components/cart-dropdown";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from "./navigation.styles";

export const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutHandler = () => {
    dispatch(signOutStart());
  };

  console.log("current user ", currentUser);
  return (
    <>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo className='logo' />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>Shop</NavLink>

          {currentUser ? (
            <NavLink as='span' onClick={signOutHandler}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/auth'>SIGN IN</NavLink>
          )}

          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropDown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};
