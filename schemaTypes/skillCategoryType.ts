import {defineField, defineType} from 'sanity'

export const skillcategory = defineType({
  type: 'document',
  name: 'skillcategory',
  title: 'skillCategory',
  fields: [defineField({type: 'string', name: 'title', title: 'title'})],
})
