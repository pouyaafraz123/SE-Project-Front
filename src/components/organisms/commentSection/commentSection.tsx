import { useFormik } from 'formik'
import { ICommentFormValues, commentFormInitialValues } from './schema'
import { ICommentSectionProps } from './type'
import { Grid } from '@/components/atoms/Grid'
import { FastTextarea } from '@/components/fastFields/fastTextarea/fastTextarea'
import { Button } from '@/components/atoms/button/button'

export function CommentSection({ comments, onSubmit }: ICommentSectionProps) {
  const formik = useFormik<ICommentFormValues>({
    initialValues: commentFormInitialValues,
    onSubmit: (values) => {
      onSubmit(values.comment)
    }
  })

  return (
    <div>
      <Grid>
        <Grid.FullWidthColumn>
          <FastTextarea
            name={'comment'}
            type={'description'}
            title={'comment'}
            formik={formik}
          />
        </Grid.FullWidthColumn>
        <Grid.Button>
          <Button
            mode={'main'}
            onClick={() => formik.submitForm()}
            label='افزودن نظر'
          />
        </Grid.Button>
        <Grid.FullWidthColumn>
          <div>
            {comments?.map((comment) => {
              return <div key={comment.comment}>{comment.comment}</div>
            })}
          </div>
        </Grid.FullWidthColumn>
      </Grid>
    </div>
  )
}
