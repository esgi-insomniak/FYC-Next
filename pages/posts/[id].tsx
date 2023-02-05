import { NextPage } from "next"
import { useRouter } from "next/router"
import React from "react"
import { Post } from "."
import Layout from "../../components/layout"

const PostInfoPage: NextPage = () => {
  const router = useRouter()
  const { id: postId } = router.query
  const [post, setPost] = React.useState<Post>({} as Post)

  React.useEffect(() => {
    fetch(`/api/posts/${postId}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setPost(data)
      })
  }, [postId])

  return (
    <Layout>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <p>{post.id}</p>
    </Layout>
  )
}

export default PostInfoPage