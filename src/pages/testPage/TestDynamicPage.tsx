import { useParams } from 'react-router-dom'

export function TestDynamicPage() {
  const { id } = useParams()
  return (
    <div>
      <h1>Hello World!</h1>
      <h2>id = {id}</h2>
    </div>
  )
}
