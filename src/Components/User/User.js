// styled-components
import { Container, Info, Avatar } from "./s_user";

const User = ({user}) => {
  return (
    <Container>
      <Avatar src={user.avatar}></Avatar>
      <Info>
        <a href="">{user.name}</a>
        <span>{user.username}</span>
      </Info>
    </Container>
  )
};

export default User;
