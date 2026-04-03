import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    // 1. This is for the main title of your LinkedIn post
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    // 2. This creates a web-friendly name for the post (e.g., my-first-post)
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title', // It takes the name from the Title automatically
        maxLength: 96,
      },
    }),

    // 3. THIS IS NEW: The box to paste your LinkedIn link
    defineField({
      name: 'linkedinUrl',
      title: 'LinkedIn Post URL',
      type: 'url',
      validation: (Rule) => Rule.uri({
        scheme: ['http', 'https'] // Only allows real website links
      })
    }),

    // 4. This is to select who wrote the post
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    }),

    // 5. This is for the big image you see on the card
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true, // Allows you to crop the image inside Sanity
      },
    }),

    // 6. This is to group posts into categories (like IoT or React)
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),

    // 7. This is the date and time you publish the post
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),

    // 8. This is for the long description or story of the post
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],

  // This part helps you see a small preview in the Sanity Dashboard
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})