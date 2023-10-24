import { Meta, StoryObj } from '@storybook/react'
import { HFForm } from './hfForm'
import { IFormValues } from './schema'

const initialValues: IFormValues = {
  HFName: 'بیمارستان مدنی',
  Country: { key: 1, value: 'ایران' },
  State: { key: 1, value: 'آذربایجان شرقی' },
  City: { key: 1, value: 'تبریز' },
  HFType: { key: 1, value: 'home' },
  Address: 'تبریز-خیابان دانشگاه',
  PostalCode: '1234567890',
  Phone: { code: '+91', number: '9930350383' },
  Fax: { code: '+91', number: '9930350383' },
  WebSite: 'abc.com',
  Email: 'abc@test.ir',
  ContactFirstName: 'وحید',
  ContactLastName: 'ت و ج'
}

const meta = {
  title: 'Templates/HF/HFForm',
  component: HFForm,
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    initialValues: { control: false },
    mode: { control: false }
  },
  args: {
    initialValues,
    mode: 'create'
  }
} satisfies Meta<typeof HFForm>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => <HFForm {...args} mode='create' />
}

export const Readonly: Story = {
  render: (args) => (
    <HFForm {...args} mode='view' initialValues={initialValues} />
  )
}

export const EditMode: Story = {
  render: (args) => (
    <HFForm {...args} mode='edit' initialValues={initialValues} />
  )
}
