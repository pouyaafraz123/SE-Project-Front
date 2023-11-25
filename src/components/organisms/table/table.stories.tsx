import { Meta, StoryObj } from '@storybook/react'
import { ColumnDef } from '@tanstack/react-table'
import { columnDef } from './temporary folder/columns'
import data from './temporary folder/data.json'
import { Table } from '@/components/organisms/table'
import { Pagination } from '@/components/molecules/pagination'

const meta = {
  title: 'Organisms/table',
  component: Table,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Table>

export default meta

type Story = StoryObj<typeof meta>

export const ListOfUsers: Story = {
  args: {
    columnDef: columnDef as ColumnDef<unknown, unknown>[],
    dataJSON: data
  }
}
