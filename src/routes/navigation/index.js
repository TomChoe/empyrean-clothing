import { useContext } from "react";
import { signOutUser } from "../../utils/firebase.utils";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import './navigation.styles.scss';

export const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const signOutHandler = async () => {
    await signOutUser();
  };

  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            Shop
          </Link>
          {currentUser ? (
            <span className='nav-link' onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link className='nav-link' to='/auth'>
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};
