import { Meta, StoryObj } from '@storybook/react'
import { TestForm } from './form'
import { IFormValues } from './schema'

const meta = {
  title: 'Forms/TestForm',
  component: TestForm,
  parameters: {
    layout: 'padded'
  },
  args: {
    mode: 'create'
  }
} satisfies Meta<typeof TestForm>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => <TestForm {...args} mode='create' />
}

const initialValues: IFormValues = {
  doctorCountry: { key: '1', value: '' },
  doctorState: { key: '1', value: '' },
  doctorCity: { key: '1', value: '' },
  doctorSpeciality: { key: '1', value: '' },
  doctor: { key: '2', value: 'سید امیرحسین باحجب جعفریان اصل تبریزی' },
  hfType: { key: '1', value: '' },
  hf: { key: '', value: '' },
  firstName: 'وحید',
  lastName: 'جهاندار',
  gender: { key: '1', value: 'مرد' },
  countryOfLicense: { key: '1', value: 'ایران' },
  hfCountry: { key: '1', value: 'ایران' },
  hfCity: { key: '1', value: 'تبریز' },
  hfState: { key: '1', value: 'آذربایجان شرقی' },
  country: { key: '1', value: 'آذربایجان شرقی' },
  state: { key: '1', value: 'تبریز' },
  phone: { code: '+1', number: '9990001234' },
  date: new Date('2010/7/8'),
  countryMulti: [
    { key: '1', value: 'گوارش' },
    { key: '2', value: 'گوارش' },
    { key: '3', value: 'گوارش' }
  ],
  time: '06:00',
  radioGender: 'male'
}

export const Readonly: Story = {
  render: (args) => (
    <TestForm {...args} mode='view' initialValues={initialValues} />
  )
}

export const EditMode: Story = {
  render: (args) => (
    <TestForm {...args} mode='edit' initialValues={initialValues} />
  )
}
