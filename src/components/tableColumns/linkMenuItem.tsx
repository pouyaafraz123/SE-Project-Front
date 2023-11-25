import { useTranslation } from 'react-i18next'
import { Link } from '../atoms/link'
import { MenuItem } from '../atoms/menuItem'
import { LinkMenuItemProps } from '.'

export default function LinkMenuItem(props: LinkMenuItemProps) {
  const { path, name } = props
  const { t } = useTranslation('form')
  return (
    <Link to={path}>
      <MenuItem>{t(name)}</MenuItem>
    </Link>
  )
}
