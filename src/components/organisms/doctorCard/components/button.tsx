import { useDoctorCardContext } from '../doctorCardConext'
import styles from '../styles.module.scss'
import { Button } from '@/components/atoms/button'
import { Icon } from '@/components/atoms/icons'

export function DoctorCardButton() {
  const { doctorInfo } = useDoctorCardContext()
  return (
    <>
      <Button
        mode='secondary'
        label={doctorInfo.button}
        icon={<Icon type='linear' name='arrow-left' color='inherit' />}
        iconDir='right'
        className={styles.button}
      />
    </>
  )
}
