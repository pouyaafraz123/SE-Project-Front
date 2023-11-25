import { StoryContext, StoryFn } from '@storybook/react'
import { useArgs } from '@storybook/preview-api'

/**
 * Only works if component has onPagination, page, pageSize
 */
export function WithPagination(Story: StoryFn, context: StoryContext) {
  const [args, setArgs] = useArgs()
  // @ts-expect-error no typings in here
  context.args.tableParamProps.pagination.onPageChange = (page: number) => {
    const tableParamProps = args.tableParamProps
    tableParamProps.pagination.page = page
    setArgs({ tableParamProps })
  }

  // @ts-expect-error no typings in here
  context.args.tableParamProps.pagination.onResultPerPageChange = (
    per_page: number
  ) => {
    const tableParamProps = args.tableParamProps
    tableParamProps.pagination.per_page = per_page
    setArgs({ tableParamProps })
  }
  return <Story />
}
