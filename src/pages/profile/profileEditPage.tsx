import { BasePage } from '@pages/basePage/basePage.tsx'
import { ProfileEditTemplate } from '@/templates/profileEditTemplate'
import { usePostProfile, useProfile } from '@api/profile'
import { useUploadFile } from '@api/file'
import { notify } from '@components/atoms/notify'
import { useRef } from 'react'
import { encodePhone } from '@utils'

export function Component() {
  const profile = useProfile()

  const { mutate } = useUploadFile()
  const { mutate: updateProfile } = usePostProfile()

  const updating = useRef(false)

  const setUpdatingAndReturnPromise = () => {
    return new Promise((resolve) => {
      updating.current = true

      // This interval checks if updating is false at regular intervals
      const checkUpdating = setInterval(() => {
        if (!updating.current) {
          clearInterval(checkUpdating) // Stop the interval
          resolve(true) // Resolve the promise
        }
      }, 100) // Adjust the interval as needed
    })
  }

  if (!profile?.data?.data) {
    return <BasePage>در حال لود ...</BasePage>
  }

  return (
    <BasePage>
      <ProfileEditTemplate
        profileData={profile?.data?.data}
        onSubmit={(values) => {
          const formData = new FormData()
          if (!values.avatarFile && !profile?.data?.data?.avatarFile?.fileId) {
            notify.error({ title: 'خطا', text: 'باید عکسی آپلود کنید' })
            return
          }
          const promise = setUpdatingAndReturnPromise()
          notify.promise({
            promise,
            pendingMessage: 'در حال ویرایش',
            rejectMessage: 'خطا',
            resolvedMessage: 'با موفقیت آپدیت شد'
          })
          if (!values.avatarFile && profile?.data?.data?.avatarFile?.fileId) {
            updateProfile(
              {
                mobileNumber: encodePhone(values.mobileNumber),
                lastName: values.lastName,
                firstName: values.firstName,
                avatarFileId: profile?.data?.data?.avatarFile?.fileId
              },
              {
                onSuccess: () => {
                  updating.current = false
                }
              }
            )
            return
          }
          if (values.avatarFile) {
            formData.append('file', values.avatarFile)

            mutate(
              { formData },
              {
                onSuccess: (data) => {
                  updateProfile(
                    {
                      mobileNumber: encodePhone(values.mobileNumber),
                      lastName: values.lastName,
                      firstName: values.firstName,
                      avatarFileId: data?.data?.fileId
                    },
                    {
                      onSuccess: () => {
                        updating.current = false
                      }
                    }
                  )
                }
              }
            )
          }
        }}
      />
    </BasePage>
  )
}
