import {defineArrayMember, defineField, defineType} from 'sanity'

export const projects = defineType({
  type: 'document',
  name: 'projects',
  title: 'projects',
  fields: [
    defineField({type: 'string', name: 'title', title: 'title'}),
    defineField({
      type: 'string',
      name: 'shortdescription',
      title: 'shortDescription',
    }),
    defineField({
      type: 'array',
      name: 'description',
      title: 'description',
      of: [defineArrayMember({type: 'block'})],
    }),
    defineField({
      type: 'array',
      name: 'skills',
      title: 'skills',
      of: [defineArrayMember({type: 'reference', to: [{type: 'skill'}]})],
    }),
    defineField({type: 'date', name: 'projectStart', title: 'projectStart'}),
    defineField({type: 'date', name: 'projectend', title: 'projectEnd'}),
    defineField({
      type: 'reference',
      name: 'projectcategory',
      title: 'projectCategory',
      to: [{type: 'projectcategory'}],
    }),
    defineField({
      type: 'reference',
      name: 'company',
      title: 'company',
      to: [{type: 'company'}],
    }),
    defineField({
      type: 'reference',
      name: 'role',
      title: 'role',
      to: [{type: 'role'}],
    }),
  ],
})
