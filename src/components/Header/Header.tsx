import { HeaderBtnLogOut, HeaderContainer } from "./header.styles";
import logo from "../../assets/images/logo.webp";

const Header = () => {
  return (
    <HeaderContainer>
      <img src={logo} alt="Logo" width={150} height={50} />

      <HeaderBtnLogOut onClick={() => console.log("Goodbye")}>
        Log Out
      </HeaderBtnLogOut>
    </HeaderContainer>
  );
};

export default Header;
