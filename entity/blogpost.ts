import { IContentDocument } from '@nuxt/content/types/content'

export interface BlogPostType extends IContentDocument {
  title: string
  date: string // TODO: parse Date type
}
