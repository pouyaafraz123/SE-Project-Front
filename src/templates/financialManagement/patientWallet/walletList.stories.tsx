import { Meta, StoryObj } from '@storybook/react'
import { mockUtils } from '@utils'
import { WithPagination } from '@decorators'
import { walletMockData } from '@api/financial/wallet/wallet.mock'
import { dummyQuery } from '@api/dummy'
import { WalletTable } from './walletTable'
import { useDummyMutation } from '@/api/dummy/createDummy'

function Template() {
  const { mutateAsync } = useDummyMutation()
  return <WalletTable {...meta.args} mutateFn={mutateAsync} />
}

const meta = {
  title: 'Templates/Financial/WalletTable',
  component: WalletTable,
  parameters: {
    layout: 'fullscreen'
  },
  decorators: [WithPagination],
  argTypes: { data: { control: false }, total: { control: false } },
  args: {
    data: walletMockData,
    isLoading: false,
    total: 10,
    tableParamProps: {
      pagination: {
        page: 1,
        onResultPerPageChange: () => {},
        onPageChange: () => {}
      }
    },
    mutateFn: dummyQuery
  }
} satisfies Meta<typeof WalletTable>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <WalletTable
      {...args}
      data={mockUtils.getPage(
        walletMockData,
        args.tableParamProps.pagination?.page || 1,
        args.tableParamProps.pagination?.per_page || 10
      )}
      total={walletMockData.length}
    />
  )
}
