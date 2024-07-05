import { useFormik } from 'formik'
import { ICommentFormValues, commentFormInitialValues } from './schema'
import { ICommentSectionProps } from './type'
import classes from './styles.module.scss'
import { Grid } from '@/components/atoms/Grid'
import { FastTextarea } from '@/components/fastFields/fastTextarea/fastTextarea'
import { Button } from '@/components/atoms/button/button'
import { Typography } from '@/components/atoms/typography'
import { Box } from '@/components/atoms/box'

export function CommentSection({ comments, onSubmit }: ICommentSectionProps) {
  const formik = useFormik<ICommentFormValues>({
    initialValues: commentFormInitialValues,
    onSubmit: (values) => {
      onSubmit(values.comment)
    }
  })

  return (
    <div className={classes.wrapper}>
      <Grid subtitle='commentSection'>
        <Grid.FullWidthColumn>
          <Box px='m1' py='m1' radius={'sm'}>
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
            </Grid>
          </Box>
        </Grid.FullWidthColumn>
        <Grid.FullWidthColumn>
          <div className={classes.commentContainer}>
            {comments?.map((comment) => {
              return (
                <div
                  key={comment.comment}
                  className={classes.commentContainer__card}
                >
                  <Typography
                    variant='subtitle1'
                    className={classes.commentContainer__cardTop}
                  >
                    {(comment.firstName || '') +
                      ' ' +
                      (comment.lastName || '') +
                      ' :'}
                  </Typography>
                  <Typography className={classes.commentContainer__cardContent}>
                    {comment.comment}
                  </Typography>
                </div>
              )
            })}
          </div>
        </Grid.FullWidthColumn>
      </Grid>
    </div>
  )
}
