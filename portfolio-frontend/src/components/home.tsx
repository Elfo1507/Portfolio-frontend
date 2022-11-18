import { HomeImg, HomeStyle, HomeText, HomeTitle } from "../styles/home";
import eu from "../assets/eu.jpeg";

export function Home() {
  return (
    <HomeStyle id="home">
      <h1>.</h1>
      <HomeTitle>
        &lt;h1&gt;Seja bem vindo(a) ao meu portfolio pessoal&lt;/h1&gt;
      </HomeTitle>
      <HomeText>
        Seja bem vindo ao local onde mostrarei meus projetos e minhas
        capacidades, alem de dizer um pouco sobre mim
      </HomeText>
      <HomeImg src={eu} alt="foto de Alefi" />
    </HomeStyle>
  );
}
