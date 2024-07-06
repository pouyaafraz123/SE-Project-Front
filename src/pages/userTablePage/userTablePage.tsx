import { BasePage } from '@pages/basePage/basePage.tsx'
import { useTableParams } from '@components/organisms/pageTable'
import { useUserTable } from '@api/users'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { UsersTable } from '@/templates/usersTable'
import { useProfile } from '@/api/profile'
import { Form } from '@/components/formControls/baseForm'
import { FastInput } from '@/components/fastFields'
import { usePostPanelMember } from '@/api/member/postMember'
import { useUserStore } from '@/stores'
import { UserTypes } from '@/constants'
export function Component() {
  const navigate = useNavigate()
  const { paginationValues, searchValue, filterValues, tableProps } =
    useTableParams({})
  const { currentPage, resultsPerPage } = paginationValues

  const { data: profile } = useProfile()
  const role = useUserStore((state) => state.role)

  const { data, isLoading, isFetching } = useUserTable({
    variables: {
      PageSize: resultsPerPage,
      PageIndex: currentPage,
      panelGuid: profile?.data.panelGuid ?? ''
    },
    enabled: !!profile?.data.panelGuid
  })

  const { mutate: postPanel } = usePostPanelMember()

  interface IAddMember {
    email: string
  }
  const formik = useFormik<IAddMember>({
    initialValues: { email: '' },
    onSubmit: (values) => {
      postPanel(values)
    }
  })

  return (
    <BasePage isNeedBack>
      <UsersTable
        data={data?.data || ([] as any)}
        total={data?.data || (0 as any)}
        tableParamProps={tableProps}
        isLoading={isLoading}
        isFetching={isFetching}
      />
      {role == UserTypes.MANAGER && (
        <>
          <div style={{ height: '35px' }} />
          <Form
            submitBtnTitle={'submit'}
            onSubmit={formik.handleSubmit}
            onCancel={() => navigate(-1)}
          >
            <h2>افزودن کارکن</h2>
            <FastInput name={'email'} type={'email'} formik={formik} />
          </Form>
        </>
      )}
    </BasePage>
  )
}
