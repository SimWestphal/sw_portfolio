import {defineField, defineType} from 'sanity'

export const role = defineType({
  type: 'document',
  name: 'role',
  title: 'role',
  fields: [defineField({type: 'string', name: 'title', title: 'title'})],
})
