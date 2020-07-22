import React from 'react';

import { Container, Header, BackIcon,ProfileInfo } from './styles';

const Main: React.FC = () => {
  return (
  <Container>
      <Header>
          <button>
              <BackIcon/>
          </button>
            <ProfileInfo>
                <strong>Nathan NNB</strong>
                <span>25 Tweets</span>

            </ProfileInfo>
      </Header>

      {/* <Profile></Profile> */}
      {/* <BottomMenu> */}
        {/* <HomeIcon/> */}
        {/* <SearchIcon/> */}
        {/* <BellIcon/> */}
        {/* <EmailIcon/> */}
        

      {/* <BottomMenu/> */}
  </Container>
  );
}

export default Main;