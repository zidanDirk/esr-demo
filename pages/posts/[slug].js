import { getPostDetail } from '../../services/post'

export default function postDetail(props) {
    const { postDetail } = props
    return (
      <div>
        <h1>{ postDetail.title }</h1>
        <p>userId : { postDetail.userId }</p>
        <p>
            {
                postDetail.body
            }
        </p>
      </div>
    );
  }

export async function getEdgeProps({ params }) {
    const { slug } = params;
    const postDetail = await getPostDetail({ slug });
  
    return {
      props: {
        postDetail,
        slug
      }
    }
  }
  