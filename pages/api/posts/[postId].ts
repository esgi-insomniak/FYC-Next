import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    switch (req.method) {
        case "GET":
            getPostById(req.query.postId as unknown as number, res);
            break;
        default:
            res.status(405).end();
            break;
    }
}

const getPostById = async (id: number, res: NextApiResponse) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const post = await response.json()
    return res.status(200).json(post)
}