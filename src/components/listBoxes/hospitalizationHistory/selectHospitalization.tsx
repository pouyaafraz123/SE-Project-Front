import { Form } from '@components/formControls/baseForm'
import { Grid } from '@components/atoms/Grid'
import { Button } from '@components/atoms/button'
import {
  IHospitalizationAddFormProps,
  IHospitalizationListBoxFormikSchema
} from '@components/listBoxes/hospitalizationHistory/types.ts'
import { Typography } from '@components/atoms/typography'
import { useTranslation } from 'react-i18next'
import { FastDate, FastInput, FastRadio } from '@components/fastFields'

export function AddHospitalizationForm<
  T extends IHospitalizationListBoxFormikSchema
>(props: IHospitalizationAddFormProps<T>) {
  const { t } = useTranslation('form')

  const { formik, onAdd } = props

  const getProps = { formik }

  return (
    <Form mode='create' noButtons onSubmit={formik.handleSubmit}>
      <Grid subtitle={'hospitalizationHistory'}>
        <Grid.FullWidthColumn>
          <Typography>{t('hospitalizationQuestionText')}</Typography>
          <FastRadio
            {...getProps}
            name={'hospitalized'}
            title={'no'}
            value={false}
          />
          <FastRadio
            {...getProps}
            name={'hospitalized'}
            title={'yes'}
            value={true}
          />
        </Grid.FullWidthColumn>
        <FastInput {...getProps} name={'reason'} type={'reason'} />
        <FastDate {...getProps} name={'date'} title={'date'} />
        <Grid.Button>
          <Button mode='add' onClick={onAdd} />
        </Grid.Button>
      </Grid>
    </Form>
  )
}
