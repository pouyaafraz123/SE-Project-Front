import { Meta, StoryObj } from '@storybook/react'
import { IDoctorFinancialRule } from '@components/listBoxes/financialRuleWithHF'
import { FinancialRuleForm } from './financialRuleForm'
import { IFormValues } from './schema'
import { IDoctor } from '@/components/listBoxes'
import { doctorListBoxFormikSchema } from '@/components/listBoxes/doctor/types'
import { IFinancialDoctor } from '@/api/financial'

const initialValues: IFormValues = {
  doctorCountry: { key: '1', value: 'ایران' },
  doctorState: { key: '1', value: 'آذربایجان شرقی' },
  doctorCity: { key: '1', value: 'تبریز' },
  doctorSpeciality: { key: '1', value: 'اعصاب و روان' },
  doctor: { key: '2', value: 'سید امیرحسین باحجب جعفریان اصل تبریزی' },
  doctorList: [],
  hfCountry: { key: '1', value: 'ایران' },
  hfState: { key: '1', value: 'آذربایجان شرقی' },
  hfCity: { key: '1', value: 'تبریز' },
  hfType: { key: 'hostpital', value: 'بیمارستان' },
  hf: { key: '1', value: 'بیمارستان الغدیر' },
  hfList: [],
  visitType: { key: '', value: '' },
  price: '',
  robovPercentage: '',
  visitDuration: '',
  ruleList: []
}

const meta = {
  title: 'Templates/Financial/FinancialRuleForm',
  component: FinancialRuleForm,
  parameters: {
    layout: 'padded'
  },
  argTypes: {
    mode: { control: false }
  },
  args: {
    mode: 'create',
    onSubmit: () => {},
    onCancel: () => {}
  }
} satisfies Meta<typeof FinancialRuleForm>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => <FinancialRuleForm {...args} />
}

const list: IDoctorFinancialRule[] = [...Array(20).keys()].map((i) => {
  return {
    id: String(i + 1),
    facility_id: '123',
    facility_name: 'بیمارستان الغدیر',
    visit_type: { key: 'emergency', value: 'اورژانسی' },
    cost: '150',
    time: '15',
    overflow_percent: '12'
  }
})

const doctorInfo = {
  doctorCountry: { key: '1', value: 'ایران' },
  doctorState: { key: '1', value: 'آذربایجان شرقی' },
  doctorCity: { key: '1', value: 'تبریز' },
  doctorSpeciality: { key: '1', value: 'اعصاب و روان' },
  doctor: { key: '1', value: 'سید امیرحسین باحجب جعفریان اصل تبریزی' },
  doctorList: []
}

export const EditMode: Story = {
  render: (args) => (
    <FinancialRuleForm
      {...args}
      mode='edit'
      doctor={doctorInfo}
      onSubmit={() => {}}
      onCancel={() => {}}
    />
  )
}

export const ViewMode: Story = {
  render: (args) => (
    <FinancialRuleForm
      {...args}
      mode='view'
      list={list}
      doctor={doctorInfo}
      onDelete={() => {}}
      onSubmit={() => {}}
    />
  )
}
