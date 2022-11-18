import { ContatosStyle } from "../styles/contatos";
import { BsWhatsapp, BsLinkedin, BsGithub } from "react-icons/bs";

export function Contatos() {
  return (
    <ContatosStyle id="contatos">
      <h2>Fale comigo</h2>
      <div>
        <a href="https://api.whatsapp.com/send?phone=5531995382956" target="_blank" rel="noreferrer">
          Whatsapp
          <BsWhatsapp />
        </a>
        <a href="https://www.linkedin.com/in/alefi-cunha/" target="_blank" rel="noreferrer">
          Linkedin
          <BsLinkedin />
        </a>
        <a href="https://github.com/Elfo1507" target="_blank" rel="noreferrer">
          GitHub
          <BsGithub />
        </a>
      </div>
    </ContatosStyle>
  );
}
