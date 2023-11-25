import { Meta, StoryObj } from '@storybook/react'
import { WithPagination } from '@decorators'
import { summaryNoteListTable } from '@api/summaryNote'
import { mockUtils } from '@utils'
import { SummaryNoteList } from '@/templates/summaryNoteManagement'

const meta = {
  title: 'Templates/SummaryNote/SummaryNoteTable',
  component: SummaryNoteList,
  parameters: {
    layout: 'padded'
  },
  decorators: [WithPagination],
  argTypes: { data: { control: false }, total: { control: false } },
  args: {
    data: summaryNoteListTable,
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
} satisfies Meta<typeof SummaryNoteList>

export default meta

type Story = StoryObj<typeof meta>

export const SummaryNoteListStory: Story = {
  render: (args) => (
    <SummaryNoteList
      {...args}
      data={mockUtils.getPage(
        summaryNoteListTable,
        args.tableParamProps.pagination?.page || 1,
        args.tableParamProps.pagination?.per_page || 10
      )}
      total={summaryNoteListTable.length}
    />
  )
}
