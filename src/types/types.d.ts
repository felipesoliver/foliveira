export interface IMedia {
  id: number
  alt: string
  caption: string
  updatedAt:	string
  createdAt: string
  url: string
  thumbnailURL: string
  filename: string
  mimeType: string
  width: number
  height: number
  sizes?: []
}

export interface ILink {
  url: string
  text: string
  blank: boolean
}

export interface ICta {
  text: string
  url?: string
  blank?: boolean
  className?: string
  variant: 'light' | 'dark'
}

interface IMeta {
  title: string
  description: string
  image: IMedia
}

interface IContent {
  id: number
  title: string
  publishedAt: string
  slug: string
  updatedAt:	string
  createdAt: string
  meta: IMeta
}

interface IHero {
  richtext: {
    root: {
      children: {
        children: {
          text: string
        }[]
      }[]
    }
  }
  media: IMedia
}

export interface IHomepage extends IContent {
  hero: IHero
}
