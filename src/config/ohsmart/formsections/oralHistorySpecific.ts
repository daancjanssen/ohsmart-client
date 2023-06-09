const section = {
  id: 'ohs',
  title: {
    en: 'Oral-history specific',
    nl: 'Specifiek voor mondelinge geschiedenis',
  },
  fields: [
    {
      type: 'group',
      label: {
        en: 'Interviewee',
        nl: 'Geinterviewde',
      },
      name: 'interviewee',
      repeatable: false,
      description: {
        en: 'Information about the person being interviewed. This data will not be public.',
        nl: 'Informatie over de persoon die wordt geinterviewd. Deze data wordt niet gepubliceerd.',
      },
      fields: [
        {
          type: 'text',
          label: {
            en: 'First name',
            nl: 'Voornaam',
          },
          name: 'interviewee_first_name',
          required: true,
          private: true,
        },
        {
          type: 'text',
          label: {
            en: 'Last name',
            nl: 'Achternaam',
          },
          name: 'interviewee_last_name',
          required: true,
          private: true,
        },
        {
          type: 'text',
          label: {
            en: 'Preferred name',
            nl: 'Voorkeursnaam',
          },
          name: 'interviewee_preferred_name',
          required: false,
          private: true,
          repeatable: true,
        },
        {
          type: 'date',
          label: {
            en: 'Date of birth',
            nl: 'Geboortedatum',
          },
          name: 'interviewee_dob',
          required: true,
          private: true,
        },
        {
          type: 'text',
          label: {
            en: 'Function',
            nl: 'Functie',
          },
          name: 'interviewee_function',
          required: false,
          private: true,
          repeatable: true,
        },
        {
          type: 'text',
          label: {
            en: 'Affiliation',
            nl: 'Affiliatie',
          },
          name: 'interviewee_affiliation',
          required: false,
          private: true,
          repeatable: true,
        },
        {
          type: 'check',
          label: {
            en: 'Consent form',
            nl: 'Toestemmingsformulier',
          },
          name: 'interviewee_consent',
          required: true,
          private: true,
          options: [
            {
              value: 'interviewee_consent_signed',
              label: {
                en: 'Signed',
                nl: 'Getekend',
              },
            },
          ],
        },
      ]
    },
    {
      type: 'group',
      label: {
        en: 'Interviewer',
        nl: 'Interviewer',
      },
      name: 'interviewer',
      repeatable: true,
      description: {
        en: 'Information about the person(s) taking the interview. This data will not be public.',
        nl: 'Informatie over de persoon het interview afneemt. Deze data wordt niet gepubliceerd.',
      },
      fields: [
        {
          type: 'text',
          label: {
            en: 'First name',
            nl: 'Voornaam',
          },
          name: 'interviewer_first_name',
          required: true,
          private: true,
        },
        {
          type: 'text',
          label: {
            en: 'Last name',
            nl: 'Achternaam',
          },
          name: 'interviewer_last_name',
          required: true,
          private: true,
        },
        {
          type: 'text',
          label: {
            en: 'Preferred name',
            nl: 'Voorkeursnaam',
          },
          name: 'interviewer_preferred_name',
          required: false,
          private: true,
          repeatable: true,
        },
        {
          type: 'date',
          label: {
            en: 'Date of birth',
            nl: 'Geboortedatum',
          },
          name: 'interviewer_dob',
          required: true,
          private: true,
        },
        {
          type: 'text',
          label: {
            en: 'Function',
            nl: 'Functie',
          },
          name: 'interviewer_function',
          required: false,
          private: true,
          repeatable: true,
        },
        {
          type: 'text',
          label: {
            en: 'Affiliation',
            nl: 'Affiliatie',
          },
          name: 'interviewer_affiliation',
          required: false,
          private: true,
          repeatable: true,
        },
        {
          type: 'check',
          label: {
            en: 'Consent form',
            nl: 'Toestemmingsformulier',
          },
          name: 'interviewer_consent',
          required: true,
          private: true,
          options: [
            {
              value: 'interviewer_consent_signed',
              label: {
                en: 'Signed',
                nl: 'Getekend',
              },
            },
          ],
        },
      ]
    },
    {
      type: 'group',
      label: {
        en: 'Interpreter',
        nl: 'Vertaler',
      },
      name: 'interpreter',
      repeatable: true,
      description: {
        en: 'Information about the person(s) interpreting the interview. This data will not be public.',
        nl: 'Informatie over de persoon het interview heeft vertaald. Deze data wordt niet gepubliceerd.',
      },
      fields: [
        {
          type: 'text',
          label: {
            en: 'First name',
            nl: 'Voornaam',
          },
          name: 'interpreter_first_name',
          required: true,
          private: true,
        },
        {
          type: 'text',
          label: {
            en: 'Last name',
            nl: 'Achternaam',
          },
          name: 'interpreter_last_name',
          required: true,
          private: true,
        },
        {
          type: 'text',
          label: {
            en: 'Function',
            nl: 'Functie',
          },
          name: 'interpreter_function',
          required: false,
          private: true,
          repeatable: true,
        },
        {
          type: 'text',
          label: {
            en: 'Affiliation',
            nl: 'Affiliatie',
          },
          name: 'interpreter_affiliation',
          required: false,
          private: true,
          repeatable: true,
        },
        {
          type: 'check',
          label: {
            en: 'Consent form',
            nl: 'Toestemmingsformulier',
          },
          name: 'interpreter_consent',
          required: true,
          private: true,
          options: [
            {
              value: 'interpreter_consent_signed',
              label: {
                en: 'Signed',
                nl: 'Getekend',
              },
            },
          ],
        },
      ]
    },
    {
      type: 'group',
      label: {
        en: 'Others preset',
        nl: 'Andere aanwezigen',
      },
      name: 'others',
      repeatable: true,
      description: {
        en: 'Information about other person(s) being present during the interview. This data will not be public.',
        nl: 'Informatie over andere aanwezigen bij het interview. Deze data wordt niet gepubliceerd.',
      },
      fields: [
        {
          type: 'text',
          label: {
            en: 'First name',
            nl: 'Voornaam',
          },
          name: 'others_first_name',
          required: false,
          private: true,
        },
        {
          type: 'text',
          label: {
            en: 'Last name',
            nl: 'Achternaam',
          },
          name: 'others_last_name',
          required: false,
          private: true,
        },
        {
          type: 'text',
          label: {
            en: 'Function',
            nl: 'Functie',
          },
          name: 'others_function',
          required: false,
          private: true,
          repeatable: true,
        },
        {
          type: 'text',
          label: {
            en: 'Affiliation',
            nl: 'Affiliatie',
          },
          name: 'others_affiliation',
          required: false,
          private: true,
          repeatable: true,
        },
        {
          type: 'check',
          label: {
            en: 'Consent form',
            nl: 'Toestemmingsformulier',
          },
          name: 'others_consent',
          required: false,
          private: true,
          options: [
            {
              value: 'others_consent_signed',
              label: {
                en: 'Signed',
                nl: 'Getekend',
              },
            },
          ],
        },
      ]
    },
    {
      type: 'autocomplete',
      label: {
        en: 'Location of interview',
        nl: 'Locatie van interview',
      },
      name: 'interview_location',
      required: true,
      multiselect: true,
      description: {
        en: 'Location where interview was conducted',
        nl: 'Plek waar het interview is afgenomen',
      },
      options: 'geonames',
    },
    {
      type: 'group',
      label: {
        en: 'Date and time',
        nl: 'Datum en tijd',
      },
      name: 'interview_date_time',
      repeatable: true,
      description: {
        en: 'Date and time of interview',
        nl: 'Data en tijd waarop het interview is afgenomen',
      },
      fields: [
        {
          type: 'datetime-local',
          label: {
            en: 'Start time and date',
            nl: 'Starttijd en -datum',
          },
          name: 'interview_date_time_start',
          required: true,
        },
        {
          type: 'datetime-local',
          label: {
            en: 'End time and date',
            nl: 'Eindtijd en -datum',
          },
          name: 'interview_date_time_end',
          required: false,
        },
      ],
    },
    {
      type: 'text',
      label: {
        en: 'Recorded by',
        nl: 'Opgenomen door',
      },
      name: 'recorded_by',
      required: true,
      repeatable: true,
      description: {
        en: 'Name of person assisting with recording and affiliation',
        nl: 'Naam en affiliatie van persoon die interview heeft opgenomen',
      },
    },
    {
      type: 'autocomplete',
      label: {
        en: 'Recording format',
        nl: 'Opnameformaat',
      },
      name: 'recording_format',
      required: false,
      repeatable: true,
      description: {
        en: 'MIME type and other type information',
        nl: 'MIME type en andere type-informatie',
      },
      options: ['test1', 'test2'],
    },
    {
      type: 'autocomplete',
      label: {
        en: 'Recording equipment',
        nl: 'Opnameapparatuur',
      },
      name: 'recording_equipment',
      required: false,
      repeatable: true,
      options: ['test1', 'test2'],
    },
    {
      type: 'group',
      label: {
        en: 'Transcript by human',
        nl: 'Transcriptie door persoon',
      },
      name: 'transcript_human',
      repeatable: true,
      description: {
        en: 'Information about the transcriber. This data will not be public.',
        nl: 'Informatie over de persoon die de transcriptie heeft gedaan. Deze data wordt niet gepubliceerd.',
      },
      fields: [
        {
          type: 'text',
          label: {
            en: 'First name',
            nl: 'Voornaam',
          },
          name: 'transcript_human_first_name',
          required: true,
          private: true,
        },
        {
          type: 'text',
          label: {
            en: 'Last name',
            nl: 'Achternaam',
          },
          name: 'transcript_human_last_name',
          required: true,
          private: true,
        },
        {
          type: 'text',
          label: {
            en: 'Function',
            nl: 'Functie',
          },
          name: 'transcript_human_function',
          required: false,
          private: true,
          repeatable: true,
        },
        {
          type: 'text',
          label: {
            en: 'Affiliation',
            nl: 'Affiliatie',
          },
          name: 'transcript_human_affiliation',
          required: false,
          private: true,
          repeatable: true,
        },
        {
          type: 'check',
          label: {
            en: 'Consent form',
            nl: 'Toestemmingsformulier',
          },
          name: 'transcript_human_consent',
          required: false,
          private: true,
          options: [
            {
              value: 'transcript_human_consent_signed',
              label: {
                en: 'Signed',
                nl: 'Getekend',
              },
            },
          ],
        },
      ],
    },
    {
      type: 'text',
      label: {
        en: 'Transcript by machine',
        nl: 'Machinetranscriptie',
      },
      name: 'transcript_machine',
      required: true,
      repeatable: false,
    },
  ],
};

export default section;