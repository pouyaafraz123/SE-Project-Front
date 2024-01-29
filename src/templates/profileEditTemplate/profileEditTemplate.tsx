import { Form } from '@components/formControls/baseForm'
import { Grid } from '@components/atoms/Grid'
import { useFormik } from 'formik'
import { FastInput, FastPhone } from '@components/fastFields'
import { toPhone } from '@utils'
import { FileInput } from '@components/formControls/fileInput'
import { Avatar } from '@components/atoms/avatar'
import { IProfileEditTemplateProps } from '@/templates/profileEditTemplate/types.ts'
import {
  editProfileInitialValues,
  editProfileSchema,
  IEditProfileFormValues
} from '@/templates/profileEditTemplate/schema.ts'

export function ProfileEditTemplate({
  profileData,
  onSubmit
}: IProfileEditTemplateProps) {
  const formik = useFormik<IEditProfileFormValues>({
    initialValues: profileData
      ? {
          lastName: profileData?.lastName,
          firstName: profileData?.firstName,
          mobileNumber: toPhone(profileData?.mobileNumber),
          avatarFile: undefined
        }
      : editProfileInitialValues,
    validationSchema: editProfileSchema,
    onSubmit: (values) => {
      onSubmit(values)
    }
  })

  return (
    <Form onSubmit={formik.handleSubmit}>
      <div>
        <Avatar
          userInfo={{
            firstName: profileData?.firstName || '',
            lastName: profileData?.lastName || '',
            imageUrl: profileData?.avatarFile?.url
          }}
          size={'large'}
        />
      </div>
      <Grid subtitle={'profile_edit'}>
        <FastInput name={'firstName'} type={'first_name'} formik={formik} />
        <FastInput name={'lastName'} type={'last_name'} formik={formik} />
        <FastPhone name={'mobileNumber'} formik={formik} readonly={false} />
        <Grid.FullWidthColumn>
          <FileInput
            type={'image'}
            label={'upload_avatar'}
            value={formik.values.avatarFile ? [formik.values.avatarFile] : []}
            onChange={(value) => formik.setFieldValue('avatarFile', value[0])}
          />
        </Grid.FullWidthColumn>
      </Grid>
    </Form>
  )
}
