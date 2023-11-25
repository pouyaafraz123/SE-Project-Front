import { useTranslation } from 'react-i18next'
import { useHFColumns } from './columns'
import { HFListBoxProps, hfListBoxFormikSchema, IHF } from './types'
import { AddHFForm } from './selectHF'
import { ListBox } from '@/components/molecules/listBox'
import { notify } from '@/components/atoms/notify'

export function HFListBox<T extends hfListBoxFormikSchema>(
  props: HFListBoxProps<T>
) {
  const { formik } = props
  const { t } = useTranslation('form')

  const { hfList } = formik.values

  function deleteHandler(id: string) {
    const _list = [...hfList]
    const filtered = _list.filter((item) => item.id !== id)
    formik.setFieldValue('hfList', filtered)
  }

  async function addHandler(data: IHF) {
    const errs = await formik.validateForm()
    if (errs.hf) {
      formik.setFieldTouched('hf', true)
      formik.setFieldError('hf', errs.hf.toString())
      return
    }
    const foundIndex = hfList.findIndex((item) => item.id == data.id)
    if (foundIndex === -1) {
      const _list = [...hfList]
      _list.push(data)
      formik.setFieldValue('hfList', _list)
      formik.setFieldValue('hf', { key: '', value: '' })
      formik.setFieldTouched('hf', false)
    } else {
      notify.error({
        title: t('errors.duplicateItem'),
        text: t('errors.duplicateSelectedItem', { row: foundIndex + 1 })
      })
    }
  }

  const columnDef = useHFColumns({ onDelete: deleteHandler })

  return (
    <>
      <AddHFForm formik={formik} onAdd={addHandler} />
      <ListBox
        columnDef={columnDef}
        dataJSON={hfList}
        title='listBoxTitle.hf'
      />
    </>
  )
}
