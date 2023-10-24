import type { Meta as StoryMeta, StoryObj } from '@storybook/react'
import {
  enumFontSize,
  enumFontWeight,
  fontSizeType,
  fontWeightType
} from '../../../constants/stylesVariables'
import { Typography } from './index'

const Meta = {
  title: 'Atoms/Typography',
  component: Typography,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: { className: 'my-m1' }
} satisfies StoryMeta<typeof Typography>

export default Meta

type Story = StoryObj<typeof Meta>

export const Default: Story = {
  render: (args) => (
    <>
      <Typography variant='h1' {...args}>
        H1 Heading
      </Typography>
      <Typography variant='h1' {...args}>
        لورم ایپسوم
      </Typography>
      <Typography variant='h2' {...args}>
        H2 Heading
      </Typography>
      <Typography variant='h2' {...args}>
        لورم ایپسوم
      </Typography>
      <Typography variant='h2' {...args}>
        <Typography variant='inherit'>variant inherit</Typography>
        {` `}
        <Typography variant='inherit' color='primary-main' fontSize='xl'>
          Lorem
        </Typography>
        <Typography variant='inherit' color='success-main' fontSize='lg'>
          ipsum
        </Typography>
        <Typography
          variant='inherit'
          color='success-main'
          fontSize='lg'
          fontWeight='semi-bold'
        >
          لورم ایپسوم
        </Typography>
      </Typography>
      <Typography variant='h3' {...args}>
        H3 Heading
      </Typography>
      <Typography variant='h3' {...args}>
        <Typography variant='inherit'>H3</Typography>
        <Typography variant='inherit'>Heading</Typography>
        <Typography variant='inherit'>With space between</Typography>
      </Typography>
      <Typography variant='h3' {...args}>
        لورم ایپسوم
      </Typography>
      <Typography variant='h4' {...args}>
        H4 Heading
      </Typography>
      <Typography variant='h4' {...args}>
        لورم ایپسوم
      </Typography>
      <Typography variant='h5' {...args}>
        H5 Heading
      </Typography>
      <Typography variant='h5' {...args}>
        لورم ایپسوم
      </Typography>
      <Typography variant='h6' {...args}>
        H6 Heading
      </Typography>
      <Typography variant='h6' {...args}>
        لورم ایپسوم
      </Typography>
      <Typography
        variant='appointment-status'
        createSpan
        display='block'
        htmlAttribute={{ style: { backgroundColor: 'green' } }}
        {...args}
      >
        variant appointment-status with inline style
      </Typography>
      <Typography
        variant='appointment-status'
        createSpan
        display='block'
        htmlAttribute={{ style: { backgroundColor: 'green' } }}
        {...args}
      >
        لورم ایپسوم با افزودن htmlAttribute
      </Typography>
      <Typography variant='badge' createSpan display='block' {...args}>
        variant badge
      </Typography>
      <Typography variant='badge' createSpan display='block' {...args}>
        لورم ایپسوم
      </Typography>
      <Typography variant='body' {...args}>
        variant body
      </Typography>
      <Typography variant='body' {...args}>
        لورم ایپسوم
      </Typography>
      <Typography variant='caption1' {...args}>
        variant caption1
      </Typography>
      <Typography variant='caption1' {...args}>
        لورم ایپسوم
      </Typography>
      <Typography variant='caption2' {...args}>
        variant caption2
      </Typography>
      <Typography variant='caption2' {...args}>
        لورم ایپسوم
      </Typography>
      <Typography variant='description1' {...args}>
        variant description1
      </Typography>
      <Typography variant='description1' {...args}>
        لورم ایپسوم
      </Typography>
      <Typography variant='description2' {...args}>
        variant description2
      </Typography>
      <Typography variant='description2' {...args}>
        لورم ایپسوم
      </Typography>
      <Typography variant='subtitle1' {...args}>
        variant subtitle1
      </Typography>
      <Typography variant='subtitle1' {...args}>
        لورم ایپسوم
      </Typography>
      <Typography variant='subtitle2' {...args}>
        variant subtitle2
      </Typography>
      <Typography variant='subtitle2' {...args}>
        لورم ایپسوم
      </Typography>
      <Typography variant='subtitle3' {...args}>
        variant subtitle3
      </Typography>
      <Typography variant='subtitle3' {...args}>
        لورم ایپسوم
      </Typography>
    </>
  )
}
export const Dana: Story = {
  render: () => {
    const fs = Object.keys(enumFontSize).filter((v) => isNaN(Number(v)))
    const fw = Object.keys(enumFontWeight).filter((v) => isNaN(Number(v)))

    return (
      <>
        {fs.map((fs, indexFS) => (
          <>
            {fw.map((fw, indexFW) => (
              <Typography
                key={`${indexFS}-${indexFW}`}
                fontSize={fs as fontSizeType}
                fontWeight={fw as fontWeightType}
                fontFamily='dana'
              >{`اطلاعات پزشک : ${fs}-${fw}`}</Typography>
            ))}
          </>
        ))}
      </>
    )
  }
}
export const Morabba: Story = {
  render: () => {
    const fs = Object.keys(enumFontSize).filter((v) => isNaN(Number(v)))
    const fw = Object.keys(enumFontWeight).filter((v) => isNaN(Number(v)))

    return (
      <>
        {fs.map((fs, indexFS) => (
          <>
            {fw.map((fw, indexFW) => (
              <Typography
                key={`${indexFS}-${indexFW}`}
                fontSize={fs as fontSizeType}
                fontWeight={fw as fontWeightType}
                fontFamily='Morabba'
              >{`اطلاعات پزشک ${fs} - ${fw}`}</Typography>
            ))}
          </>
        ))}
      </>
    )
  }
}
