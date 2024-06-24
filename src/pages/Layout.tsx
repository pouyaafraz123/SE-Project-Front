import { useTranslation } from 'react-i18next'
import { Outlet } from 'react-router-dom'
import '../App.css'
import '@/theme/useTheme'
import { ToastContainer } from 'react-toastify'
import { TOAST_CONTAINER_PROPS } from '@configs'
import { Suspense, useEffect } from 'react'
import { SelectBoxContainer } from '@components/molecules/selectBox'
import { PageLayout } from '@components/layout/pageLayout'
import { Sidebar, sidebarFn } from '@components/organisms/sidebar'
import { sidebarItems } from '@constants'

import { useUIStore, useUserStore } from '@stores'
import { useProfile } from '@/api/profile'
import { IHeaderProps } from '@/components/organisms/sidebar/types'
import { AlertContainer } from '@/components/molecules/alert'
import { ModalContainer } from '@/components/modals/baseModal'
import { Footer } from '@/components/organisms/footerSection'

export function Component() {
  // setting dir and lang of html from i18n
  const { role } = useUserStore()
  const { i18n } = useTranslation()
  const title = useUIStore((state) => state.pageTitle)
  const breadcrumbs = useUIStore((state) => state.breadcrumbs)

  document.documentElement.dir = i18n.dir()
  document.documentElement.lang = i18n.language

  useEffect(() => {
    sidebarFn.setItems(sidebarItems[role!])
  }, [role])

  const { data, isLoading } = useProfile()

  if (isLoading || !data) return null

  const user: IHeaderProps = {
    firstName: data.data.firstName,
    lastName: data.data.lastName,
    imageUrl: data.data.avatarFile?.url
  }

  // TODO loading bar here
  return (
    <Suspense>
      <Sidebar header={user}>
        <PageLayout title={title} breadcrumbs={breadcrumbs}>
          <Outlet />
        </PageLayout>
      </Sidebar>
      <ToastContainer {...TOAST_CONTAINER_PROPS} rtl={i18n.dir() === 'rtl'} />
      <SelectBoxContainer />
      <AlertContainer />
      <ModalContainer />
    </Suspense>
  )
}
