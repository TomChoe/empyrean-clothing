import { Outlet } from 'react-router-dom';
import Directory from '../../components/directory/directory.component'
import categories from '../../categories.json';

const Home = () => {
  
  return (
    <>
      <Directory categories={categories} /> 
      <Outlet /> 
    </>
  );
}

export default Home;