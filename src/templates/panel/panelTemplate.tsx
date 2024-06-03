import { Grid } from '@components/atoms/Grid'
import { PanelCard } from '@components/atoms/panelCard'
import { useNavigate } from 'react-router-dom'
import { useUserStore } from '@stores'
import { UserTypes } from '@constants'
import { useFormik } from 'formik'
import { Form } from '@components/formControls/baseForm'
import { BarLoader } from 'react-spinners'
import { IPanelTemplateProps } from '@/templates/panel/types.ts'
import { path } from '@/routes'
import { usePanels } from '@/api/panel/getPanel'
import { FastInput } from '@/components/fastFields'
import { usePostPanel } from '@/api/panel/postPanel'

export function PanelTemplate({ id }: IPanelTemplateProps) {
  const navigate = useNavigate()
  const logout = useUserStore((state) => state.logout)
  const role = useUserStore((state) => state.role)

  const { data: panels, isLoading: isLoadingPanel } = usePanels({
    enabled: role == UserTypes.MANAGER,
    onError: () => {}
  })

  const { mutate: postPanel } = usePostPanel()

  interface IAddPanel {
    name: string
  }
  const formik = useFormik<IAddPanel>({
    initialValues: { name: '' },
    onSubmit: (values) => {
      postPanel(values)
    }
  })

  if (!panels?.data && !isLoadingPanel && role == UserTypes.MANAGER) {
    return (
      <Form
        submitBtnTitle={'submit'}
        onSubmit={formik.handleSubmit}
        onCancel={() => navigate(-1)}
      >
        <h2>ایجاد پنل</h2>
        <FastInput name={'name'} type={'panel_name'} formik={formik} />
      </Form>
    )
  }

  return !isLoadingPanel || role != UserTypes.MANAGER ? (
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
  ) : (
    <BarLoader />
  )
}
