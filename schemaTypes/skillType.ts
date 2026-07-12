import {defineField, defineType} from 'sanity'

export const skill = defineType({
  type: 'document',
  name: 'skill',
  title: 'skill',
  fields: [
    defineField({type: 'string', name: 'title', title: 'title'}),
    defineField({
      type: 'reference',
      name: 'category',
      title: 'category',
      to: [{type: 'skillcategory'}],
    }),
  ],
})
