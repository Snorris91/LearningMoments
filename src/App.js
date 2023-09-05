import './Apps.css'
import { useEffect, useState } from "react"
import { getAllPosts, getExpandedPosts } from "./services/getPosts"


export const App = () => {
  const [allPosts, setAllPosts] = useState([])
  const [expandedPosts, setExpandedPosts] = useState([])


    useEffect(() => {
      getAllPosts().then((postArray) => {
        setAllPosts(postArray)
        console.log(postArray)
      })

      getExpandedPosts().then((expandedArray) => {
        setExpandedPosts(expandedArray)
        console.log(expandedArray)
      })


    }, [])



  return ( <div>

  <div>
    <h2 className='post-heading'>Current Posts</h2>
    <div className='posts'>
    {expandedPosts.map((post) => {
      return (
        <section className='post-box' key={post.id}>
          <h3 className='post-title'>{post.title}</h3><br></br>
          <p className='post-topic'>{post.topic.name}</p>
        </section>
      )
    })}</div>
  </div>

  </div>
  )
}
