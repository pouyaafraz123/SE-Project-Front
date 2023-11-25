import type { Meta as StoryMeta, StoryObj } from '@storybook/react'
import { WithPagination } from '@decorators'
import { LocalAdminTable } from './index'
import { mockUtils } from '@/utils'
import { localAdminListMockData } from '@/api/userManagement/localAdmin'

const Meta = {
  title: 'Templates/userManagement/LocalAdmin/LocalAdminTable',
  component: LocalAdminTable,
  parameters: {
    layout: 'padded'
  },
  decorators: [WithPagination],
  argTypes: { data: { control: false }, total: { control: false } },
  args: {
    data: localAdminListMockData,
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
} satisfies StoryMeta<typeof LocalAdminTable>

export default Meta
type Story = StoryObj<typeof Meta>

export const Default: Story = {
  render: (args) => (
    <>
      <LocalAdminTable
        {...args}
        data={mockUtils.getPage(
          localAdminListMockData,
          args.tableParamProps.pagination?.page || 1,
          args.tableParamProps.pagination?.per_page || 10
        )}
        total={localAdminListMockData.length}
      />
    </>
  )
}
