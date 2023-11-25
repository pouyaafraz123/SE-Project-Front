import { Form } from '@components/formControls/baseForm'
import { Grid } from '@components/atoms/Grid'
import { FastInput } from '@components/fastFields'
import { Button } from '@components/atoms/button'
import { IIllnessAddFormProps, IIllnessListBoxFormikSchema } from './index'

export function AddIllnessesForm<T extends IIllnessListBoxFormikSchema>(
  props: IIllnessAddFormProps<T>
) {
  const { formik, onAdd } = props

  const getProps = { formik }

  return (
    <Form mode='create' noButtons onSubmit={formik.handleSubmit}>
      <Grid subtitle={'history_of_illnesses'}>
        <FastInput {...getProps} name={'illnessName'} type={'illnessName'} />
        <Grid.Button>
          <Button mode='add' onClick={onAdd} />
        </Grid.Button>
      </Grid>
    </Form>
  )
}
