import { useSelector } from "react-redux";
import { HeaderBtnLogOut, HeaderContainer } from "./header.styles";
import logo from "../../assets/images/logo.webp";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <HeaderContainer>
      <img src={logo} alt="Logo" width={150} height={50} />

      {isLoggedIn && (
        <HeaderBtnLogOut onClick={() => console.log("bye")}>
          Log Out
        </HeaderBtnLogOut>
      )}
    </HeaderContainer>
  );
};

export default Header;
