import { useTranslation } from 'react-i18next'
import { FormikConfig, useFormik } from 'formik'
import classes from './styles.module.scss'
import { formConfig } from './schema'
import { Grid } from '@/components/atoms/Grid'
import { Box } from '@/components/atoms/box'
import { Button } from '@/components/atoms/button'
import { Modal } from '@/components/atoms/modal'
import { FastInput, FastSelect } from '@/components/fastFields'
import { Form } from '@/components/formControls/baseForm'
import { IFinancialRule } from '@/components/listBoxes/financialRule'

type IProps = {
  isOpen: boolean
  data?: IFinancialRule
  onClose: () => void
  onSubmit: (data: IFinancialRule) => void
}

export function FinancialEditModal(props: IProps) {
  const { isOpen, onSubmit, onClose, data } = props

  const initData = data ? { initialValues: data } : null

  const formik = useFormik<IFinancialRule>({
    enableReinitialize: true,
    ...formConfig,
    onSubmit,
    ...initData
  })

  const getProps = { formik }
  const { t } = useTranslation('form')
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Form mode='create' noButtons onSubmit={formik.handleSubmit}>
        <Box px='l5' py='l5' radius='lg'>
          <Grid subtitle='financial.financialRules'>
            <FastSelect {...getProps} name='visitType' type='visitType' />
            <FastInput {...getProps} name='visitDuration' type='duaration' />
            <FastInput {...getProps} name='price' type='price' />
            <FastInput
              {...getProps}
              name='robovPercentage'
              type='percentage'
              title='robovPercentage'
            />
          </Grid>
          <div className={classes.buttonContainer}>
            <Button mode='cancel' onClick={onClose}>
              {t('cancel')}
            </Button>
            <Button mode='submit'>{t('edit')}</Button>
          </div>
        </Box>
      </Form>
    </Modal>
  )
}
