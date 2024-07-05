import { Link } from 'react-router-dom'
import classes from './styles.module.scss'
import { path } from '@/routes'

export function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.companyInfo}>
        <div>
          <h4>فروشگاه آنلاین</h4>
          <p>
            اگر به دنبال محصولاتی هستید که با لبخند همراه باشند، جای درستی
            آمده‌اید! 😄
          </p>
        </div>
        <div>
          <h4>آدرس ما</h4>
          <address>
            تبریز، فلکه دانشگاه، دانشگاه تبریز، دانشکده برق و کامپیوتر
          </address>
        </div>
      </div>
      <div className={classes.navLinks}>
        <h4>دسترسی سریع</h4>
        <ul>
          <li>
            <Link to={path.common.landing.link()}>خانه</Link>
          </li>
          <li>
            <Link to={path.common.aboutUs.link()}>درباره ما</Link>
          </li>
          <li>
            <Link to={path.common.productSearch.link()}>محصولات</Link>
          </li>
          <li>
            <Link to={path.common.contactUs.link()}>تماس با ما</Link>
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
