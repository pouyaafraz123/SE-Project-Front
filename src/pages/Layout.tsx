import '@styles/global.scss'
import { useTranslation } from 'react-i18next'
import { Outlet } from 'react-router-dom'
import '../App.css'
import '../i18n/i18n'
import '@/theme/useTheme'
import { ToastContainer } from 'react-toastify'
import { TOAST_CONTAINER_PROPS } from '@configs'
import { Suspense } from 'react'
import { SelectBoxContainer } from '@components/molecules/selectBox/index'

export function Layout() {
  // setting dir and lang of html from i18n
  const { i18n } = useTranslation()
  document.documentElement.dir = i18n.dir()
  document.documentElement.lang = i18n.language

  // TODO loading bar here
  return (
    <Suspense>
      <Outlet />
      <ToastContainer {...TOAST_CONTAINER_PROPS} rtl={i18n.dir() === 'rtl'} />
      <SelectBoxContainer />
    </Suspense>
  )
}
