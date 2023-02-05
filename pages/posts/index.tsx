import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";

export type Post = {
    title: string;
    id: number;
    body: string;
    userId: number
}

const PostPage: NextPage = () => {
    const [posts, setPosts] = React.useState<Post[]>([]);
    const router = useRouter()
    React.useEffect(() => {
        fetch('/api/posts', { method: 'GET' }).then((res) => res.json()).then((data) => {
            setPosts(data);
        })
    }, []);

    return (
        <div>
            {posts.map((post) => (
                <div key={post.id} onClick={() => router.push(`/posts/${post.id}`)}>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    <p>{post.id}</p>
                </div>
            ))}
        </div>
    )
}

export default PostPage;