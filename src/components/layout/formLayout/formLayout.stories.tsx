import type { Meta as StoryMeta, StoryObj } from '@storybook/react'
import { useFormik } from 'formik'
import { PageLayout } from '../pageLayout'
import { FormLayout } from './index'

const Meta = {
  title: 'Layout/FormLayout',
  component: FormLayout,
  parameters: {
    layout: 'fullScreen'
  },
  tags: ['autodocs']
} satisfies StoryMeta<typeof FormLayout>

export default Meta
type Story = StoryObj<typeof Meta>

export const Default = {
  render: () => <FormLayoutComponent />
}
export const WithPageLayout = {
  render: () => (
    <PageLayout title='mainPage' breadcrumbs={[{ link: '', name: 'mainPage' }]}>
      <FormLayoutComponent />
    </PageLayout>
  )
}
function FormLayoutComponent() {
  const formik = useFormik({
    initialValues: {},
    onSubmit(values, formikHelpers) {}
  })
  return <FormLayout formik={formik}>Form Children</FormLayout>
}
