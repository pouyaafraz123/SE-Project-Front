import { BasePage } from '@pages/basePage/basePage.tsx'
import { notify } from '@components/atoms/notify'
import { useNavigate } from 'react-router-dom'
import { usePostBrand } from '@api/brands'
import { useUploadFile } from '@api/file'
import { useRef } from 'react'
import { AddBrand } from '@/templates/addBrand'

export function Component() {
  const { mutate: uploadFile } = useUploadFile()
  const { mutate } = usePostBrand()

  const navigate = useNavigate()

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

  return (
    <BasePage isNeedBack>
      <AddBrand
        onSubmit={(values) => {
          const promise = setUpdatingAndReturnPromise()
          notify.promise({
            promise,
            pendingMessage: 'در حال ویرایش',
            rejectMessage: 'خطا',
            resolvedMessage: 'با موفقیت آپدیت شد'
          })
          const formData = new FormData()
          formData.append('file', values.logoFileId!)
          uploadFile(
            { formData },
            {
              onSuccess: (data) => {
                mutate(
                  { name: values.name, logoFileId: data?.data?.fileId },
                  {
                    onSuccess: () => {
                      notify.success({ title: 'موفقیت آمیز', text: 'ایجاد شد' })
                      navigate(-1)
                      updating.current = false
                    },
                    onError: () => {
                      updating.current = false
                    }
                  }
                )
              }
            }
          )
        }}
      />
    </BasePage>
  )
}
