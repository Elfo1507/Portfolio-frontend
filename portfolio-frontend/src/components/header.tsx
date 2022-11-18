import Logo from "../assets/logo.png";
import { HeaderMenu } from "../styles/header";

export function Header() {
  return (
    <HeaderMenu>
      <img src={Logo} alt="logo" height="30px" width="30px" />
      <div>
        <a href="#home">Home</a>
        <a href="#projetos">Projetos</a>
        <a href="#sobre">Sobre</a>
        <a href="#contatos">Contatos</a>
      </div>
    </HeaderMenu>
  );
}
