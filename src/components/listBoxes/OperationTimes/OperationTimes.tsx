import { useTranslation } from 'react-i18next'
import { OperationTimesProps, IOperationTimesFormikSchema } from './types'
import { useTableColumns } from './columns'
import { isValid } from './helper'
import { Grid } from '@/components/atoms/Grid'
import { Button } from '@/components/atoms/button'
import { FastSelect, FastTime } from '@/components/fastFields'
import { ListBox } from '@/components/molecules/listBox'
import { generateUUIDv4 } from '@/utils'
import { notify } from '@/components/atoms/notify'

export function OperationTimes<T extends IOperationTimesFormikSchema>(
  props: OperationTimesProps<T>
) {
  const { formik } = props

  const { t } = useTranslation('form')

  const operationTimesLists = [...formik.values.operationTimesLists]

  function addHandler() {
    const _values = { ...formik.values }
    if (isValid(_values.day, _values.startTime, _values.endTime)) {
      const _list = [..._values.operationTimesLists]
      _list.push({
        id: generateUUIDv4(),
        day: _values.day,
        startTime: _values.startTime,
        endTime: _values.endTime
      })
      formik.setFieldValue('operationTimesLists', _list)

      // clear the fields
      formik.setFieldValue('day', { key: '', value: '' })
      formik.setFieldValue('startTime', '')
      formik.setFieldValue('endTime', '')
    } else {
      notify.error({
        title: t('errors.emptyTitle'),
        text: t('errors.emptyOperationTimesFields')
      })
    }
  }

  function deleteHandler(id: string) {
    const _list = [...operationTimesLists]
    const filteredLang = _list.filter((item) => item.id !== id)
    formik.setFieldValue('operationTimesLists', filteredLang)
  }

  const columnDef = useTableColumns({ onDelete: deleteHandler })

  return (
    <Grid subtitle='infoSubtitle.operationTimes' border='top-gradient'>
      <FastSelect formik={formik} name='day' type='days' />
      <FastTime formik={formik} name='startTime' title='startTime' />
      <FastTime formik={formik} name='endTime' title='endTime' />
      <Grid.Button>
        <Button mode='add' onClick={addHandler} />
      </Grid.Button>
      <Grid.FullWidthColumn>
        <ListBox
          columnDef={columnDef}
          dataJSON={operationTimesLists}
          title='listBoxTitle.operationTime'
        />
      </Grid.FullWidthColumn>
    </Grid>
  )
}
