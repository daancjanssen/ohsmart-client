const prefix = "relations";

export const section = {
  title: "Relations",
  id: prefix,
  fields: [
    {
      type: "select",
      label: "Audience",
      id: `${prefix}_audience`,
      required: false,
      repeatable: true,
      value: '',
    },
    {
      type: "select",
      label: "Related to",
      id: `${prefix}_relation`,
      required: false,
      repeatable: true,
      value: '',
    },
  ],
};

export default section;