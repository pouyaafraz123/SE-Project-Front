import { IProfileEndpoint } from '@api/profile'
import { IEditProfileFormValues } from '@/templates/profileEditTemplate/schema.ts'

export interface IProfileEditTemplateProps {
  profileData: IProfileEndpoint | undefined
  onSubmit: (dto: IEditProfileFormValues) => void
}
