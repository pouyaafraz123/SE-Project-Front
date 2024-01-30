import { Grid } from '@components/atoms/Grid'
import { PanelCard } from '@components/atoms/panelCard'
import { useNavigate } from 'react-router-dom'
import { useUserStore } from '@stores'
import { UserTypes } from '@constants'
import { IPanelTemplateProps } from '@/templates/panel/types.ts'
import { path } from '@/routes'

export function PanelTemplate({ id }: IPanelTemplateProps) {
  const navigate = useNavigate()
  const logout = useUserStore((state) => state.logout)
  const role = useUserStore((state) => state.role)

  return (
    <div>
      <Grid>
        <PanelCard
          title={'ویرایش پروفایل'}
          onClick={() => {
            navigate(path.common.profileEdit.link())
          }}
        />
        {role === UserTypes.CUSTOMER && (
          <PanelCard
            title={'سبد خرید'}
            onClick={() => {
              navigate(path.common.cart.link())
            }}
          />
        )}
        {role === UserTypes.CUSTOMER && (
          <PanelCard
            title={'آدرس ها'}
            onClick={() => {
              navigate(path.common.address.link())
            }}
          />
        )}
        {role && [UserTypes.MANAGER, UserTypes.STAFF]?.includes(role) && (
          <PanelCard
            title={'مدیریت کاربران'}
            onClick={() => navigate(path.common.users.link())}
          />
        )}
        <PanelCard
          title={'خروج از حساب کاربری'}
          onClick={() => {
            logout()
          }}
        />
      </Grid>
    </div>
  )
}
