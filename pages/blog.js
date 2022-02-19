
export async function getServerSideProps(ctx) {
    const post = await fetch('https://jsonplaceholder.typicode.com/posts');
    const postData = await post.json();


    return {
        props: {
            data: postData
        },
    }
}

export default function Blog(props) {
    const posts = props.data;

    return (
        <div>
            <h1>Blog Page</h1>

            <ul>
                {posts.map((post) => {
                    return (
                        <li key={post.id}>
                            <h4>{post.title}</h4>
                            <p>{post.body}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}