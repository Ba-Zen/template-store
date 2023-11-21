export default {
  title: "Double Image",
  type: "object",
  name: "doubleImageBlock",

  fields: [
    {
      title: "Images",
      name: "images",
      description: "The array of images.",
      type: "array",
      of: [
        {
          name: "defaultImage",
          type: "defaultImage",
          title: "Image",
        },
      ],
      options: {
        layout: "grid",
      },
    },
  ],
}
