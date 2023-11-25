import { useTranslation } from 'react-i18next'
import { Link } from '../atoms/link'
import { MenuItem } from '../atoms/menuItem'
import { ButtonMenuItemProps } from '.'

export function ButtonMenuItem(props: ButtonMenuItemProps) {
  const { onClick, name } = props
  const { t } = useTranslation('form')
  return <MenuItem onClick={onClick}>{t(name)}</MenuItem>
}
