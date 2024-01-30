import { Typography } from '@components/atoms/typography'
import { IContainerBoxProps } from '@components/atoms/containerBox/types.ts'
import { useNavigate } from 'react-router-dom'
import { Icon } from '@components/atoms/icons'
import clsx from 'clsx'
import classes from './styles.module.scss'

export function ContainerBox({ name, link, children }: IContainerBoxProps) {
  const navigate = useNavigate()

  return (
    <div className={clsx(classes.containerBox)}>
      <div
        onClick={() => navigate(link?.to, link?.options)}
        className={clsx(
          classes.containerBox__header,
          !link?.to && classes.containerBox__headerNoHover
        )}
      >
        <Typography variant={'h4'}>{name}</Typography>
        {link?.to && <Icon name={'arrow-left'} />}
      </div>
      <div className={clsx(classes.containerBox__content)}>{children}</div>
    </div>
  )
}
