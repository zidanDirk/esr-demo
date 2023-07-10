import '../styles/post.css'
import { getPosts } from '../services/post'

export default function Index(props) {
  const { posts } = props
  return (
    <div className='post-index'>
      <h1>Posts</h1>
      <ul>
          {
            posts.map((post) => {
              return <li key={post.id}>
                <a href={`/posts/${post.id}`}>{ post.title }</a>
              </li>;
            })
          }
      </ul>
    </div>
  );
}

export async function getEdgeProps() {
  
  const posts = await getPosts()
  return {
    props: {
      posts,
    },
    revalidate: 1,
    notFound: true,
  }
}