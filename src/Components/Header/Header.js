import {
  Container,
  Content,
  LogoContainer,
  LogoIcon,
  Logo,
  OptionsContainer,
  Icon,
  Avatar,
} from "./s_header";

const Header = () => {
  return (
    <Container>
      <Content>
        <LogoContainer>
          <LogoIcon src="/images/logoIcon.svg" />
          <Logo src="/images/logo.svg" />
        </LogoContainer>
          <OptionsContainer>
          <Icon src="/images/uploadIcon.svg" />
          <Avatar>
            <img src="https://avatars.githubusercontent.com/u/47829164?s=60&v=4" />
          </Avatar>
        </OptionsContainer>
      </Content>
    </Container>
  );
};

export default Header;
