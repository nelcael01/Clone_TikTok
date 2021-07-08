import Layout from '../Components/Layout/Layout'
import Feed from '../Components/Feed/Feed'
import Suggestion from '../Components/Suggestion/Suggestion'

const index = ({post = []}) => {
  return (
    <Layout>
      <Feed post={post}>
  
      </Feed>
      {/* <Suggestion></Suggestion> */}
    </Layout>
  )
}

export default index
