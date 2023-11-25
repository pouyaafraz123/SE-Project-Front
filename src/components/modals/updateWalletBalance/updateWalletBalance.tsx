import { useFormik } from 'formik'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { Controls } from '../baseModal'
import { IFormValues, formConfig } from './schema'
import { IProps } from './types'
import { Grid } from '@/components/atoms/Grid'
import { FastInput } from '@/components/fastFields/fastInput/fastInput'
import { Typography } from '@/components/atoms/typography'
import { Form } from '@/components/formControls/baseForm'
import { useDummyMutation } from '@/api/dummy/createDummy'
import { notify } from '@/components/atoms/notify'

export function WalletBalanceModal(props: IProps) {
  const { mutateFn, id } = props
  const [isLoading, setIsLoading] = useState(false)

  function onSubmit(values: IFormValues) {
    setIsLoading(true)
    notify.promise({
      promise: mutateFn({ id, amount: values.amount, type: 'deposit' }).finally(
        () => setIsLoading(false)
      ),
      pendingMessage: {
        title: t('balanceChange.title'),
        text: t('balanceChange.pendingIncrease')
      },
      resolvedMessage: {
        title: t('balanceChange.title'),
        text: t('balanceChange.approveIncrease')
      }
    })
  }

  const formik = useFormik({
    enableReinitialize: true,
    ...formConfig,
    onSubmit
  })

  const getProps = { formik }
  const { t } = useTranslation('form')
  return (
    <Form mode='create' noButtons onSubmit={formik.handleSubmit}>
      <Typography variant='formSectionHeader'>
        {t('increaseBalance')}
      </Typography>
      <Grid>
        <FastInput
          {...getProps}
          name='amount'
          type='price'
          title='amount'
          placeholder='50000 تومان'
        />
      </Grid>
      <Controls submitTitle='submit' isLoading={isLoading} />
    </Form>
  )
}
