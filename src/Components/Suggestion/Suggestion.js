// styled-components
import {
  Container,
  IconsContainer,
  Icon,
  BoxContainer,
  BoxHeader,
  ButtonContainer,
  ItemContainer,
  Item,
  ArrowIcon,
  DownloadImage,
} from "./s_suggestion";
// Components
import User from "../User/User";
import Button from "../Button/Button";
import RecomendCard from "../RecomendCard/RecomendCard";


const people = [
  {
    name:'Neymar Jr',
    userName:'@neymarjr',
    avatar: 'https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/c8b05bbbeef7e82a82fd32b2f06e858d.jpeg?x-expires=1626634800&x-signature=8wXnzbwQKdl8t6CRiJy675iNLjY%3D'
  },
  {
    name:'Isis valverda',
    userName:'isisval',
    avatar:'https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/d3c8dc9464b71ce6ebb7ef94e21fd398~c5_100x100.jpeg?x-expires=1626634800&x-signature=kmNJA8mXrVG%2BjQRyYQLuXS7eeQ4%3D'
  }
]

const itens = [
  {
    title: 'Woah',
    views: '12.7 views',
    avatar: 'https://p77-sign-va.tiktokcdn.com/musically-maliva-obj/1624310115338245~c5_100x100.jpeg?x-expires=1626634800&x-signature=dZA5g6cRL%2FXjqZ99kT4sU5L7W%2Bc%3D'
  },
  {
    title: 'Teste',
    views: '15.7 views',
    avatar: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/dee24fba8d5c7e0f6da5c23b857454a1~c5_100x100.jpeg?x-expires=1626634800&x-signature=Pgr7%2FePsbAhf99PFlNEA9DXU%2F90%3D'
  }
]

const Suggestion = () => {
  return (
    <Container>
      <IconsContainer>
        <Icon src="/images/facebookIcon.svg"></Icon>
        <Icon src="/images/pinterestIcon.svg"></Icon>
        <Icon src="/images/twitterIcon.svg"></Icon>
      </IconsContainer>
      <BoxContainer>
        <BoxHeader>
          <span>Contas Sugeridas</span>
        </BoxHeader>
        <ItemContainer>
          {people.map((item, key) => (
            <Item key={key}>
              <User user={item} />
              <ButtonContainer>
                <Button fontSize={14} outline>
                  Seguir
                </Button>
              </ButtonContainer>
            </Item>
          ))}
        </ItemContainer>
      </BoxContainer>
      <BoxContainer>
        <BoxHeader>
          <span>Descobrir</span>
        </BoxHeader>
        <ItemContainer>
          {itens.map((item, key) => (
            <Item key={key}>
              <RecomendCard recomend={item} />
              <ArrowIcon></ArrowIcon>
            </Item>
          ))}
        </ItemContainer>
      </BoxContainer>
      <DownloadImage src="/images/appstore.png"></DownloadImage>
      <DownloadImage src="/images/playstore.png"></DownloadImage>
      <DownloadImage src="/images/amazon.png"></DownloadImage>
    </Container>
  );
};

export default Suggestion;
