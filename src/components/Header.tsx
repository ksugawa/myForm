import PATH from "../path";
import { Link } from "react-router-dom";


const Header = (): JSX.Element => {
  return (
    <>
      <header>
        <nav>
          <ul className="d-flex align-items-center space-between">
            <li><Link to={PATH.REGISTER_IND}>会員登録【個人】</Link></li>
            <li><Link to={PATH.REGISTER_BZ}>会員登録【法人】</Link></li>
            <li><Link to={PATH.INQUIRY}>お問い合わせ</Link></li>
          </ul>
        </nav>

      </header>
    </>
  );
};

export default Header;
