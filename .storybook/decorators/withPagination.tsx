import { StoryContext, StoryFn } from '@storybook/react'
import { useArgs } from '@storybook/preview-api'

/**
 * Only works if component has onPagination, page, pageSize
 */
export function WithPagination(Story: StoryFn, context: StoryContext) {
  const [args, setArgs] = useArgs()
  context.args.onPagination = (page: number, pageSize: number) => {
    setArgs({ page, pageSize })
  }
  return <Story />
}
