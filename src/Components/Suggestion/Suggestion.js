// styled-components
import {
  Container,
  IconsContainer,
  Icon,
  BoxContainer,
  BoxHeader,
  ItemContainer,
  Item,
  ArrowIcon,
  DownloadImage,
} from "./s_suggestion";
// Components
import User from "../User/User";
import Button from "../Button/Button";
import RecomendCard from "../RecomendCard/RecomendCard";



const Suggestion = () => {
  return (
    <Container>
      <IconsContainer>
        <Icon src="/images/facebookIcon.svg"></Icon>
        <Icon src="/images/pinterestIcon.svg"></Icon>
        <Icon src="/images/twitter Icon.svg"></Icon>
      </IconsContainer>
      <BoxContainer>
        <BoxHeader>
          <span>Contas Sugeridas</span>
        </BoxHeader>
        <ItemContainer>
          {people.map((item, key) => (
            <Item key={key}>
              <User user={item} />
              <Button fontSize={14} outline>
                Seguir
              </Button>
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
