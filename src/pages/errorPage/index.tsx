import { useRouteError, isRouteErrorResponse } from 'react-router-dom'

export function ErrorPage() {
  const error = useRouteError()
  let errorMessage = 'Unknown error'
  let errorCode = 500 // default error code (for unexpected errors)

  if (isRouteErrorResponse(error)) {
    // 4xx or 5xx
    errorMessage = error.data
    errorCode = error.status
  } else if (error instanceof Error) {
    errorMessage = error.message
  } else if (typeof error === 'string') {
    errorMessage = error
  }

  console.error(errorMessage)

  // Todo: error pages go here
  // should we use diffrent components for each code or do it all here??

  return (
    <div>
      <h1>{errorCode}</h1>
      <p>
        <i>{errorMessage}</i>
      </p>
    </div>
  )
}
