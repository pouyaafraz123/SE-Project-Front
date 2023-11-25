import type { Meta as StoryMeta, StoryObj } from '@storybook/react'
import { useRef } from 'react'
import { ISelectBoxPositionOptions } from './types'
import { SelectBoxContainer, getSelectBoxPosition, selectBoxFn } from './index'
import { Icon } from '@/components/atoms/icons'
const Meta = {
  title: 'Molecules/SelectBoxContainer',
  component: SelectBoxContainer,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies StoryMeta<typeof SelectBoxContainer>

export default Meta
type Story = StoryObj<typeof Meta>

function DefaultFC(props: { title: string } & ISelectBoxPositionOptions) {
  const buttonRef = useRef(null)
  return (
    <>
      <button
        ref={buttonRef}
        onClick={() => {
          //   setFirst(!first)
          selectBoxFn.show({
            onSelect(item) {
              console.log('selected item: ', item)
            },
            refElementPosition: getSelectBoxPosition(buttonRef.current, {
              anchor: props.anchor
            }),
            options: [
              { key: '1', value: 'option 1' },
              { key: '2', value: 'option 2' },
              { key: '3', value: 'option 3' },
              { key: '4', value: 'option 4' },
              { key: '5', value: 'option 5' },
              { key: '6', value: 'option 6' },
              { key: '7', value: 'option 7' },
              { key: '8', value: 'option 8' },
              { key: '9', value: 'option 9' },
              { key: '10', value: 'option 10' }
            ]
          })
        }}
      >
        {props.title}
      </button>
      <input />
    </>
  )
}
export const Default: Story = {
  render: () => <DefaultFC title='Show' anchor='start' />
}
export const AnchorEnd: Story = {
  render: () => <DefaultFC title='Show' anchor='end' />
}
export const AnchorCenter: Story = {
  render: () => <DefaultFC title='Show' anchor='center' />
}
export const FitRefElement: Story = {
  render: () => <DefaultFC title='Show Select Box Dropdown' anchor='start' />
}
function DropdownFC() {
  const buttonRef = useRef(null)
  return (
    <div
      className='inline-flex p-m1 border-xs align-items-center justify-content-center'
      style={{ border: '1px solid black' }}
      ref={buttonRef}
      onClick={() => {
        selectBoxFn.show({
          options: [
            { key: '1', value: 'option 11111' },
            { key: '2', value: 'option 2' },
            { key: '3', value: 'option 3' },
            { key: '4', value: 'option 4' },
            { key: '5', value: 'option 5' },
            { key: '6', value: 'option 6' },
            { key: '7', value: 'option 7' },
            { key: '8', value: 'option 8' },
            { key: '9', value: 'option 9' },
            { key: '10', value: 'option 10' },
            { key: '11', value: 'option 1' },
            { key: '22', value: 'option 2' },
            { key: '33', value: 'option 3' },
            { key: '44', value: 'option 4' },
            { key: '55', value: 'option 5' },
            { key: '66', value: 'option 6' },
            { key: '77', value: 'option 7' },
            { key: '88', value: 'option 8' },
            { key: '99', value: 'option 9' },
            { key: '100', value: 'option 10' }
          ],
          refElementPosition: getSelectBoxPosition(buttonRef.current),
          hasSearch: true
        })
      }}
    >
      <Icon name='settings' />
    </div>
  )
}
export const Dropdown: Story = {
  render: () => <DropdownFC />
}
