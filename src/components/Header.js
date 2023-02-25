import Navbar from "./Navbar";
import InputItem from "./InputItem";
import Logo from "./Logo";
import Icon from "./Icon";
import { CgSearch } from "react-icons/cg";
// import Login from "./Login";

const Header = () => {
  return (
    <>
      {/* NavBar */}
      <nav className="container header">
        <Navbar />
        <Logo />
        <div className="header-box">
          <div className="header-icon">
            <CgSearch size={22} />
            <InputItem />
          </div>
          <Icon />
        </div>
      </nav>
    </>
  );
};

export default Header;
