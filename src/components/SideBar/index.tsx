import React from 'react';
import StrickyBox from 'react-sticky-box';
import { Container,
    SearchWrapper,
    SearchInput,
    SearchIcon,
    Body } from './styles';
import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';
const SideBar: React.FC = () => {
  return (
    <Container>
        <SearchWrapper>
            <SearchInput placeholder="Buscar no Twitter"/>
            <SearchIcon/>
        </SearchWrapper>

        <StrickyBox>
        <Body>
            <List
              title="Talvez você curta"
              elements={[
              <FollowSuggestion name="Ramon" nickname="@Ramon"/>,
              <FollowSuggestion name="Verde" nickname="@Verde"/>,
              <FollowSuggestion name="Mauro" nickname="@Mauro"/>
            ]}
            
            />
            <List
              title="Talvez você curta"
              elements={[
              <News/>,<News/>,<News/>]}
            
            />
            <List
              title="Talvez você curta"
              elements={[
              <News/>,<News/>,<News/>]}
            
            />
            <List
              title="Talvez você curta"
              elements={[
              <News/>,<News/>,<News/>]}
            
            />
            <List
              title="Talvez você curta"
              elements={[
              <News/>,<News/>,<News/>]}
            
            />
            <List
              title="Talvez você curta"
              elements={[
              <News/>,<News/>,<News/>]}
            
            />

        </Body>
        </StrickyBox>


    </Container>


  );
}

export default SideBar;