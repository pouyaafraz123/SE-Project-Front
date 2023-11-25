import { useLoaderData, useNavigate } from 'react-router-dom'
import {
  useRules,
  useCreateRule,
  useEditRule,
  useDeleteRule
} from '@api/financial'
import { mapCreate, mapEdit, mapDoctor } from './helper'
import {
  FinancialRuleForm,
  IFormValues
} from '@/templates/financialManagement/financialRuleForm'
import { queryClient } from '@/api/clients'
import { path } from '@/routes'
import { IFinancialRule } from '@/components/listBoxes/financialRule'
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
  const { mode } = loader
  const navigate = useNavigate()

  const { mutateAsync: createMutation } = useCreateRule()
  const { mutate: editMutation } = useEditRule()
  const { mutate: deleteMutation } = useDeleteRule()

  const { data, isLoading } = useRules({
    variables: { doctor_id: mode == 'create' ? '' : loader.id },
    enabled: mode !== 'create'
  })

  const back = () =>
    loader.mode == 'create'
      ? navigate(path.financial.list.link())
      : navigate(-1)

  function onSubmit(data: IFormValues) {
    const { doctorList, ruleList, doctor } = data
    const _doctorList = mode == 'create' ? doctorList : [{ id: doctor.key }]

    notify.promise({
      promise: createMutation(
        { ...mapCreate.toAPI(_doctorList, ruleList) },
        {
          onSuccess(data, variables, context) {
            back()
          }
        }
      ),
      pendingMessage: { title: 'pending', text: 'در حال ایجاد' },
      resolvedMessage: { title: 'success', text: 'ایجاد شد' }
    })
  }

  function onPatch(data: IFinancialRule) {
    editMutation(mapEdit.toAPI(data))
  }

  function onDelete(id: string) {
    deleteMutation({ id })
  }

  if (mode !== 'create' && (isLoading || !data)) return null

  if (mode == 'create')
    return (
      <FinancialRuleForm mode='create' onSubmit={onSubmit} onCancel={back} />
    )
  else if (mode == 'view')
    return (
      <FinancialRuleForm
        mode='view'
        doctor={mapDoctor.fromAPI(data!.data.doctor)}
        list={data!.data.list}
        onDelete={onDelete}
        onSubmit={onPatch}
      />
    )
  else
    return (
      <FinancialRuleForm
        mode='edit'
        doctor={mapDoctor.fromAPI(data!.data.doctor)}
        onCancel={back}
        onSubmit={onSubmit}
      />
    )
}
