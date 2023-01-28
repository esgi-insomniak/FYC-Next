// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type NextApiRequestWithAnyArgs = NextApiRequest & {
  query: any;
  body: any;
};

type PostType = {
  id: number;
  title: string;
  date: string;
  content: string;
};

const postsData: PostType[] = [
  {
    id: 0,
    title: "NextJS",
    date: "2020-01-01",
    content: `Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.
  
          - **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
          - **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.
          
          Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.`,
  },
  {
    id: 1,
    title: "Two Forms of Pre-rendering",
    date: "2020-01-01",
    content: `Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.
  
          - **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
          - **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.
          
          Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.`,
  },
  {
    id: 2,
    title: "Les routes API",
    date: "2020-01-01",
    content: `Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.
  
          - **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
          - **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.
          
          Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.`,
  },
  {
    id: 3,
    title: "When to Use Static Generation v.s. Server-side Rendering",
    date: "2020-01-02",
    content: `We recommend using **Static Generation** (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.
  
          You can use Static Generation for many types of pages, including:
          
          - Marketing pages
          - Blog posts
          - E-commerce product listings
          - Help and documentation
          
          You should ask yourself: "Can I pre-render this page **ahead** of a user's request?" If the answer is yes, then you should choose Static Generation.
          
          On the other hand, Static Generation is **not** a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.
          
          In that case, you can use **Server-Side Rendering**. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate data.`,
  },
];

export default function handler(
  req: NextApiRequestWithAnyArgs,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    return getPostById(req, res);
  } else if (req.method === "PUT") {
    return updatePostById(req, res);
  } else if (req.method === "DELETE") {
    return deletePostById(req, res);
  } else {
    return res.status(405).end();
  }
}

const getPostById = (
  req: NextApiRequestWithAnyArgs,
  res: NextApiResponse<PostType>
) => {
  res.status(200).json(postsData[req.query.id]);
};

const updatePostById = (
  req: NextApiRequestWithAnyArgs,
  res: NextApiResponse<PostType>
) => {
  const post = req.body;
  postsData[req.query.id] = { ...postsData[req.query.id], ...post };
  res.status(200).json(postsData[req.query.id]);
};

const deletePostById = (
  req: NextApiRequestWithAnyArgs,
  res: NextApiResponse
) => {
  res.status(204).end();
};
