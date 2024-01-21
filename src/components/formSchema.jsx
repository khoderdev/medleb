// Import necessary dependencies

const formSchema = [
    {
      name: "FirstName",
      label: "First Name",
      type: "text",
      required: true,
    },
    {
      name: "LastName",
      label: "Last Name",
      type: "text",
      required: true,
    },
    {
      name: "UserName",
      label: "Username",
      type: "text",
      required: true,
    },
    {
      name: "Email",
      label: "Email",
      type: "email",
      required: true,
    },
    {
      name: "PhoneNumber",
      label: "Phone Number",
      type: "text",
    },
    // Add more fields based on your database schema
    // ...
  
    // For fields with default values, you can include a `defaultValue` property
    // {
    //   name: "FieldName",
    //   label: "Field Label",
    //   type: "text",
    //   required: true,
    //   defaultValue: "Default Value",
    // },
  ];
  
  export default formSchema;
  