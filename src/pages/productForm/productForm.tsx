import { BasePage } from '@pages/basePage/basePage.tsx'
import { notify } from '@components/atoms/notify'
import { useNavigate } from 'react-router-dom'
import { uploadFiles, useUploadFiles } from '@api/file'
import { useRef } from 'react'
import { usePostProduct } from '@api/product'
import { AddProduct } from '@/templates/addProduct'

export function Component() {
  const { mutate: uploadFile } = useUploadFiles()
  const { mutate } = usePostProduct()

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
      <AddProduct
        onSubmit={(values) => {
          const promise = setUpdatingAndReturnPromise()
          notify.promise({
            promise,
            pendingMessage: 'در حال ویرایش',
            rejectMessage: 'خطا',
            resolvedMessage: 'با موفقیت آپدیت شد'
          })

          uploadFiles(
            values?.productImages?.map((item) => {
              const formData = new FormData()
              formData?.set('file', item)
              return { formData }
            })
          ).then((d) => {
            mutate(
              {
                name: values.name,
                description: values.description,
                status: values.status?.key,
                price: values.price,
                discountPrice: values.discountPrice
                  ? Number(values.discountPrice)
                  : undefined,
                productImages: d?.map((item, index) => {
                  if (index === 0) {
                    return { type: 'Cover', fileId: item?.fileId }
                  } else {
                    return { type: 'Gallery', fileId: item?.fileId }
                  }
                }),
                quantity: values.quantity,
                detail: JSON.stringify(values.detail),
                brandGuid: values.brand.key,
                categoryGuid: values.category.key
              },
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
          })
        }}
      />
    </BasePage>
  )
}
