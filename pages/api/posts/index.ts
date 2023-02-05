import { NextApiRequest, NextApiResponse } from "next";
import { Post } from "../../posts";
export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    switch (req.method) {
        case "GET":
            getPosts(res);
            break;
        default:
            res.status(405).end();
            break;
    }
}
const getPosts = async (res: NextApiResponse) => {
    const posts: Post[] = []
    if (posts.length === 0) {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
            .then(res => res.json())
            .then(data => {
                res.status(200).json(data)
            }
            )
    } else {
        res.status(200).json(posts)
    }
}