export const baseProfile = {
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
};

export const baseEducation = {
  files: [],
  education_type: "",
  degree: "",
  field_of_study: "",
  school: "",
  from_date: "",
  to_date: "",
  description: "",
  educationTypeOptions: [
    { text: "Shkolle e mesme", id: 0 },
    { text: "Shkolle e larte", id: 1 }
  ],
  educationMiddleDegreeDropdown: {
    isEducationMiddleDegreeInputEnabled: false,
    educationMiddleDegreeOptions: [
      // { text: "Zgjidhni", id: 0 },
      { text: "Pergjithshme", id: 1 },
      { text: "Teknike", id: 2 },
      { text: "Te tjere", id: 3 }
    ]
  },
  educationHighDegreeDropdown: {
    isEducationHighDegreeInputEnabled: false,
    educationHighDegreeOptions: [
      // { text: "Zgjidhni", id: 0 },
      { text: "Bachelor", id: 1 },
      { text: "Master", id: 2 },
      { text: "Diplome", id: 3 },
      { text: "Te tjere", id: 4 }
    ]
  },
  educationHighFieldOfStudyDropdown: {
    isEducationHighFieldOfStudyInput: false,
    educationHighFieldOfStudyOptions: [
      // { text: "Zgjidhni", id: 0 },
      { text: "Inxhinier Civil", id: 1 },
      { text: "Inxhinier Elektrik", id: 2 },
      { text: "Te tjera", id: 3 }
    ]
  }
};

export const baseExperience = {
  files: [],
  title: "",
  employer: "",
  location: "",
  from_date: "",
  to_date: "",
  description: ""
};

export const baseSkill = {
  files: [],
  releaser: "",
  name: "",
  from_date: "",
  to_date: "",
  description: ""
};

//------------------------------

// copying strings

// let string = "my string";
// let string_copy = (" " + string).slice(1);
// console.log("string", string);
// console.log("string_copy", string_copy);
