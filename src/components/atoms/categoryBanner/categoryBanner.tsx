import { ICategoryBanner } from '@components/atoms/categoryBanner/types.ts'
import { Typography } from '@components/atoms/typography'
import clsx from 'clsx'
import classes from './styles.module.scss'

export function CategoryBanner(props: ICategoryBanner) {
  const { id, title, bannerUrl } = props

  // TODO on click redirect to page
  return (
    <div className={clsx(classes.banner)}>
      <div
        style={{ backgroundImage: `url(${bannerUrl})` }}
        className={clsx(classes.banner__imageContainer)}
      ></div>
      <div className={clsx(classes.banner__backdrop)}>
        <Typography
          variant={'h3'}
          color={'white'}
          className={clsx(classes.banner__text)}
        >
          {title}
        </Typography>
      </div>
    </div>
  )
}
