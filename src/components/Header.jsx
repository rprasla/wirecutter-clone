import { NavLink } from "react-router-dom";

const Header = () => {
  const checkActive = (isActive) => {
    return isActive
      ? "text-blue-500 font-bold underline text-2xl"
      : "text-gray hover:text-blue-300 text-2xl fond-semibold";
  };

  return (
    <>
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <NavLink to="/">
          <h1 className="text-4xl font-bold text-blue-600">Wirecutter Clone</h1>
        </NavLink>

        <nav className="space-x-4">
          <NavLink to="/" className={({ isActive }) => checkActive(isActive)}>
            Home
          </NavLink>
          <NavLink
            to="/reviews"
            className={({ isActive }) => checkActive(isActive)}
          >
            Reviews
          </NavLink>
          <NavLink
            to="/bestpicks"
            className={({ isActive }) => checkActive(isActive)}
          >
            Best Picks
          </NavLink>
        </nav>
      </header>
    </>
  );
};

export default Header;
