import {defineField, defineType} from 'sanity'

export const projecttype = defineType({
  type: 'document',
  name: 'projectcategory',
  title: 'projectCategory',
  fields: [defineField({type: 'string', name: 'title', title: 'title'})],
})
