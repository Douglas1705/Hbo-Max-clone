import { LogoHboMax } from "../UI/logo-Hbo/logo-HboMax";
import logoHboMax from "../UI/logo-Hbo/hbo-max-logo.svg";
import { ImgTexture } from "../UI/img-texture/img-texture";
import imgTexture from "../UI/img-texture/img-texture.svg"
import { HeaderComponent } from "./headerStyle";
import { ButtonNav } from "../UI/buttons/buttonAssinature";

function Header() {
  return (
    <HeaderComponent>
      <div className="container">
        <div className="container-text">
          <LogoHboMax src={logoHboMax} tamanho="32vw" />
          <h1>MUITO MAIS A VER</h1>
          <h2>Planos a partir de <span className="price">R$18,90 / mês</span></h2>
          <ButtonNav>ASSINE AGORA</ButtonNav>
        </div>
      </div>
      <ImgTexture src={imgTexture} />
    </HeaderComponent>
  );
}

export default Header;
