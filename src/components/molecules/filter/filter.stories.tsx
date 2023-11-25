import { Meta, StoryObj } from '@storybook/react'
import { Filter } from '@components/molecules/filter/filter.tsx'
import { useEffect, useState } from 'react'
import { IFilter, IFilterValue } from '@components/molecules/filter/types.ts'
import { useFilterParam } from '@components/molecules/filter/hooks.ts'

const filterOptions: IFilter[] = [
  {
    key: '1',
    title: 'عنوان',
    variant: 'basic',
    options: [
      { key: '1', value: 'عنوان' },
      { key: '2', value: 'عنوان' },
      { key: '3', value: 'عنوان' },
      { key: '4', value: 'عنوان' },
      { key: '5', value: 'عنوان' },
      { key: '6', value: 'عنوان' },
      { key: '7', value: 'عنوان' }
    ]
  },
  {
    key: '2',
    title: 'عنوان',
    variant: 'basic',
    options: [
      { key: '6', value: 'عنوان' },
      { key: '7', value: 'عنوان' }
    ]
  },
  {
    key: '3',
    title: 'عنوان',
    variant: 'basic',
    options: [
      { key: '1', value: 'عنوان' },
      { key: '2', value: 'عنوان' },
      { key: '3', value: 'عنوان' },
      { key: '4', value: 'عنوان' },
      { key: '5', value: 'عنوان' },
      { key: '6', value: 'عنوان' },
      { key: '7', value: 'عنوان' },
      { key: '8', value: 'عنوان' }
    ]
  },
  {
    key: '4',
    title: 'عنوان',
    variant: 'basic',
    options: [
      { key: '1', value: 'عنوان' },
      { key: '2', value: 'عنوان' },
      { key: '3', value: 'عنوان' },
      { key: '4', value: 'عنوان' },
      { key: '5', value: 'عنوان' },
      { key: '6', value: 'عنوان' },
      { key: '7', value: 'عنوان' },
      { key: '8', value: 'عنوان' },
      { key: '9', value: 'عنوان' },
      { key: '10', value: 'عنوان' },
      { key: '11', value: 'عنوان' },
      { key: '12', value: 'عنوان' },
      { key: '13', value: 'عنوان' }
    ]
  }
]

const meta = {
  title: 'Molecules/Filter',
  component: Filter,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    options: filterOptions,
    value: []
  }
} satisfies Meta<typeof Filter>

export default meta

type Story = StoryObj<typeof meta>

function FilterStoryComponent(args: any) {
  const { filterProps, filterValues } = useFilterParam(filterOptions)

  useEffect(() => {
    console.log(filterValues)
  }, [filterValues])

  return <Filter {...args} {...filterProps} />
}

export const FilterStory: Story = {
  render: (args) => <FilterStoryComponent {...args} />
}
