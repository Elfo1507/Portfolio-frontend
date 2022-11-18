import { PProjetosStyle } from "../styles/pprojetos";
import kenziehub from "../assets/kenziehub.png";
import nomadroom from "../assets/nomadroom.png";

export function PProjetos() {
  return (
    <PProjetosStyle>
      <div>
        <img src={kenziehub} alt="Interface do KenzieHub" />
        <p>
          Esse foi meu maior projeto individual. Com a implementação de
          Typescript e utilização de uma API de cadastro, login e registro de
          tecnologias, essa aplicação cuida de criar um hub com seus
          aprendizados
        </p>
      </div>
      <div>
        <img src={nomadroom} alt="Interface do NomadRoom" />
        <p>
          Meu maior projeto em equipe. O grupo composto por Diego Steiner, Breno
          Lobianco, Eugenio Lobo, Lucas Alex, Jonathan Vinicius, e eu criou um
          uma aplicação para compartilhamento e procura de quartos para
          viajantes/mochileiros. O site conta com cadastro de usuarios e quartos
          e contato direto do interessado com o dono do quarto
        </p>
      </div>
    </PProjetosStyle>
  );
}
