export type Comment = {
  body: string
  author: string
}

export type CreateCommentDTO = {
  body: string
  author: string
  discussionId: number
}
