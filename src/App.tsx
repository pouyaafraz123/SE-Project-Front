import { Typography } from '@components/atoms/typography'
import { Link } from '@components/atoms/link'
import { Separator } from './components/atoms/separator'
import { path } from '@/routes'

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
      <Link to={path.hf.hfList.link()}>لیست مراکز درمانی</Link>
      <Link to={path.hf.hfCreate.link()}>ایجاد مرکز درمانی</Link>
      <Link to={path.hf.hfView.link('1')}>نمایش مرکز درمانی</Link>
      <Link to={path.hf.hfEdit.link('1')}>ویرایش مرکز درمانی</Link>
      <Separator />
      <Link to={path.users.users.link()}>مدیریت کاربران</Link>
      <Separator />
      <Link to={path.users.doctor.link()}>مدیریت پزشکان</Link>
      <Link to={path.users.doctorCreate.link()}>ثبت نام پزشک</Link>
      <Link to={path.users.doctorEdit.link('1')}>ویرایش پزشک</Link>
      <Link to={path.users.doctorView.link('1')}>نمایش پزشک</Link>
      <Separator />
      <Link to={path.financial.list.link()}>لیست قوانین مالی</Link>
      <Link to={path.financial.create.link()}>ایجاد قانون مالی</Link>
    </div>
  )
}

export default App
