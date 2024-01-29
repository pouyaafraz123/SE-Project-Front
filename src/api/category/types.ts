export interface ICategory {
  name: string
  uuid: string
  parentCategory: string
}

export interface ICategoryDTO {
  name: string
  parentUuid?: string
}
