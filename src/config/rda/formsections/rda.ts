const section = {
  id: 'rdaSpecific',
  title: {
    en: 'RDA specific',
    nl: 'RDA specifiek',
  },
  fields: [
    {
      type: 'autocomplete',
      label: {
        en: 'Origin',
        nl: 'Oorsprong',
      },
      name: 'origin',
      required: true,
      description: {
        en: 'Select a working group, interest group, or BoF in RDA',
        nl: 'Selecteer een working group, interest group, of BoF van de RDA',
      },
      multiselect: true,
      options: [],
    },
  ],
};

export default section;