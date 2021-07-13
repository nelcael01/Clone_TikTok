// components
import PostCard from '../../Components/PostCard/PostCard'

// styled-components
import { Container } from './s_feed';

const Feed = ({post}) => {
  return (
    <Container>
      {post.map((item,key)=> (
        <PostCard key={key} data={item} />
      ))}
    </Container>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}

export default Feed;
