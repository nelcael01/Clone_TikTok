import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { Container, SidebarContainer, ContentContainer } from "./s_layout";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Container>
        <SidebarContainer>
          <Sidebar  /> 
        </SidebarContainer>
        <ContentContainer>
          {children}
        </ContentContainer>
      </Container>
    </>
  );
};

export default Layout;
