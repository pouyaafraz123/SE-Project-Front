import { Meta, StoryObj } from '@storybook/react'
import { PageTable } from '@components/organisms/pageTable/pageTable.tsx'
import { columnDef } from '@components/organisms/table/temporary folder/columns.tsx'
import data from '@components/organisms/table/temporary folder/data.json'
import { ColumnDef } from '@tanstack/react-table'

const meta = {
  title: 'Organisms/PageTable',
  component: PageTable,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof PageTable>

export default meta

type Story = StoryObj<typeof meta>

export const PageTableStoryBasic: Story = {
  args: {
    title: 'لیست کاربران',
    onDownload: () => {
      console.log('a')
    },
    tabProps: {
      tabs: [
        { key: '1', title: 'همه ویزیت ها' },
        { key: '2', title: 'ویزیت های امروز' },
        { key: '3', title: 'ویزیت های گذشته' },
        { key: '4', title: 'ویزیت های آینده' }
      ],
      onChange: () => {},
      selectedKey: '1'
    },
    type: 'basic',
    tableProps: {
      columnDef: columnDef as ColumnDef<unknown, unknown>[],
      dataJSON: data
    },
    total: data?.length,
    pagination: { onPageChange: () => {}, onResultPerPageChange: () => {} }
  }
}
