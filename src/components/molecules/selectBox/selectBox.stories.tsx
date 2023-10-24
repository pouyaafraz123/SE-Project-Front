import type { Meta as StoryMeta, StoryObj } from '@storybook/react'
import { useRef } from 'react'
import { SelectBoxContainer, getSelectBoxPosition, selectBoxFn } from './index'
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

export function DefaultFC() {
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
            refElementPosition: getSelectBoxPosition(buttonRef.current),
            options: [
              { key: 1, value: 'option 1' },
              { key: 2, value: 'option 2' },
              { key: 3, value: 'option 3' },
              { key: 4, value: 'option 4' },
              { key: 5, value: 'option 5' },
              { key: 6, value: 'option 6' },
              { key: 7, value: 'option 7' },
              { key: 8, value: 'option 8' },
              { key: 9, value: 'option 9' },
              { key: 10, value: 'option 10' }
            ]
          })
        }}
      >
        Show select box
      </button>
      <input />
    </>
  )
}
export const Default: Story = {
  render: () => <DefaultFC />
}
