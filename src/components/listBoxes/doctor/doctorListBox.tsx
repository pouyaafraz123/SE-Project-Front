import { useTranslation } from 'react-i18next'
import { useDoctorColumns } from './columns'
import { DoctorListBoxProps, doctorListBoxFormikSchema, IDoctor } from './types'
import { AddDoctorForm } from './selectDoctor'
import { ListBox } from '@/components/molecules/listBox'
import { notify } from '@/components/atoms/notify'

export function DoctorListBox<T extends doctorListBoxFormikSchema>(
  props: DoctorListBoxProps<T>
) {
  const { formik } = props
  const { t } = useTranslation('form')

  const { doctorList } = formik.values

  function deleteHandler(id: string) {
    const _list = [...doctorList]
    const filtered = _list.filter((item) => item.id !== id)
    formik.setFieldValue('doctorList', filtered)
  }

  async function addHandler(data: IDoctor) {
    const errs = await formik.validateForm()
    if (errs.doctor) {
      formik.setFieldTouched('doctor', true)
      formik.setFieldError('doctor', errs.doctor.toString())
      return
    }
    const foundIndex = doctorList.findIndex((item) => item.id == data.id)
    if (foundIndex === -1) {
      const _list = [...doctorList]
      _list.push(data)
      formik.setFieldValue('doctorList', _list)
      formik.setFieldValue('doctor', { key: '', value: '' })
      formik.setFieldTouched('doctor', false)
    } else {
      notify.error({
        title: t('errors.duplicateItem'),
        text: t('errors.duplicateSelectedItem', { row: foundIndex + 1 })
      })
    }
  }

  const columnDef = useDoctorColumns({ onDelete: deleteHandler })

  return (
    <>
      <AddDoctorForm formik={formik} onAdd={addHandler} />
      <ListBox
        columnDef={columnDef}
        dataJSON={doctorList}
        title='listBoxTitle.doctor'
      />
    </>
  )
}
