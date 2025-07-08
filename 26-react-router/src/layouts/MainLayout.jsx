import { Outlet } from 'react-router-dom';
import Menu from '../components/Menu';

const MainLayout = () => {
  return (
    <>
      <Menu />
      <Outlet></Outlet>
    </>
  );
};

export default MainLayout;
