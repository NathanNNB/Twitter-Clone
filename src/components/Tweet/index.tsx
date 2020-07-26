import React from 'react';


import { Container, 
    Retweeted, 
    MyICon, 
    Body, 
    Avatar, 
    Content, 
    Header, 
    Dot,
    Description,
    ImageContent, 
    Icons, 
    Status, 
    CommentIcon, 
    RetweetIcon,
    LikeIcon } from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
        <Retweeted>
            <MyICon/>
            Você Retweetou
        </Retweeted>
        <Body>
            <Avatar/>
            <Content>
                
                <Header>
                    <strong>Nathan Novais</strong>
                    <span>@NathanNBro</span>
                    <Dot/>
                    <time>5 de maio</time>
                </Header>
                
                <Description>Não entendi Dark</Description>
                <ImageContent/>
                
                <Icons>
                    <Status>
                        <CommentIcon/>
                        10
                    </Status>
                    <Status>
                        <RetweetIcon/>
                        5
                    </Status>
                    <Status>
                        <LikeIcon/>
                        35
                    </Status>
                </Icons>
            </Content>
        </Body>

    </Container>

  )
}

export default Tweet;