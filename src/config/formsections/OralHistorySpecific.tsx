const prefix = "ohs";

export const section = {
  title: "Oral-history specific",
  id: prefix,
  fields: [
    {
      type: 'group',
      label: 'Interviewee',
      id: `${prefix}_group_interviewee`,
      repeatable: true,
      description: 'Information about the person being interviewed. This data will not be public.',
      fields: [
        {
          type: "text",
          label: "Initials",
          id: `${prefix}_interviewee_initials`,
          required: true,
          private: true,
        },
        {
          type: "text",
          label: "Last name",
          id: `${prefix}_interviewee_last_name`,
          required: true,
          private: true,
        },
        {
          type: "date",
          label: "Date of birth",
          id: `${prefix}_interviewee_dob`,
          required: true,
          private: true,
        },
      ]
    },
    {
      type: 'group',
      label: 'Interviewer',
      id: `${prefix}_group_interviewer`,
      repeatable: true,
      description: 'Information about the person doing the interview. This data will not be public.',
      fields: [
        {
          type: "text",
          label: "First name",
          id: `${prefix}_interviewer_first_name`,
          required: true,
          private: true,
        },
        {
          type: "text",
          label: "Last name",
          id: `${prefix}_interviewer_last_name`,
          required: true,
          private: true,
        },
      ],
    },
    {
      type: 'group',
      label: 'Others present',
      id: `${prefix}_group_others`,
      repeatable: true,
      description: 'Information about other people present during the interview. This data will not be public.',
      fields: [
        {
          type: "text",
          label: "First name",
          id: `${prefix}_others_first_name`,
          private: true,
        },
        {
          type: "text",
          label: "Last name",
          id: `${prefix}_others_last_name`,
          private: true,
        },
        {
          type: "text",
          label: "Function",
          id: `${prefix}_others_function`,
          private: true,
        },
      ],
    },
    {
      type: "select",
      label: "Location of interview",
      id: `${prefix}_location`,
      required: true,
      repeatable: true,
    },
    {
      type: "datetime-local",
      label: "Date and time of interview",
      id: `${prefix}_date_time_interview`,
      required: true,
      repeatable: true,
    },
    {
      type: "text",
      label: "Recorded by",
      id: `${prefix}_recorded_by`,
      required: true,
      repeatable: true,
    },
    // recording format follows from file upload I'd say
    {
      type: "text",
      label: "Recording equipment",
      id: `${prefix}_recording_equipment`,
      required: false,
      repeatable: true,
    },
    // transcript by human: should this be here, or in the files section?
    // transcription by machine, should be checkbox?
  ],
};

export default section;