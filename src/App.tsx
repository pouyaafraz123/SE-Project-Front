import { Typography } from '@components/atoms/typography'
import { Link } from '@components/atoms/link'
import { path as hfPath } from '@routes/hf/path'
// import {} from '@routes/testRoutes'

function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Typography variant='h3'>صفحات</Typography>
      <Link to={hfPath.hfList.link()}>لیست مراکز درمانی</Link>
      <Link to={hfPath.hfCreate.link()}>ایجاد مرکز درمانی</Link>
      <Link to={hfPath.hfView.link(1)}>نمایش مرکز درمانی</Link>
      <Link to={hfPath.hfEdit.link(1)}>ویرایش مرکز درمانی</Link>
    </div>
  )
}

export default App
