import {
  IHospitalizationListBoxFormikSchema,
  IHospitalizationListProps
} from '@components/listBoxes/hospitalizationHistory/types.ts'
import { useTranslation } from 'react-i18next'
import { useCallback, useEffect } from 'react'
import { notify } from '@components/atoms/notify'
import { AddHospitalizationForm } from '@components/listBoxes/hospitalizationHistory/selectHospitalization.tsx'
import { HospitalizationHistoryBox } from '@components/listBoxes/hospitalizationHistory/hospitalizationHistoryBox.tsx'

export function HospitalizationHistory<
  T extends IHospitalizationListBoxFormikSchema
>(props: IHospitalizationListProps<T>) {
  const { t } = useTranslation('form')

  const { formik } = props
  const { hospitalized, hospitalizationList, reason, date } = formik.values

  const deleteHandler = useCallback(
    (id: string | number) => {
      const _list = [...hospitalizationList]
      const filtered = _list.filter((item) => item.id !== id)
      formik.setFieldValue('hospitalizationList', filtered)
    },
    [formik, hospitalizationList]
  )

  useEffect(() => {
    if (!hospitalized) {
      formik.setFieldValue('hospitalizationList', [])
    }
  }, [formik, hospitalized])

  const addHandler = useCallback(async () => {
    const errs = await formik.validateForm()
    if (errs.reason || errs.date) {
      formik.setFieldTouched('reason', true)
      formik.setFieldTouched('date', true)
      formik.setFieldError('reason', errs.reason?.toString())
      formik.setFieldError('date', errs.date?.toString())
      return
    }

    const foundIndex = hospitalizationList.findIndex(
      (item) => item?.reason === reason && item?.date === new Date(date)
    )

    if (foundIndex === -1) {
      const _list = [...hospitalizationList]
      _list.push({
        id: Date.now(),
        reason,
        date: new Date(date)
      })

      formik.setFieldValue('hospitalizationList', _list)
      formik.setFieldValue('reason', '')
      formik.setFieldValue('date', '')
      formik.setFieldTouched('reason', false)
      formik.setFieldTouched('date', false)
    } else {
      notify.error({
        title: t('errors.duplicateItem'),
        text: t('errors.duplicateSelectedItem', { row: foundIndex + 1 })
      })
    }
  }, [date, formik, hospitalizationList, reason, t])

  return (
    <>
      <AddHospitalizationForm formik={formik} onAdd={addHandler} />
      <HospitalizationHistoryBox
        hospitalizationList={hospitalizationList}
        onDelete={deleteHandler}
      />
    </>
  )
}
