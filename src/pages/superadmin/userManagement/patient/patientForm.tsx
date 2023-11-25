import { useLoaderData, useNavigate } from 'react-router-dom'
import { patientFormAPIMapper } from './mapper'
import {
  PatientForm,
  PatientFormSchema
} from '@/templates/userManagement/patient'
import { path } from '@/routes'
import { useCreatePatient, usePatient } from '@/api/userManagement/patient'
import { notify } from '@/components/atoms/notify'

export type ILoaderData =
  | {
      mode: 'view' | 'edit'
      id: string
    }
  | {
      mode: 'create'
    }

export function Component() {
  const loader = useLoaderData() as ILoaderData
  const navigate = useNavigate()

  const { data, isLoading } = usePatient({
    variables: { id: loader.mode === 'create' ? '' : loader.id },
    enabled: loader.mode !== 'create'
  })
  const { mutateAsync } = useCreatePatient(loader.mode !== 'create')()

  const back = () =>
    loader.mode == 'create'
      ? navigate(path.users.patient.link())
      : navigate(path.users.patientView.link(loader.id))

  async function onSubmit(data: PatientFormSchema) {
    const id = loader.mode == 'create' ? null : { id: loader.id }
    mutateAsync(
      { ...patientFormAPIMapper.toAPI(data), ...id },
      {
        onSuccess(data, variables, context) {
          notify.success({ title: 'success', text: 'کاربر ایجاد شد' })
          back()
        }
      }
    )
  }
  if (loader.mode !== 'create' && (isLoading || !data))
    return <div>isLoading...</div>

  return (
    <>
      {loader.mode === 'create' ? (
        <PatientForm mode={loader.mode} onCancel={back} onSubmit={onSubmit} />
      ) : (
        <PatientForm
          mode={loader.mode}
          onCancel={back}
          onSubmit={onSubmit}
          initialValues={patientFormAPIMapper.fromAPI(data!.data)}
          id={loader.id}
        />
      )}
    </>
  )
}
