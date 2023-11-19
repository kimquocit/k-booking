import { defineField } from 'sanity';

const user = {
  name: 'user',
  title: 'user',
  type: 'document',
  fields: [
    defineField({
      name: 'isAdmin',
      title: 'Is Admin',
      type: 'boolean',
      description: '',
      initialValue: false,
      readOnly: true,
      hidden: true,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: '',
      readOnly: true,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'url',
    }),
    defineField({
      name: 'password',
      type: 'string',
      hidden: true,
    }),
    defineField({
      name: 'email',
      type: 'string',
      title: 'Email',
    }),
    defineField({
      name: 'emailVerified',
      type: 'datetime',
      hidden: true,
    }),
    defineField({
      name: 'about',
      title: 'About',
      type: 'text',
      description: '',
    }),
  ],
};

export default user;
