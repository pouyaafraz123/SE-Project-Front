import { useTranslation } from 'react-i18next'
import { Outlet } from 'react-router-dom'
import '../App.css'
import '@/theme/useTheme'
import { ToastContainer } from 'react-toastify'
import { TOAST_CONTAINER_PROPS } from '@configs'
import { Suspense } from 'react'
import { SelectBoxContainer } from '@components/molecules/selectBox/index'
import { PageLayout } from '@components/layout/pageLayout'
import { Sidebar, sidebarFn } from '@components/organisms/sidebar'
import { sidebarItems } from '@constants'

import { useUserStore, useUIStore } from '@stores'
import { useProfile } from '@/api/profile'
import { IHeaderProps } from '@/components/organisms/sidebar/types'
import { AlertContainer } from '@/components/molecules/alert'
import { ModalContainer } from '@/components/modals/baseModal'

export function Component() {
  // setting dir and lang of html from i18n
  const { role } = useUserStore()
  const { i18n } = useTranslation()
  const title = useUIStore((state) => state.pageTitle)
  const breadcrumbs = useUIStore((state) => state.breadcrumbs)

  document.documentElement.dir = i18n.dir()
  document.documentElement.lang = i18n.language

  sidebarFn.setItems(sidebarItems[role])

  const { data, isLoading } = useProfile()

  if (isLoading || !data) return null

  const user: IHeaderProps = {
    firstName: data.data.first_name,
    lastName: data.data.last_name,
    imageUrl: data.data.avatar,
    hfName:
      data.data.facilities.find(
        (value) => value.id == data.data.current_facility
      )?.name || 'noFacilities'
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
