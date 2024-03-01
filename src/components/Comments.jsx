import { useState, useEffect } from 'react'
import axios from '../lib/axios'
import useAuth from '../hooks/useAuth'
import useComments from '../hooks/useComments'

const Comments = ({postId, updateComments} ) => {
  const {comments, setComments} = useComments()
  const [errMsg, setErrMsg] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const { auth } = useAuth()
  const [parentPostId, setParentPostId] = useState(postId)

  useEffect(() => {
    axios
      .get(`posts/${parentPostId}/comments`)
      .then(response => {

        setComments(response.data.allComments)
        setIsLoading(false)
      })
      .catch(err => {
        if (!err?.response) {
          setErrMsg('No Server Response')
        } else if (err.response?.status === 400) {
          setErrMsg('Missing Username or Password')
        } else if (err.response?.status === 401) {
          setErrMsg('Unauthorized')
        } else if (err.response?.status === 500) {
          setErrMsg('Could not retrieve comments')
        } else {
          setErrMsg('Get allComments Failed')
        }
      })
  }, [updateComments])

  if (isLoading) {
    return <p>Loading...</p>
  } else if (comments.length < 1) {
    return <p className='comments-section-empty'>This post has no comments yet...</p>
  } else {
    return (
      <section className='comments-section'>
        {comments.map(comment => {
          const date = new Date(comment.createdAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })

          const capFirst = (str) => str.charAt(0).toUpperCase()+ str.slice(1)
          return (
            <article key={comment._id} className='comment-card'>
              <h5 className='comment-author'>{capFirst(comment?.author.username)} said:</h5>
              <div className="comment-card-content">{comment.content}</div>
              <div className='comment-card-date'>{date}</div>
              
            </article>
          )
        })}
      </section>
    )
  }
}

export default Comments
