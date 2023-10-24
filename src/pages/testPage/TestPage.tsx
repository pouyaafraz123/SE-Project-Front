import { Link } from 'react-router-dom'
import { useComments, useCreateComment } from '@api/testApi'
import { useQueryClient } from '@tanstack/react-query'
import { path } from '@routes/testRoutes/path'

export function Component() {
  const queryClient = useQueryClient()
  const { data, isLoading, isFetching, isError, error } = useComments({
    variables: { discussionId: 1 }
  })
  const invalidate = () => {
    queryClient.invalidateQueries(useComments.getKey({ discussionId: 1 }))
  }
  const mutation = useCreateComment()

  if (isError) return <span>{error.message}</span>

  if (isLoading) {
    return <span>Loading...</span>
  }
  if (isFetching) {
    return <span>Fetching...</span>
  }

  return (
    <div>
      <p>
        <i>Hello World!</i>
      </p>
      {data?.map((comment, i) => (
        <div key={i}>
          @{comment.author} :: {comment.body}
        </div>
      ))}
      <Link to={path.test2.link()}>test2</Link>
      <button onClick={invalidate}>invalidate</button>
      <button
        onClick={() =>
          mutation.mutateAsync({
            author: 'vahid',
            body: 'helloooo',
            discussionId: 1
          })
        }
      >
        add
      </button>
    </div>
  )
}
