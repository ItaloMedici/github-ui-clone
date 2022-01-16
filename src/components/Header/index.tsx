import React from 'react';

import { Container, GitHubLogo, SearchForm } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <GitHubLogo />

      <SearchForm>
        <input placeholder='Enter a Username or repo...' />
      </SearchForm>
    </Container>
  );
}

export default Header;