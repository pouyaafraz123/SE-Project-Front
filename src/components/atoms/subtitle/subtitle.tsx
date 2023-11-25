import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import { Typography } from '../typography'
import { SubtitleProps } from '.'

export function Subtitle(props: SubtitleProps) {
  const { title, ...rest } = props
  const { t } = useTranslation('form')
  return (
    <Typography variant='formSectionHeader' {...rest}>
      {`${t(title)}:`}
    </Typography>
  )
}
