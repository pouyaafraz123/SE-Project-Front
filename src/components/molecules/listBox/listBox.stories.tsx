import type { Meta as StoryMeta, StoryObj } from '@storybook/react'
import { listBoxColumnDef } from './temp/columns'
import data from './temp/data.json'
import { dataType } from './temp/type'
import { ListBox } from './index'

const Meta = {
  title: 'Molecules/ListBox',
  component: ListBox,
  parameters: {
    layout: 'padded'
  },
  decorators: [
    (Story) => (
      <div className='p-l5'>
        <Story />
      </div>
    )
  ],
  args: {
    title: 'listBoxTitle.language',
    iconName: 'list'
  }
} satisfies StoryMeta<typeof ListBox>

export default Meta
type Story = StoryObj<typeof Meta>

export const Default: Story = {
  render: (args) => (
    <ListBox
      {...args}
      columnDef={listBoxColumnDef}
      dataJSON={data as dataType[]}
    />
  )
}
export const WithIcons: Story = {
  render: (args) => (
    <ListBox {...args} onDownload={() => {}} onPrint={() => {}} />
  )
}
export const CustomContent: Story = {
  render: (args) => (
    <ListBox title='listBoxTitle.patient' iconName='buildings'>
      <div>render what you want</div>
      <div>it also have gap</div>
    </ListBox>
  )
}
