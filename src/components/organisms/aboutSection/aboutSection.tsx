import clsx from 'clsx'
import classes from './styles.module.scss'
import projectManager from '@/assets/images/projectManager.jpg'
import frontTeam from '@/assets/images/frontTeam.jpg'
import backTeam from '@/assets/images/backTeam.jpg'

export function AboutUs() {
  return (
    <div className={clsx(classes.aboutUs)}>
      <header className={clsx(classes.aboutUs__header)}>
        <h1>درباره ما</h1>
        <p>یه تیم سخت کوش و دلسوز پشت این پروژه بوده 🙎</p>
      </header>
      <div className={clsx(classes.aboutUs__content)}>
        <section className={clsx(classes.aboutUs__content__section)}>
          <h2>هدف ما🎯</h2>
          <p>
            ما اینجا به همه فروشنده ها یه پلتفرم کامل میدیم که همه تیمشون رو
            بتونن پشتیبانی کنن. از طرفی ما هوای مشتری ها رو هم داریم تا همیشه
            تجربه خوبی موقع خرید داشته باشن
          </p>
        </section>
        <section className={clsx(classes.aboutUs__content__section)}>
          <h2>آینده ما☀️</h2>
          <p>کی میدونه؟ شاید یه روزی جای آمازون رو هم گرفتیم</p>
        </section>
        <section className={clsx(classes.aboutUs__content__section)}>
          <h2>ارزشهای ما📓</h2>
          <p>
            ما همیشه مطمئن میشیم که مشتری راضی از سایت خارج بشه و کسی سرش کلاه
            نره
          </p>
        </section>
      </div>
      <div className={clsx(classes.aboutUs__team)}>
        <h2 className={clsx(classes.aboutUs__team__title)}>اعضای تیم</h2>
        <div className={clsx(classes.aboutUs__team__members)}>
          <div className={clsx(classes.aboutUs__team__members__member)}>
            <img src={projectManager} alt='Team Member 1' />
            <h3>حسین حمزه زاده</h3>
            <p>مدیر پروژه</p>
          </div>
          <div className={clsx(classes.aboutUs__team__members__member)}>
            <img src={frontTeam} alt='Team Member 2' />
            <h3>محمد حسین پور</h3>
            <p>تیم فرانت</p>
          </div>
          <div className={clsx(classes.aboutUs__team__members__member)}>
            <img src={backTeam} alt='Team Member 3' />
            <h3>علی کرمی</h3>
            <p>تیم بک</p>
          </div>
        </div>
      </div>
    </div>
  )
}
