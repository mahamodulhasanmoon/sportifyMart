import { Link } from 'react-router-dom';
import Logo from '../ui/Logo';

const Sidebar = () => {
  return (
    <div className="h-full w-64 bg-primaryColor text-white fixed">
      <Logo/>
      <ul className='mt-5'>
        <li className="p-4 ">
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li className="p-4">
          <Link to="/profile">Profile</Link>
        </li>
        <li className="p-4">
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
