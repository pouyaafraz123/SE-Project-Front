import { RuleAddFormProps, ruleListBoxFormikSchema } from './types'
import { Grid } from '@/components/atoms/Grid'
import { FastInput, FastSelect } from '@/components/fastFields'
import { Button } from '@/components/atoms/button'
import { Form } from '@/components/formControls/baseForm'

export function AddRuleForm<T extends ruleListBoxFormikSchema>(
  props: RuleAddFormProps<T>
) {
  const { formik, onAdd } = props

  const getProps = { formik }

  return (
    <Form mode='create' noButtons onSubmit={formik.handleSubmit}>
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
        <Grid.Button>
          <Button mode='add' onClick={onAdd} />
        </Grid.Button>
      </Grid>
    </Form>
  )
}
