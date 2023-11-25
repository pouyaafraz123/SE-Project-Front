import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { WithModal } from '@decorators'
import { showModal } from '../baseModal'
import { WalletBalanceModal } from './updateWalletBalance'
import { Button } from '@/components/atoms/button'
import { useDummyMutation } from '@/api/dummy/createDummy'

interface IModalStory {
  args: { isOpen: boolean; show: () => void }
}

function Template() {
  const { mutateAsync } = useDummyMutation()
  return <WalletBalanceModal mutateFn={mutateAsync} id='p1' />
}

const meta = {
  title: 'Organisms/Modal/WalletBalanceModal',
  component: WalletBalanceModal,
  parameters: {
    layout: 'padded'
  },
  decorators: [WithModal],
  args: {
    isOpen: false,
    show: () => showModal(<Template />)
  }
} satisfies Meta<typeof WalletBalanceModal> & IModalStory

export default meta

type Story = StoryObj<typeof meta>

export const Default = {
  render: () => <div></div>
}
