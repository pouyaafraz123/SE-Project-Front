import { Meta, StoryObj } from '@storybook/react'
import { mockUtils } from '@utils'
import { WithPagination } from '@decorators'
import { FinancialTable } from '.'
import { financialRulesMockData } from '@/api/financial/financialTable.mock'

const meta = {
  title: 'Templates/Financial/FinancialTable',
  component: FinancialTable,
  parameters: {
    layout: 'fullscreen'
  },
  decorators: [WithPagination],
  argTypes: { data: { control: false }, total: { control: false } },
  args: {
    data: financialRulesMockData,
    isLoading: false,
    total: 10,
    tableParamProps: {
      pagination: {
        page: 1,
        onResultPerPageChange: () => {},
        onPageChange: () => {}
      }
    }
  }
} satisfies Meta<typeof FinancialTable>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <FinancialTable
      {...args}
      data={mockUtils.getPage(
        financialRulesMockData,
        args.tableParamProps.pagination?.page || 1,
        args.tableParamProps.pagination?.per_page || 10
      )}
      total={financialRulesMockData.length}
    />
  )
}
