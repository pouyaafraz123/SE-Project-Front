import type { Meta as StoryMeta, StoryObj } from '@storybook/react'
import { Typography } from '../typography'
import { Box } from '../box'
import { EnumIconName } from './iconNames'
import { iconNameType } from './types'
import { Icon } from './index'

const iconNames = Object.keys(EnumIconName).filter((v) => isNaN(Number(v)))

const Meta = {
  title: 'Atoms/Icon',
  component: Icon,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  args: {
    name: 'calendar',
    fontSize: '7xl',
    color: 'primary-main'
  },
  decorators: [
    (Story) => (
      <div className='m-l5'>
        <Story />
      </div>
    )
  ]
} satisfies StoryMeta<typeof Icon>

export default Meta
type Story = StoryObj<typeof Meta>

export const Default: Story = {
  render: (args) => (
    <div
      style={{
        display: 'grid',
        gap: '20px',
        gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))'
      }}
    >
      <Box
        px='l1'
        py='l1'
        radius='md'
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Icon {...args} />
        <Typography center fontSize='xl'>
          Linear
        </Typography>
      </Box>
      <Box
        px='l1'
        py='l1'
        radius='md'
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Icon {...args} type='broken' />
        <Typography center fontSize='xl'>
          Broken
        </Typography>
      </Box>
      <Box
        px='l1'
        py='l1'
        radius='md'
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Icon {...args} type='bold' />
        <Typography center fontSize='xl'>
          Bold
        </Typography>
      </Box>
      <Box
        px='l1'
        py='l1'
        radius='md'
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Icon {...args} type='bold-duotone' />
        <Typography center fontSize='xl'>
          bold-duotone
        </Typography>
      </Box>
    </div>
  )
}

export const AllLinear: Story = {
  render: (args) => (
    <div
      style={{
        display: 'grid',
        gap: '20px',
        gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))'
      }}
    >
      {iconNames.map((name, index) => (
        <Box
          px='l1'
          py='l1'
          radius='md'
          key={index}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Icon {...args} name={name as iconNameType} type='linear' />
          <Typography center fontSize='xl'>
            {name}
          </Typography>
        </Box>
      ))}
    </div>
  )
}
export const AllBold: Story = {
  render: (args) => (
    <div
      style={{
        display: 'grid',
        gap: '20px',
        gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))'
      }}
    >
      {iconNames.map((name, index) => (
        <Box
          px='l1'
          py='l1'
          radius='md'
          key={index}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Icon {...args} name={name as iconNameType} type='bold' />
          <Typography center fontSize='xl'>
            {name}
          </Typography>
        </Box>
      ))}
    </div>
  )
}
export const AllBroken: Story = {
  render: (args) => (
    <div
      style={{
        display: 'grid',
        gap: '20px',
        gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))'
      }}
    >
      {iconNames.map((name, index) => (
        <Box
          px='l1'
          py='l1'
          radius='md'
          key={index}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Icon {...args} name={name as iconNameType} type='broken' />
          <Typography center fontSize='xl'>
            {name}
          </Typography>
        </Box>
      ))}
    </div>
  )
}
export const AllBoldDuotone: Story = {
  render: (args) => (
    <div
      style={{
        display: 'grid',
        gap: '20px',
        gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))'
      }}
    >
      {iconNames.map((name, index) => (
        <Box
          px='l1'
          py='l1'
          radius='md'
          key={index}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Icon {...args} name={name as iconNameType} type='bold-duotone' />
          <Typography center fontSize='xl'>
            {name}
          </Typography>
        </Box>
      ))}
    </div>
  )
}
