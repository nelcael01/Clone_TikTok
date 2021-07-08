import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { Container, SidebarContainer, ContentContainer } from "./s_layout";

const Layout = ({ children }) => {
  return (
    <>
      <Header> header</Header>
      <Container>
        <SidebarContainer>
          <Sidebar> Sidebar</Sidebar>
        </SidebarContainer>
        <ContentContainer>
          {children}
        </ContentContainer>
      </Container>
    </>
  );
};

export default Layout;
