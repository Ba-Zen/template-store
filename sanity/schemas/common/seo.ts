export default {
  title: "SEO / Share Settings",
  name: "seo",
  type: "object",
  options: {
    collapsible: true,
  },
  fields: [
    {
      title: "Meta Title",
      name: "metaTitle",
      type: "string",
      description: "Title used for search engines and browsers.",
      validation: (Rule: {
        max: (arg0: number) => {
          (): any
          new (): any
          warning: { (arg0: string): any; new (): any }
        }
      }) =>
        Rule.max(50).warning(
          "Longer titles may be truncated by search engines"
        ),
    },
    {
      title: "Meta Description",
      name: "metaDesc",
      type: "text",
      rows: 3,
      description: "Description for search engines.",
      validation: (Rule: {
        max: (arg0: number) => {
          (): any
          new (): any
          warning: { (arg0: string): any; new (): any }
        }
      }) =>
        Rule.max(150).warning(
          "Longer descriptions may be truncated by search engines"
        ),
    },
    {
      title: "Share Graphic",
      name: "shareGraphic",
      type: "image",
      description: "Share graphics will be cropped to 1200x630",
    },
  ],
}
