import { Meta, StoryObj } from '@storybook/react'
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
    columnDef: columnDef,
    dataJSON: data,
    pagination: (
      <Pagination
        totalPages={50}
        currentPage={1}
        onPageChange={(page) => console.log(page)}
      />
    )
  }
}
