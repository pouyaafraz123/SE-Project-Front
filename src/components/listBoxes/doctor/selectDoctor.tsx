import { useState } from 'react'
import { DoctorAddFormProps, IDoctor, doctorListBoxFormikSchema } from './types'
import { IUserSearchEndpoint } from '@/api/infinite'
import { Grid } from '@/components/atoms/Grid'
import {
  FastComplete,
  FastInfiniteSearch,
  FastSelect
} from '@/components/fastFields'
import { Button } from '@/components/atoms/button'
import { Form } from '@/components/formControls/baseForm'

export function AddDoctorForm<T extends doctorListBoxFormikSchema>(
  props: DoctorAddFormProps<T>
) {
  const { formik, onAdd, mode = 'create' } = props

  const [doctorData, setDoctorData] = useState<IDoctor>()

  const getProps = { formik, readonly: mode == 'view' }

  return (
    <Form mode='create' noButtons onSubmit={formik.handleSubmit}>
      <Grid subtitle='financial.selectDoctor'>
        <FastComplete {...getProps} name='doctorCountry' type='country' />
        <FastComplete
          {...getProps}
          name='doctorState'
          type='state'
          countryField='doctorCountry'
        />
        <FastComplete
          {...getProps}
          name='doctorCity'
          type='city'
          stateField='doctorState'
        />
        <FastSelect {...getProps} name='doctorSpeciality' type='speciality' />
        <FastInfiniteSearch
          {...getProps}
          name='doctor'
          type='user'
          title='doctorName'
          icon='user-rounded'
          countryField='doctorCountry'
          stateField='doctorState'
          cityField='doctorCity'
          specialityField='doctorSpeciality'
          onChangeFullData={(data) =>
            setDoctorData(data as IUserSearchEndpoint)
          }
        />
        {mode == 'create' && (
          <Grid.Button>
            <Button mode='add' onClick={() => onAdd?.(doctorData!)} />
          </Grid.Button>
        )}
      </Grid>
    </Form>
  )
}
