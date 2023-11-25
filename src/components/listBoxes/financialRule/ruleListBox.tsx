import { useTranslation } from 'react-i18next'
import { useFinancialRuleColumns } from './columns'
import { ruleListBoxFormikSchema, RuleListBoxProps } from './types'
import { AddRuleForm } from './setFinancialRule'
import { ListBox } from '@/components/molecules/listBox'
import { notify } from '@/components/atoms/notify'
import { generateUUIDv4 } from '@/utils'

export function FinancialListBox<T extends ruleListBoxFormikSchema>(
  props: RuleListBoxProps<T>
) {
  const { formik } = props
  const { t } = useTranslation('form')

  const { ruleList, visitType, visitDuration, price, robovPercentage } =
    formik.values

  function deleteHandler(id: string) {
    const _list = [...ruleList]
    const filtered = _list.filter((item) => item.id !== id)
    formik.setFieldValue('ruleList', filtered)
  }

  async function addHandler() {
    const errs = await formik.validateForm()
    if (
      errs.visitType ||
      errs.visitDuration ||
      errs.price ||
      errs.robovPercentage
    ) {
      // @ts-expect-error formik bug
      formik.setTouched({
        visitType: true,
        visitDuration: true,
        price: true,
        robovPercentage: true
      })
      // @ts-expect-error formik bug
      formik.setErrors({
        visitType: errs.visitType,
        visitDuration: errs.visitDuration,
        price: errs.price,
        robovPercentage: errs.robovPercentage
      })
      return
    }
    const foundIndex = ruleList.findIndex(
      (item) =>
        item.visitType == visitType && item.visitDuration == visitDuration
    )
    if (foundIndex === -1) {
      const _list = [...ruleList]
      _list.push({
        visitType,
        visitDuration,
        price,
        robovPercentage,
        id: generateUUIDv4() // temporary id
      })
      formik.setFieldValue('ruleList', _list)
      formik.setFieldValue('visitType', { key: '', value: '' })
      formik.setFieldValue('visitDuration', '')
      formik.setFieldValue('price', '')
      formik.setFieldValue('robovPercentage', '')
      // @ts-expect-error formik bug
      formik.setTouched({
        visitType: false,
        visitDuration: false,
        price: false,
        robovPercentage: false
      })
    } else {
      notify.error({
        title: t('errors.duplicateItem'),
        text: t('errors.duplicateSelectedItem', { row: foundIndex + 1 })
      })
    }
  }

  const columnDef = useFinancialRuleColumns({ onDelete: deleteHandler })

  return (
    <>
      <AddRuleForm formik={formik} onAdd={addHandler} />
      <ListBox
        columnDef={columnDef}
        dataJSON={ruleList}
        title='listBoxTitle.financial'
      />
    </>
  )
}
