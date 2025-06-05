import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <Link className="links" to="/">
        <li>Home</li>
      </Link>
      <Link className="links" to="/browseBooks">
        <li>Browse Books</li>
      </Link>
      <Link className="links" to="/addBook">
        <li>Add Books</li>
      </Link>
    </div>
  );
}

export default Header;
