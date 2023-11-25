import type { Meta as StoryMeta, StoryObj } from '@storybook/react'
import { doctors, hfs } from '@api/infinite/infinite.mock'
import { InfiniteSearch } from './index'
import { Grid } from '@/components/atoms/Grid'

const Meta = {
  title: 'formControl/InfiniteSearch',
  component: InfiniteSearch,
  argTypes: {
    data: { control: false }
  },
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  args: {
    type: 'user',
    data: doctors,
    searchInputChangeHandler: (value) => {},
    onGetNext: () => {},
    isFetchingNextPage: false,
    placeholder: 'انتخاب کنید',
    value: { key: '', value: '' }
  }
} satisfies StoryMeta<typeof InfiniteSearch>

export default Meta
type Story = StoryObj<typeof Meta>

export const Default: Story = {
  render: (args) => (
    <Grid>
      <InfiniteSearch {...args} />
    </Grid>
  )
}

export const DoubleWidth: Story = {
  render: (args) => (
    <Grid>
      <Grid.Column doubleWidth>
        <InfiniteSearch {...args} />
      </Grid.Column>
    </Grid>
  )
}

export const NoSpeciality: Story = {
  render: (args) => (
    <Grid>
      <Grid.Column>
        <InfiniteSearch
          {...args}
          type='user'
          data={doctors.map(({ speciality, ...user }) => user)}
        />
      </Grid.Column>
    </Grid>
  )
}

export const HF: Story = {
  render: (args) => (
    <Grid>
      <Grid.Column>
        <InfiniteSearch {...args} type='hf' data={hfs} />
      </Grid.Column>
    </Grid>
  )
}
