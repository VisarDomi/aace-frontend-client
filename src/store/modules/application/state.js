export const state = {
  appProfile: {
    first_name: "",
    last_name: "",
    profession: "",
    sex: "",
    summary: "",
    country: "",
    phone: "",
    address: "",
    birthday: "",
    website: "",
    email: "",
    files: [],
    sexOptions: [{ text: "Mashkull", id: 0 }, { text: "Femer", id: 1 }],
    professionDropdown: {
      isProfessionInputEnabled: false,
      professionOptions: [
        { text: "Inxhinier Ndertimi", id: 0 },
        { text: "Inxhinier Civil", id: 1 },
        { text: "Inxhinier Mekanik", id: 2 },
        { text: "Te tjere", id: 3 }
      ]
    }
  },
  appEducations: [],
  educationId: 0,
  totalEducations: 0,
  appExperiences: [],
  experienceId: 0,
  totalExperiences: 0,
  appSkills: [],
  skillId: 0,
  totalSkills: 0,
  educationTypeOptions: [
    { text: "Shkolle e mesme", id: 0 },
    { text: "Shkolle e larte", id: 1 }
  ],
  // the following should be conditional on the previous choice
  educationMiddleDegreeDropdown: {
    isEducationMiddleDegreeInputEnabled: false,
    educationMiddleDegreeOptions: [
      { text: "Pergjithshme", id: 0 },
      { text: "Teknike", id: 1 },
      { text: "Te tjere", id: 2 }
    ]
  },
  educationHighDegreeDropdown: {
    isEducationHighDegreeInputEnabled: false,
    educationHighDegreeOptions: [
      { text: "Bachelor", id: 0 },
      { text: "Master", id: 1 },
      { text: "Diplome", id: 2 },
      { text: "Te tjere", id: 3 }
    ]
  },
  educationHighFieldOfStudyDropdown: {
    isEducationHighFieldOfStudyInput: false,
    educationHighFieldOfStudyOptions: [
      { text: "Inxhinier Civil", id: 0 },
      { text: "Inxhinier Elektrik", id: 1 },
      { text: "Te tjera", id: 2 }
    ]
  }
};
