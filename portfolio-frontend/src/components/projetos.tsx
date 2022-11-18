import { useEffect, useState } from "react";
import { git } from "../github";
import { ProjetosContainer } from "../styles/projetos";
import { Card } from "./cards";

// interface iGitUser {
//   login: string;
//   id: number;
//   node_id: string;
//   avatar_url: string;
//   gravatar_id: string;
//   url: string;
//   html_url: string;
//   followers_url: string;
//   following_url: string;
//   gists_url: string;
//   starred_url: string;
//   subscriptions_url: string;
//   organizations_url: string;
//   repos_url: string;
//   events_url: string;
//   received_events_url: string;
//   type: string;
//   site_admin: boolean;
//   name: string;
//   company: string;
//   blog: string;
//   location: string;
//   email: string;
//   hireable: boolean;
//   bio: string;
//   twitter_username: string;
//   public_repos: number;
//   public_gists: number;
//   followers: number;
//   following: number;
//   created_at: string;
//   updated_at: string;
// }

interface iGitRepo {
  id: number;
  name: string;
  html_url: string;
}

// interface iRepo {
//   id: number;
//   name: string;
//   lang: string;
//   link: string;
// }

export function Projetos() {
  const [listaRepos, setListaRepos] = useState<iGitRepo[]>();

  async function pegarDados() {
    try {
      let res = await git.get<iGitRepo[]>("/users/Elfo1507/repos");
      console.log(res);
      setListaRepos(res.data);
      console.log(listaRepos);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    pegarDados();
  }, []);

  return (
    <ProjetosContainer id="projetos">
      <h3>Aqui ficam meus repositórios do GitHub</h3>
      <p>Só clicar na palavra "Repo" que você será levado ao projeto</p>
      <ul>
        {listaRepos &&
          listaRepos.map((e) => {
            return (
              <Card
                key={e.id}
                name={e.name}
                link={e.html_url}
              />
            );
          })}
      </ul>
    </ProjetosContainer>
  );
}
