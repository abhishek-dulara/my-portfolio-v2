export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    // මෙන්න මේ අලුත් Category කොටස තමයි වැදගත්ම දේ
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'University Project', value: 'university' },
          { title: 'Additional Project', value: 'additional' },
        ],
        layout: 'radio', // Radio buttons විදියට ලේසියෙන් තෝරන්න පුළුවන්
      },
      validation: Rule => Rule.required() // මේක අනිවාර්යයෙන්ම තෝරන්න ඕනේ කියලා නීතියක් දැම්මා
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'projectUrl',
      title: 'Project URL',
      type: 'url',
    },
  ],
}