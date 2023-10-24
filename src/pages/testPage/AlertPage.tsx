import { Button } from '@components/atoms/button'
import {
  AlertContainer,
  showActionAlert,
  showDeleteAlert,
  showInformationAlert
} from '@components/molecules/alert'

export function AlertPage() {
  return (
    <div>
      <div>
        <Button
          mode={'main'}
          onClick={() =>
            showInformationAlert({
              title: 'عنوان',
              content:
                'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.'
            })
          }
        >
          Open Information Modal
        </Button>
        <Button
          mode={'main'}
          onClick={() =>
            showActionAlert({
              title: 'عنوان',
              content:
                'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.'
            })
          }
        >
          Open Action Modal
        </Button>
        <Button
          mode={'main'}
          onClick={() =>
            showDeleteAlert({
              title: 'عنوان',
              content:
                'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.'
            })
          }
        >
          Open Delete Modal
        </Button>
      </div>
      <AlertContainer />
    </div>
  )
}
