import React from 'react';

import {
  Container,
  Main,
  LeftSide,
  RightSide,
  Repos,
  CalendarHeading,
  RepoIcon,
  Tab
} from './styles';

import ProfileData from '../ProfileData';
import RepoCard from '../RepoCard';
import RandomCalendar from '../RandomCalendar';

const Profile: React.FC = () => {

  const TabContent = () => (
    <div className="content">
      <RepoIcon />
      <span className="label">Repositories</span>
      <span className="number">20</span>
    </div>
  )

  return (
    <Container>
      <Tab className="desktop">
        <div className="wrapper">
          <span className="offset" />
          <TabContent />
        </div>
        <span className="line"></span>
      </Tab>

      <Main>
        <LeftSide>
          <ProfileData
            username={"italomedici"}
            name={"Ítalo Médici"}
            avatarUrl={"https://avatars.githubusercontent.com/u/59889993?v=4"}
            followers={21}
            following={32}
            company={"Touchcomp"}
            location={"Itaúna, Brazil"}
            email={"italo.medici969@gmail.com"}
            blog={"linkedin.com/in/italomedici"}
          />
        </LeftSide>

        <RightSide>
          <Tab className="mobile">
            <TabContent />
            <span className="line"></span>
          </Tab>

          <Repos>
            <h2>Random Repos</h2>

            <div>
              {[1, 2, 3, 4, 5, 6].map(r => (
                <RepoCard
                  key={r}
                  username={"italomedici"}
                  reponame={"exercicios-C.Compt-UIT"}
                  description={"Exercicios-C.Compt-UIT"}
                  language={r % 2 === 0 ? "Typescript" : "Javascript"}
                  stars={5}
                  forks={r}
                />
              ))}
            </div>

          </Repos>

          <CalendarHeading>
            Random Calendar (do not represent original data)
          </CalendarHeading>

          <RandomCalendar />
        </RightSide>
      </Main>
    </Container>
  );
}

export default Profile;