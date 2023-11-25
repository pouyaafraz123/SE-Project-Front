import { useLoaderData, useNavigate } from 'react-router-dom'
import { IDoctorFormLoaderData } from './types'
import { doctorFormAPIMapper } from './mapper'
import { DoctorForm, DoctorFormSchema } from '@/templates/userManagement/doctor'
import { path } from '@/routes'
import { useCreateDoctor, useDoctor } from '@/api/userManagement/doctor'
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

  const { data, isLoading } = useDoctor({
    variables: { id: loader.mode === 'create' ? '' : loader.id },
    enabled: loader.mode !== 'create'
  })
  const { mutateAsync } = useCreateDoctor(loader.mode !== 'create')()

  const back = () =>
    loader.mode == 'create'
      ? navigate(path.users.doctor.link())
      : navigate(path.users.doctorView.link(loader.id))

  async function onSubmit(data: DoctorFormSchema) {
    const id = loader.mode == 'create' ? null : { id: loader.id }
    notify.promise({
      promise: mutateAsync(
        { ...doctorFormAPIMapper.toAPI(data), ...id },
        {
          onSuccess(data, variables, context) {
            back()
          }
        }
      ),
      pendingMessage: { title: 'pending', text: 'در حال ایجاد کاربر' },
      resolvedMessage: { title: 'success', text: 'کاربر ایجاد شد' }
    })
  }
  if (loader.mode !== 'create' && (isLoading || !data))
    return <div>isLoading...</div>
  return (
    <>
      {loader.mode === 'create' ? (
        <DoctorForm mode={loader.mode} onCancel={back} onSubmit={onSubmit} />
      ) : (
        <DoctorForm
          mode={loader.mode}
          onCancel={back}
          onSubmit={onSubmit}
          initialValues={doctorFormAPIMapper.fromAPI(data!.data)}
          id={loader.id}
        />
      )}
    </>
  )
}
