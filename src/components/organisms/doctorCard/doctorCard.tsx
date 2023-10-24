import { DoctorCardProps } from './types'
import DoctorCardContext from './doctorCardConext'
import { DoctorCardAvatar } from './components/avatar'
import { DoctorCardContent } from './components/content'
import styles from './styles.module.scss'
import { DoctorCardButton } from './components/button'
import { Box } from '@/components/atoms/box'

function DoctorCard(props: DoctorCardProps) {
  const { doctorInfo } = props

  // shadow problem
  return (
    <DoctorCardContext.Provider value={{ doctorInfo: doctorInfo }}>
      <Box px='l1' py='l1' radius='lg' shadow borderNone>
        <div className={styles.cardContainer}>
          <div className={styles.top}>
            <DoctorCardAvatar />
            <DoctorCardContent />
          </div>
          <DoctorCardButton />
        </div>
      </Box>
    </DoctorCardContext.Provider>
  )
}

export { DoctorCard }
