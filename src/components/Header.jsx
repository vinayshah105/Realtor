import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <img
            src="/logo.png"
            alt="Realtor"
            className="h-10 sm:h-20 flex flex-wrap"
          />
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search ..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-600" />
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-lg font-medium hover:underline me-3">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-lg font-medium hover:underline me-3">
              About
            </li>
          </Link>
          <Link to="/signup">
            <li className="text-lg font-medium hover:underline me-3">
              Sign-Up
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
