import { BasePage } from '@pages/basePage/basePage.tsx'
import { usePostCategory } from '@api/category/postCategory.ts'
import { notify } from '@components/atoms/notify'
import { useNavigate } from 'react-router-dom'
import { AddCategory } from '@/templates/addCategory'

export function Component() {
  const { mutate } = usePostCategory()

  const navigate = useNavigate()

  return (
    <BasePage isNeedBack>
      <AddCategory
        onSubmit={(dto) =>
          mutate(dto, {
            onSuccess: () => {
              notify.success({ title: 'موفقیت آمیز', text: 'ایجاد شد' })
              navigate(-1)
            }
          })
        }
      />
    </BasePage>
  )
}
