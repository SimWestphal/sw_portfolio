import {defineField, defineType} from 'sanity'

export const company = defineType({
  type: 'document',
  name: 'company',
  title: 'company',
  fields: [defineField({type: 'string', name: 'title', title: 'title'})],
})
