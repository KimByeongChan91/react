import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li className="">
          <Link to="/">메인</Link>
        </li>
        <li className="">
          <Link to="/Home">홈</Link>
        </li>
        <li className="">
          <Link to="/Goods">굿즈</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
