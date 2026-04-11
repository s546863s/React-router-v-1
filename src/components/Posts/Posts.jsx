
import { Link, useLoaderData, useNavigate } from 'react-router';

const Posts = () => {

    const navegate = useNavigate()

    const posts = useLoaderData();
    const handelGoHome = () => {
        navegate('/');
    }


    return (
        <div>

            <h1>Posts</h1>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

             {
                posts.map(post => 
                    <div key={post.id} className='border p-4 border-amber-300 rounded-lg shadow-md'>
                        <h3 className='text-xl font-black '>{post.title}</h3>
                        <p>{post.body}</p>

                        <button className='btn btn-primary mt-4'>

                    <Link to={`/posts/${post.id}`} >View Details</Link>


                        </button>

                        <button onClick={handelGoHome} className='btn btn-secondary mt-4'>
                            <Link to="/">Go to Home</Link>
                        </button>

                    </div>
                )
            }
           </div>
            
        </div>
    );
};

export default Posts;