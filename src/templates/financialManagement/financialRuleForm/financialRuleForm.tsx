import { useFormik } from 'formik'
import { Form } from '@components/formControls/baseForm'
import { useTranslation } from 'react-i18next'
import {
  DoctorListBox,
  AddDoctorForm,
  IDoctor
} from '@components/listBoxes/doctor'
import { HFListBox } from '@components/listBoxes/hf'
import {
  FinancialListBox,
  IFinancialRule
} from '@components/listBoxes/financialRule'
import {
  FinancialListBox as AllRuleListBox,
  IDoctorFinancialRule
} from '@components/listBoxes/financialRuleWithHF'
import { useState } from 'react'
import { IFormValues, formConfig, onSubmit } from './schema'
import { FinancialEditModal } from '@/components/modals'
import { path } from '@/routes'
import { doctorListBoxFormikSchema } from '@/components/listBoxes/doctor/types'

type IProps =
  | {
      mode: 'create'
      onSubmit: (data: IFormValues) => void
      onCancel: () => void
    }
  | {
      mode: 'edit'
      doctor: doctorListBoxFormikSchema
      onSubmit: (data: IFormValues) => void
      onCancel: () => void
    }
  | {
      mode: 'view'
      doctor: doctorListBoxFormikSchema
      list: IDoctorFinancialRule[]
      onSubmit: (data: IFinancialRule) => void
      onCancel?: () => void
      onDelete: (id: string) => void
    }

export function FinancialRuleForm({ ...props }: IProps) {
  const { mode } = props

  const doctorInit =
    mode !== 'create'
      ? {
          initialValues: {
            ...formConfig.initialValues,
            ...props.doctor
          }
        }
      : null

  console.log(doctorInit)

  const formik = useFormik<IFormValues>({
    ...formConfig,
    ...doctorInit
  })
  const { t } = useTranslation('form')

  // TODO better way to open modals??
  const [editModalOpen, setEditModalOpen] = useState(false)
  const [modalData, setModalData] = useState<IFinancialRule>()
  function openModal(id: string) {
    if (mode != 'view') return
    const rule = props.list.find((item) => item.id == id)!
    setModalData({
      id: rule.id,
      visitType: rule.visit_type,
      price: rule.cost,
      robovPercentage: rule.overflow_percent,
      visitDuration: rule.time
    })
    setEditModalOpen(true)
  }

  return (
    <div>
      <Form
        submitBtnTitle='add'
        mode={mode}
        onSubmit={() =>
          onSubmit(formik, mode, mode == 'view' ? () => {} : props.onSubmit)
        }
        onCancel={props.onCancel}
        editButtonTitle='add'
        editLink={path.financial.edit.link(
          props.mode !== 'create' ? props.doctor.doctor.key : ''
        )}
      >
        {mode == 'create' && (
          <>
            <DoctorListBox formik={formik} />
            <FinancialListBox formik={formik} />
          </>
        )}
        {mode == 'edit' && (
          <>
            <AddDoctorForm formik={formik} mode='view' />
            <FinancialListBox formik={formik} />
          </>
        )}
        {mode == 'view' && (
          <>
            <AddDoctorForm formik={formik} mode='view' />
            <AllRuleListBox
              list={props.list}
              onDelete={props.onDelete}
              onEdit={openModal}
            />
          </>
        )}
      </Form>
      {mode == 'view' && (
        <FinancialEditModal
          isOpen={editModalOpen}
          data={modalData}
          onClose={() => setEditModalOpen(false)}
          onSubmit={(data) => props.onSubmit?.(data)}
        />
      )}
    </div>
  )
}
