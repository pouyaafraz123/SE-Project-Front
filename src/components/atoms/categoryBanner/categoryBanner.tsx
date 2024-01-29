import { ICategoryBanner } from '@components/atoms/categoryBanner/types.ts'
import { Typography } from '@components/atoms/typography'
import clsx from 'clsx'
import classes from './styles.module.scss'
import { useNavigate } from 'react-router-dom'
import { IOption } from '@/interfaces'
import { path } from '@/routes'

export function CategoryBanner(props: ICategoryBanner) {
  const { id, title, bannerUrl } = props

  const navigate = useNavigate()

  // TODO on click redirect to page
  return (
    <div
      className={clsx(classes.banner)}
      onClick={() => {
        const search = new URLSearchParams()
        const category: IOption = { key: id?.toString(), value: title }
        search.set('category', JSON.stringify(category))
        navigate(
          {
            pathname: path.common.productSearch.link(),
            search: search?.toString()
          },
          { replace: true }
        )
      }}
    >
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
