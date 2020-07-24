import React from 'react';


import { Container,
     Banner,
     Avatar,
     ProfileData,
    LocationIcon,
    CakeIcon,
    Followage,
    EditButton
} from './style';

const ProfilePage: React.FC = () => {
  return (
    <Container>
        <Banner>
            <Avatar/>
        </Banner>
        <ProfileData>
            <EditButton outlined>Editar Perfil</EditButton>
            <h1>Nathan Novais</h1>
            <h2>NathanNBro</h2>
            <p>Instagram: NathanNNB</p>
        
            <ul>
                <li>
                    <LocationIcon/>
                    São Paulo, Brasil
                </li>
                <li>
                    <CakeIcon/>
                    Nascido em 23 de outubro de 2001

                </li>
            </ul>
            <Followage>
                <span>
                    seguindo<strong>100  </strong>
                </span>
                <span>
                    <strong>    100</strong> seguidores
                </span>
            </Followage>
        
        </ProfileData>
    </Container>

  );
}

export default ProfilePage;