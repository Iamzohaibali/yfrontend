import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white sticky top-0 z-50">

      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center h-16">

        <h1 className="font-bold text-xl">MySite</h1>

        <div className="space-x-6">

          <Link to="/">Home</Link>

          <Link to="/about">About</Link>

          <Link to="/pricing">Pricing</Link>

          <Link to="/contact">Contact</Link>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;