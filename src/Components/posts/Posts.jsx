import Post from '../post/Post';
import './posts.css';

function Posts({ posts }) {
  return (
    <div className='posts' >
      {posts.length > 0 && posts.map((p) => (
        <Post post={p} key={p._id} />
     ) )}
    </div>
  )
}

export default Posts