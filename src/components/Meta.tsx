import { useEffect } from 'react'

interface MetaProps {
  title: string
  description?: string
  image?: string
}

export default function Meta({ title, description, image }: MetaProps) {
  useEffect(() => {
    // Update document title
    document.title = title

    // Helper to update or create meta tags
    const setMetaTag = (property: string, content: string) => {
      let element = document.querySelector(`meta[property="${property}"]`) || 
                    document.querySelector(`meta[name="${property}"]`)
      if (!element) {
        element = document.createElement('meta')
        if (property.startsWith('og:')) {
          element.setAttribute('property', property)
        } else {
          element.setAttribute('name', property)
        }
        document.head.appendChild(element)
      }
      element.setAttribute('content', content)
    }

    setMetaTag('og:title', title)

    if (description) {
      setMetaTag('description', description)
      setMetaTag('og:description', description)
    }

    if (image) {
      setMetaTag('og:image', image)
    }

  }, [title, description, image])

  return null
}
