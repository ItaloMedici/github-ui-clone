import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  Breacdcrumb,
  RepoIcon,
  Stats,
  StarIcon,
  ForkIcon,
  LinkButton,
  GitHubIcon
} from './styles';

const Repo: React.FC = () => {
  return (
    <Container>
      <Breacdcrumb>
        <RepoIcon />

        <Link className={"username"} to={"/ItaloMedici"}>
          ItaloMedici
        </Link>

        <span>/</span>

        <Link className={"reponame"} to={"/ItaloMedici/exercicios-C.Compt-UIT"}>
          youtube-content
        </Link>
      </Breacdcrumb>

      <p>Contains all exercices of my course</p>

      <Stats>
        <li>
          <StarIcon />
          <b>9</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>0</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={"https://github.com/ItaloMedici/Exercicios-C.Compt-UIT"}>
        <GitHubIcon />
        <span>View on GitHub</span>
      </LinkButton>
    </Container>
  );
}

export default Repo;