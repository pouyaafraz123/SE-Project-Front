import { Link } from 'react-router-dom'
import classes from './styles.module.scss'
import { path } from '@/routes'

export function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.companyInfo}>
        <h4>فروشگاه آنلاین</h4>
        <p>یک متن رندوم درباره فروشگاه</p>
        <p>یک ارزوی زیبا برای مشتری</p>
      </div>
      <div className={classes.navLinks}>
        <h4>دسترسی سریع</h4>
        <ul>
          <li>
            <Link to={path.common.landing.link()}>خانه</Link>
          </li>
          <li>
            <Link to={path.common.productSearch.link()}>محصولات</Link>
          </li>
          <li>
            <Link to={path.common.brands.link()}>برند ها</Link>
          </li>
          <li>
            <Link to='/contact'>تماس با ما</Link>
          </li>
        </ul>
      </div>
      <div className={classes.socialMedia}>
        <h4>ما را دنبال کنید</h4>
        <a
          href='https://facebook.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          فیس بوک
        </a>
        <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
          توییتر
        </a>
        <a
          href='https://instagram.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          اینستاگرام
        </a>
      </div>
    </div>
  )
}
