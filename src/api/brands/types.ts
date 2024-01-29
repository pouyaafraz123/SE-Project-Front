export interface IBrands {
  name: string
  uuid: string
  logoFile: {
    fileId: string
    url: string
  }
}

export interface IBrandDTO {
  name: string
  logoFileId: string
}
