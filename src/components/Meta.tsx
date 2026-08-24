import { Helmet } from 'react-helmet-async'

interface MetaProps {
  title: string
  description?: string
  image?: string
}

export default function Meta({ title, description, image }: MetaProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      {description && <meta name="description" content={description} />}
      {description && <meta property="og:description" content={description} />}
      {image && <meta property="og:image" content={image} />}
    </Helmet>
  )
}
