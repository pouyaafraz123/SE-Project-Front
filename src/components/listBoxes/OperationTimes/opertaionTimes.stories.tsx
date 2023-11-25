import type { Meta as StoryMeta, StoryObj } from '@storybook/react'
import { useFormik } from 'formik'
import { IOperationTimesFormikSchema } from './types'
import { OperationTimes } from './index'

const Meta = {
  title: 'ListBoxes/OperationTimes',
  component: OperationTimes,
  parameters: {
    layout: 'padded'
  },
  tags: ['autodocs']
} satisfies StoryMeta<typeof OperationTimes>

export default Meta
type Story = StoryObj<typeof Meta>

export const Default = {
  render: () => <Comp />
}

function Comp() {
  const formik = useFormik<IOperationTimesFormikSchema>({
    initialValues: {
      day: { key: '', value: '' },
      startTime: '',
      endTime: '',
      operationTimesLists: []
    },
    onSubmit(values, formikHelpers) {}
  })
  return <OperationTimes formik={formik} />
}
