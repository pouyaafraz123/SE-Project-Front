import { useHF, useCreateHF } from '@api/hf'
import { useLoaderData } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { map } from './helper'
import { IFormValues } from '@/templates/hf/hfForm/hfFormSchema'
import { HFForm } from '@/templates/hf/hfForm/hfForm'
import { path } from '@/routes'

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
  const { parrentId } = path.hf.hfCreate.useParams().values

  const { data, isLoading } = useHF({
    variables: { id: loader.mode == 'create' ? '' : loader.id },
    enabled: loader.mode !== 'create'
  })
  const { mutate } = useCreateHF(loader.mode !== 'create')()

  const back = () =>
    loader.mode == 'create'
      ? navigate(path.hf.hfList.link())
      : navigate(path.hf.hfView.link(loader.id))

  function onSubmit(data: IFormValues) {
    const id = loader.mode == 'create' ? null : { id: loader.id }
    mutate(
      { ...map.toAPI(data, parrentId), ...id },
      {
        onSuccess(data, variables, context) {
          back()
        }
      }
    )
  }

  if (loader.mode !== 'create' && (isLoading || !data)) return null

  return loader.mode == 'create' ? (
    <HFForm mode='create' onSubmit={onSubmit} onCancel={back} />
  ) : (
    <HFForm
      key={loader.mode}
      mode={loader.mode}
      onSubmit={onSubmit}
      onCancel={back}
      initialValues={map.fromAPI(data!.data)}
      id={loader.id}
    />
  )
}
