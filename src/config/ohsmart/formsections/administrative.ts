import languageList from '../../global/data/languageList.json';

const section = {
  id: 'administrative',
  title: {
    en: 'Administrative',
    nl: 'Administratief',
  },
  fields: [
    {
      type: 'autocomplete',
      label: {
        en: 'Language',
        nl: 'Taal',
      },
      name: 'language',
      required: false,
      description: {
        en: 'Language of interview',
        nl: 'Taal van het interview',
      },
      options: languageList.map( l => ({
        // Copied this list from https://gist.github.com/jrnk/8eb57b065ea0b098d571
        // We relabel the languages for processing in the form and in Dataverse
        label: l.name,
        value: `${l.code}|${l.name}`,
      })),
    },
    {
      type: 'date',
      label:  {
        en: 'Date available',
        nl: 'Datum beschikbaarheid',
      },
      name: 'date_available',
      required: true,
      description:  {
        en: 'In case of an embargo, else publication date',
        nl: 'In het geval van een embargo, anders publicatiedatum',
      },
    },
    {
      type: 'group',
      label: {
        en: 'Contact information',
        nl: 'Contactinformatie',
      },
      name: 'contact',
      fields: [
        {
          type: 'text',
          label: {
            en: 'Name',
            nl: 'Name',
          },
          name: 'contact_name',
          description: {
            en: 'Name of the person to contact in respect of metadata (curator)',
            nl: 'Naam van contactpersoon voor de metadata (curator)',
          }
        },
        {
          type: 'text',
          label: {
            en: 'Affiliatie',
            nl: 'Affiliation',
          },
          name: 'contact_affiliation',
          value: 'DANS',
          disabled: true,
        },
        {
          type: 'text',
          label: {
            en: 'Email',
            nl: 'Email',
          },
          name: 'contact_email',
          value: 'datateam@dans.knaw.nl',
          disabled: true,
        },
      ]
    },
  ],
};

export default section;