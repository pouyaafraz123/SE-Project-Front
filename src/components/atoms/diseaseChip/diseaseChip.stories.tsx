import type { Meta as StoryMeta, StoryObj } from '@storybook/react'
import { DiseaseChip } from './index'

const Meta = {
  title: 'Atoms/DiseaseChip',
  component: DiseaseChip,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies StoryMeta<typeof DiseaseChip>

export default Meta
type Story = StoryObj<typeof Meta>

export const Default: Story = {
  args: { name: 'diseases.digestive' }
}
