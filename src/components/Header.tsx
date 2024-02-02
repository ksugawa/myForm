import PATH from "../path";
import { Link } from "react-router-dom";


const Header= (): JSX.Element => {
  return (
    <>
    <ul>
      <li>
        <Link to={PATH.INQUIRY}>お問い合わせ</Link>
      </li>
    </ul>
    </>
  );
};

export default Header;
