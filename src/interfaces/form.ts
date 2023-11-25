type TCreate = 'create'
type TEdit = 'edit'
type TView = 'view'

export type IFormsTemplateProps<T> =
  | {
      mode: TCreate
      initialValues?: T
      onSubmit: (data: T) => void
      onCancel: () => void
    }
  | {
      mode: TView | TEdit | TCreate
      initialValues: T | undefined
      onSubmit: (data: T) => void
      onCancel: () => void
      id: string
    }

type TParams<T> = T extends undefined ? Record<string, unknown> : T

/**
 * T refers to view route params
 */
export type IViewModeLoaderData<T> = { mode: TView } & TParams<T>

/**
 * T refers to edit route params
 */
export type IEditModeLoaderData<T> = { mode: TEdit } & TParams<T>

/**
 * T refers to create route params
 */
export type ICreateModeLoaderData<T> = { mode: TCreate } & TParams<T>
