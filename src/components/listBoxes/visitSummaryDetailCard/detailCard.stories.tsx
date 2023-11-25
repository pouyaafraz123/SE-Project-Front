import type { Meta as StoryMeta, StoryObj } from '@storybook/react'
import { VisitSummaryDetailCard } from './index'

const Meta = {
  title: 'ListBoxes/VisitSummaryDetailCard',
  component: VisitSummaryDetailCard,
  parameters: {
    layout: 'padded'
  },
  tags: ['autodocs']
} satisfies StoryMeta<typeof VisitSummaryDetailCard>

export default Meta
type Story = StoryObj<typeof Meta>

export const Language: Story = {
  args: {
    type: 'language',
    description: 'فارسی',
    isConfirmed: true
  }
}
export const Birthday: Story = {
  args: {
    type: 'birthday',
    description: '1370/02/04',
    isConfirmed: false
  }
}
export const Patient: Story = {
  args: {
    type: 'patient',
    description: 'لیلا محمدی',
    visitFor: 'myself'
  }
}
export const RemoteVisit: Story = {
  args: {
    type: 'remote visit',
    description: 'ساختمان پزشکی ملا صدرا',
    isConfirmed: true
  }
}
export const OrganismsOverview: Story = {
  args: {
    type: 'organisms overview',
    description:
      'مرور سیستم‌های بدن نشان می‌دهد که بیمار از نظر گوارشی به مشکل برخورده و به آنتروپولوژی معرفی شده است. سایر سیستم‌ها بدون مشکل خاصی به نظر می‌رسند.',
    disease: ['بیماری گوارشی', 'بیماری مفصل']
  }
}
export const NoData: Story = {
  args: {
    type: 'recognition',
    description: ''
  }
}
