import { useTranslation } from 'react-i18next'
import { useCallback } from 'react'
import { notify } from '@components/atoms/notify'
import {
  AddIllnessesForm,
  IIllnessListBoxFormikSchema,
  IIllnessListProps,
  IllnessesHistoryBox
} from './index'

export function IllnessesHistory<T extends IIllnessListBoxFormikSchema>(
  props: IIllnessListProps<T>
) {
  // TODO ADD YELLOW CARD
  const { t } = useTranslation('form')

  const { formik } = props
  const { illnessList, illnessName } = formik.values

  const deleteHandler = useCallback(
    (id: string | number) => {
      const _list = [...illnessList]
      const filtered = _list.filter((item) => item.id !== id)
      formik.setFieldValue('illnessList', filtered)
    },
    [formik, illnessList]
  )

  const addHandler = useCallback(async () => {
    const errs = await formik.validateForm()
    if (errs.illnessName) {
      formik.setFieldTouched('illnessName', true)
      formik.setFieldError('illnessName', errs.illnessName?.toString())
      return
    }

    const foundIndex = illnessList.findIndex(({ name }) => illnessName === name)

    if (foundIndex === -1) {
      const _list = [...illnessList]
      _list.push({
        name: illnessName,
        id: Date.now()
      })

      formik.setFieldValue('illnessList', _list)
      formik.setFieldValue('illnessName', '')
      formik.setFieldTouched('illnessName', false)
    } else {
      notify.error({
        title: t('errors.duplicateItem'),
        text: t('errors.duplicateSelectedItem', { row: foundIndex + 1 })
      })
    }
  }, [formik, illnessList, illnessName, t])

  return (
    <>
      <AddIllnessesForm formik={formik} onAdd={addHandler} />
      <IllnessesHistoryBox illnessList={illnessList} onDelete={deleteHandler} />
    </>
  )
}
