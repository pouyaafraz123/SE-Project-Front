import { StoryContext, StoryFn } from '@storybook/react'
import { useArgs } from '@storybook/preview-api'

/**
 * Only works if component has onPagination, page, pageSize
 */
export function WithTabs(Story: StoryFn, context: StoryContext) {
  const [args, setArgs] = useArgs()
  // @ts-expect-error no typings in here
  context.args.tableParamProps.tabProps.onChange = (selectedKey: string) => {
    const tableParamProps = args.tableParamProps
    tableParamProps.tabProps.selectedKey = selectedKey
    setArgs({ tableParamProps })
  }
  return <Story />
}
