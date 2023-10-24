import { useDoctorCardContext } from '../doctorCardConext'
import { Avatar } from '@/components/atoms/avatar'

function DoctorCardAvatar() {
  const { doctorInfo } = useDoctorCardContext()
  const userInfo = {
    firstName: doctorInfo.firstName,
    lastName: doctorInfo.lastName,
    imageUrl: doctorInfo.avatar
  }
  return (
    <>
      <Avatar userInfo={userInfo} size='small' />
    </>
  )
}

export { DoctorCardAvatar }
