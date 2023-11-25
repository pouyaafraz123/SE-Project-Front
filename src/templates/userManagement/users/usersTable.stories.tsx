import type { Meta as StoryMeta, StoryObj } from '@storybook/react'
import { WithPagination } from '@decorators'
import { UsersTable } from './index'
import { usersTableMockData } from '@/api/userManagement/users/users.mock'
import { mockUtils } from '@/utils'

const Meta = {
  title: 'Templates/UserManagement/Users/UsersTable',
  component: UsersTable,
  parameters: {
    layout: 'padded'
  },
  decorators: [WithPagination],
  argTypes: { data: { control: false }, total: { control: false } },
  args: {
    changeUserProps: {
      isLoading: false,
      async mutateFn(data) {
        return { message: '', data: '' }
      }
    },
    data: usersTableMockData,
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
} satisfies StoryMeta<typeof UsersTable>

export default Meta
type Story = StoryObj<typeof Meta>

export const Default: Story = {
  render: (args) => (
    <>
      <UsersTable
        {...args}
        data={mockUtils.getPage(
          usersTableMockData,
          args.tableParamProps.pagination?.page || 1,
          args.tableParamProps.pagination?.per_page || 10
        )}
        total={usersTableMockData.length}
      />
    </>
  )
}
