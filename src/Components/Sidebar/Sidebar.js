import React from "react";
// styled-components
import {
  Container, 
  MenuItem,
  Following,
  FollowingHeader,
  InfoContainer,
  Links,
} from "./s_sidebar";

// components
import User from "../User/User";

const Sidebar = () => {
  return (
    <Container>
      <MenuItem active>
        <img src="/images/homeIcon.svg"></img>
        <span> Para você </span>
      </MenuItem>

      <MenuItem>
        <img src="/images/peopleIcon.svg" />
        <span> Seguindo </span>
      </MenuItem>

      <Following>
        <FollowingHeader> Suas principais contas</FollowingHeader>
        <User
          user={{
            name: "Nelcael",
            username: "nelcael07",
            avatar: "https://avatars.githubusercontent.com/u/47829164?s=60&v=4",
          }}
        />
      </Following>

      <InfoContainer>
        <Links margin>
          <a> Início </a>
          <a> Sobre </a>
          <a> Sala de imprensa </a>
          <a> Carreira </a>
          <a> ByteDance </a>
        </Links>

        <Links>
          <a> Ajuda </a>
          <a> Segurança </a>
        </Links>

        <Links>
          <a> Diretrizes da comunidade </a>
          <a> Termos </a>
        </Links>

        <Links margin>
          <a> Privacidade </a>
        </Links>

        <Links margin>
          <a> © 2021 TikTok </a>
        </Links>
      </InfoContainer>
    </Container>
  );
};

export default Sidebar;
