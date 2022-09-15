import Post from '../post/Post';
import './posts.css';

function Posts({ posts }) {
  return (
    <div className='posts' >
      {posts && Object.entries(posts).map((p) => (
        <Post post={p} key={p._id} />
     ) )}
    </div>
  )
}

export default Posts