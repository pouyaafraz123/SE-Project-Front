import { useDoctorCardContext } from '../doctorCardConext'
import styles from '../styles.module.scss'
import { Typography } from '@/components/atoms/typography'

export function DoctorCardContent() {
  const { doctorInfo } = useDoctorCardContext()

  return (
    <>
      <div className={styles.contentContainer}>
        <span className={styles.suggestion}>
          <Typography color='primary-main' fontSize='xs' fontWeight='bold'>
            {doctorInfo.suggestionPercent}
          </Typography>
          <Typography
            color='secondary-text-light'
            fontSize='micro'
            fontWeight='medium'
          >
            {doctorInfo.suggestionUsers}
          </Typography>
        </span>
        <Typography color='primary-text' fontSize='md' fontWeight='extra-bold'>
          {doctorInfo.firstName + ' ' + doctorInfo.lastName}
        </Typography>
      </div>
      <Typography color='secondary-text' fontSize='xs' fontWeight='medium'>
        {doctorInfo.expertise}
      </Typography>
    </>
  )
}
