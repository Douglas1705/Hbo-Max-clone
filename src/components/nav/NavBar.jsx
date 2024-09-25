import { Nav } from "./navBarStyle";
import { ButtonNav } from "../UI/buttons/buttonAssinature";
import { LogoHboMax } from "../UI/logo-Hbo/logo-HboMax";
import logoHboMax from '../UI/logo-Hbo/hbo-max-logo.svg'

function NavBar() {
  return (
    <Nav>
      <LogoHboMax src={logoHboMax} />
      <div>
      <ButtonNav bgColor="black" bgColorHover="#212529">ENTRAR</ButtonNav>
      <ButtonNav>ASSINE AGORA</ButtonNav>
      </div>
    </Nav>
  );
}
export default NavBar;
