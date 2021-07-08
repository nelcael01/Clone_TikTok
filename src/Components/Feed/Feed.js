// components
import PostCard from '../../Components/PostCard/PostCard'

// styled-components
import { Container } from './s_feed';

const Feed = ({post}) => {
  return (
    <Container>
      {post.map((item,key)=> (
        <PostCard key={key} data={item}>

        </PostCard>
      ))}
    </Container>
  );
}

export default Feed;
