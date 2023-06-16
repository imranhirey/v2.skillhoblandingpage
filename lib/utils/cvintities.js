

let cvintities = [
    {
        name: "Personal Information",
        multiple: false,
        fields: [
            {
                name: "Name",
                type: "text",
                required: true,
                placeholder: "Enter your name",
                
            },
            {
                name: "Email",
                type: "email",
                required: true,
                placeholder: "Enter your email",
                
            },
            {
                name: "Phone",
                type: "tel",
                required: true,
                placeholder: "Enter your phone",
                
            },
            {
                name: "Address",
                type: "text",
                required: true,
                placeholder: "Enter your address",
                
            },
            {
                name: "City",
                type: "text",
                required: true,
                placeholder: "Enter your city",
                
            },
            {
                name: "Country",
                type: "text",
                required: true,
                placeholder: "Enter your country",
                
            },
            {
                name: "Postal Code",
                type: "text",
                required: true,
                placeholder: "Enter your postal code",
                
            },
        ],
    },
    {
        name: "Education",
        multiple: true,
        fields: [
            {
                name: "School",
                type: "text",
                required: true,
                placeholder: "Enter your school",
                
            },
            {
                name: "Degree",
                type: "text",
                required: true,
                placeholder: "Enter your degree",
                
            },
            {
                name: "Start Date",
                type: "date",
                required: true,
                placeholder: "Enter your start date",
                
            },
            {
                name: "End Date",
                type: "date",
                required: true,
                placeholder: "Enter your end date",
                
            },
            {
                name: "Description",
                type: "textarea",
                required: true,
                placeholder: "Enter your description",
                
            },
        ],
    },
    {
        name: "Experience",
        multiple: true,
        fields: [
            {
                name: "Company",
                type: "text",
                required: true,
                placeholder: "Enter your company",
                
            },
            {
                name: "Position",
                type: "text",
                required: true,
                placeholder: "Enter your position",
                
            },
            {
                name: "Start Date",
                type: "date",
                required: true,
                placeholder: "Enter your start date",
                
            },
            {
                name: "End Date",
                type: "date",
                required: true,
                placeholder: "Enter your end date",
                
            },
            {
                name: "Description",
                type: "textarea",
                required: true,
                placeholder: "Enter your description",
                
            },
        ],
    },
    {
        name: "Skills",
        multiple: true,
        fields: [
            {
                name: "Skill",
                type: "text",
                required: true,
                placeholder: "Enter your skill",
                
            },
            {
                name: "Percentage",
                type: "number",
                required: true,
                placeholder: "Enter your percentage",
                
            },
        ],
    },
    {
        name: "Languages",
        multiple: true,
        fields: [
            {
                name: "Language",
                type: "text",
                required: true,
                placeholder: "Enter your language",
                
            },
            {
                name: "Percentage",
                type: "number",
                required: true,
                placeholder: "Enter your percentage",
                
            },
        ],
    },
    {
        name: "Interests",
        multiple: true,
        fields: [
            {
                name: "Interest",
                type: "text",
                required: true,
                placeholder: "Enter your interest",
                
            },
        ],
    },
    
]

export default cvintities;