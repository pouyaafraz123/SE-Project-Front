import { useState } from 'react'
import { HFAddFormProps, IHF, hfListBoxFormikSchema } from './types'
import { IHFSearchEndpoint } from '@/api/infinite'
import { Grid } from '@/components/atoms/Grid'
import {
  FastComplete,
  FastInfiniteSearch,
  FastSelect
} from '@/components/fastFields'
import { Button } from '@/components/atoms/button'
import { Form } from '@/components/formControls/baseForm'

export function AddHFForm<T extends hfListBoxFormikSchema>(
  props: HFAddFormProps<T>
) {
  const { formik, onAdd } = props

  const [hfData, setHFData] = useState<IHF>()

  const getProps = { formik }

  return (
    <Form mode='create' noButtons onSubmit={formik.handleSubmit}>
      <Grid subtitle='financial.selectHF'>
        <FastComplete {...getProps} name='hfCountry' type='country' />
        <FastComplete
          {...getProps}
          name='hfState'
          type='state'
          countryField='hfCountry'
        />
        <FastComplete
          {...getProps}
          name='hfCity'
          type='city'
          stateField='hfState'
        />
        <FastSelect {...getProps} name='hfType' type='hfType' />
        <FastInfiniteSearch
          {...getProps}
          name='hf'
          type='hf'
          title='hfName'
          icon='hospital'
          countryField='hfCountry'
          stateField='hfState'
          cityField='hfCity'
          hfTypeField='hfType'
          onChangeFullData={(data) => setHFData(data as IHFSearchEndpoint)}
        />
        <Grid.Button>
          <Button mode='add' onClick={() => onAdd(hfData!)} />
        </Grid.Button>
      </Grid>
    </Form>
  )
}
