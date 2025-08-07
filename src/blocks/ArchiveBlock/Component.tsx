import type { Post, ArchiveBlock as ArchiveBlockProps } from '@/payload-types'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import RichText from '@/components/RichText'

import { CollectionArchive } from '@/components/CollectionArchive'

export const ArchiveBlock: React.FC<
  ArchiveBlockProps & {
    id?: string
  }
> = async (props) => {
  const {
    id,
    categories,
    introContent,
    limit: limitFromProps,
    populateBy,
    selectedDocs,
    relationTo,
  } = props

  const limit = limitFromProps || 3

  //let posts: Post[] = []
  let items: any[] = []

  if (populateBy === 'collection' && relationTo) {
    const payload = await getPayload({ config: configPromise })

    const flattenedCategories = categories?.map((category) => {
      if (typeof category === 'object') return category.id
      else return category
    })

    const fetchedItems = await payload.find({
      //collection: 'posts',
      collection: relationTo,
      depth: 1,
      limit,
      ...(flattenedCategories && flattenedCategories.length > 0
        ? {
          where: {
            categories: {
              in: flattenedCategories,
            },
          },
        }
        : {}),
    })
    items = fetchedItems.docs
    //posts = fetchedPosts.docs
  } else if (populateBy === 'selection') {
    if (selectedDocs?.length) {
      const filteredSelected = selectedDocs
        .map((doc) => (typeof doc.value === 'object' ? doc.value : null))
        .filter(Boolean) as any[]

      items = filteredSelected
    }
  }
  const backgroundColorMap: Record<string, string> = {
    testimonials: 'bg-[#176ca9]',
    posts: 'bg-[#e0f2fe]',
    projects: 'bg-[#f3e8ff]',
    default: 'bg-white',
  }
  const bgClass = backgroundColorMap[relationTo || 'default'] || backgroundColorMap.default

  // else {
  //   if (selectedDocs?.length) {
  //     const filteredSelectedPosts = selectedDocs.map((post) => {
  //       if (typeof post.value === 'object') return post.value
  //     }) as Post[]

  //     //posts = filteredSelectedPosts

  //   }
  // }

  return (
    <div className={`my-16 py-12  ${bgClass}`} id={`block-${id}`}>
      {introContent && (
        <div className="text-center text-black text-3xl mb-16 container mx-auto px-4">
          {relationTo === 'testimonials' ?
            <h2 className='text-[38px] text-center text-white'>Testimonials</h2> : (
              <RichText className="" data={introContent} enableGutter={false} />
            )}
        </div>
      )}
      {/* <CollectionArchive posts={items} /> */}
      <CollectionArchive items={items} relationTo={relationTo ?? 'posts'} />
    </div>
  )
}
