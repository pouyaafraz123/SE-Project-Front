import { useState } from 'react'
import { useUIStore } from '@stores'
import { Modal } from '@components/atoms/modal'
import { Typography } from '@components/atoms/typography'
import { ThemeMode } from '@/theme'

export function ModalPage() {
  const [count, setCount] = useState(0)
  const setTheme = useUIStore((state) => state.setTheme)
  const theme = useUIStore((state) => state.theme)
  const toggleTheme = () =>
    setTheme(
      theme == ThemeMode.ROYAL_LIGHT
        ? ThemeMode.ROYAL_DARK
        : ThemeMode.ROYAL_LIGHT
    )
  return (
    <>
      <Typography variant='h1'>
        <Typography variant='inherit' color='success-dark'>
          لورم ایپسوم
        </Typography>{' '}
        <Typography variant='inherit' color='danger-main'>
          {' '}
          1
        </Typography>
      </Typography>
      <Typography variant='h2'>Heading 2</Typography>
      <Typography variant='h3'>Heading 3</Typography>
      <Typography variant='h4'>Heading 4</Typography>
      <Typography variant='h5'>Heading 5</Typography>
      <Typography variant='h6'>Heading 6</Typography>
      <Typography>Default body font style</Typography>
      <Typography variant='description1' className='ff-morabba'>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است.
      </Typography>
      <Typography variant='caption1'>caption1 variant</Typography>
      <Typography variant='caption2'>caption2 variant</Typography>
      <Typography variant='badge'>badge variant</Typography>
      <Typography variant='h1'>
        <Typography variant='inherit' color='success-dark'>
          لورم ایپسوم
        </Typography>{' '}
        <Typography variant='inherit' color='danger-main'>
          {' '}
          1
        </Typography>
      </Typography>
      <Typography variant='h2'>Heading 2</Typography>
      <Typography variant='h3'>Heading 3</Typography>
      <Typography variant='h4'>Heading 4</Typography>
      <Typography variant='h5'>Heading 5</Typography>
      <Typography variant='h6'>Heading 6</Typography>
      <Typography>Default body font style</Typography>
      <Typography variant='description1' className='ff-morabba'>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است.
      </Typography>
      <Typography variant='caption1'>caption1 variant</Typography>
      <Typography variant='caption2'>caption2 variant</Typography>
      <Typography variant='badge'>badge variant</Typography>{' '}
      <Typography variant='h1'>
        <Typography variant='inherit' color='success-dark'>
          لورم ایپسوم
        </Typography>{' '}
        <Typography variant='inherit' color='danger-main'>
          {' '}
          1
        </Typography>
      </Typography>
      <Typography variant='h2'>Heading 2</Typography>
      <Typography variant='h3'>Heading 3</Typography>
      <Typography variant='h4'>Heading 4</Typography>
      <Typography variant='h5'>Heading 5</Typography>
      <Typography variant='h6'>Heading 6</Typography>
      <Typography>Default body font style</Typography>
      <Typography variant='description1' className='ff-morabba'>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است.
      </Typography>
      <Typography variant='caption1'>caption1 variant</Typography>
      <Typography variant='caption2'>caption2 variant</Typography>
      <Typography variant='badge'>badge variant</Typography>{' '}
      <Typography variant='h1'>
        <Typography variant='inherit' color='success-dark'>
          لورم ایپسوم
        </Typography>{' '}
        <Typography variant='inherit' color='danger-main'>
          {' '}
          1
        </Typography>
      </Typography>
      <Typography variant='h2'>Heading 2</Typography>
      <Typography variant='h3'>Heading 3</Typography>
      <Typography variant='h4'>Heading 4</Typography>
      <Typography variant='h5'>Heading 5</Typography>
      <Typography variant='h6'>Heading 6</Typography>
      <Typography>Default body font style</Typography>
      <Typography variant='description1' className='ff-morabba'>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است.
      </Typography>
      <Typography variant='caption1'>caption1 variant</Typography>
      <Typography variant='caption2'>caption2 variant</Typography>
      <Typography variant='badge'>badge variant</Typography>{' '}
      <Typography variant='h1'>
        <Typography variant='inherit' color='success-dark'>
          لورم ایپسوم
        </Typography>{' '}
        <Typography variant='inherit' color='danger-main'>
          {' '}
          1
        </Typography>
      </Typography>
      <Typography variant='h2'>Heading 2</Typography>
      <Typography variant='h3'>Heading 3</Typography>
      <Typography variant='h4'>Heading 4</Typography>
      <Typography variant='h5'>Heading 5</Typography>
      <Typography variant='h6'>Heading 6</Typography>
      <Typography>Default body font style</Typography>
      <Typography variant='description1' className='ff-morabba'>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است.
      </Typography>
      <Typography variant='caption1'>caption1 variant</Typography>
      <Typography variant='caption2'>caption2 variant</Typography>
      <Typography variant='badge'>badge variant</Typography>{' '}
      <Typography variant='h1'>
        <Typography variant='inherit' color='success-dark'>
          لورم ایپسوم
        </Typography>{' '}
        <Typography variant='inherit' color='danger-main'>
          {' '}
          1
        </Typography>
      </Typography>
      <Typography variant='h2'>Heading 2</Typography>
      <Typography variant='h3'>Heading 3</Typography>
      <Typography variant='h4'>Heading 4</Typography>
      <Typography variant='h5'>Heading 5</Typography>
      <Typography variant='h6'>Heading 6</Typography>
      <Typography>Default body font style</Typography>
      <Typography variant='description1' className='ff-morabba'>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است.
      </Typography>
      <Typography variant='caption1'>caption1 variant</Typography>
      <Typography variant='caption2'>caption2 variant</Typography>
      <Typography variant='badge'>badge variant</Typography>{' '}
      <Typography variant='h1'>
        <Typography variant='inherit' color='success-dark'>
          لورم ایپسوم
        </Typography>{' '}
        <Typography variant='inherit' color='danger-main'>
          {' '}
          1
        </Typography>
      </Typography>
      <Typography variant='h2'>Heading 2</Typography>
      <Typography variant='h3'>Heading 3</Typography>
      <Typography variant='h4'>Heading 4</Typography>
      <Typography variant='h5'>Heading 5</Typography>
      <Typography variant='h6'>Heading 6</Typography>
      <Typography>Default body font style</Typography>
      <Typography variant='description1' className='ff-morabba'>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است.
      </Typography>
      <Typography variant='caption1'>caption1 variant</Typography>
      <Typography variant='caption2'>caption2 variant</Typography>
      <Typography variant='badge'>badge variant</Typography>
      <div className='mt-xs'></div>
      <h1 onClick={toggleTheme}>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p className='fs-micro'>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
      <Modal
        open={count % 2 === 1}
        draggable
        onClose={() => setCount((count) => count + 1)}
      ></Modal>
    </>
  )
}
