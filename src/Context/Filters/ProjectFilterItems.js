const ProjectFilterItems = () => {
  return [
    {
      Title: "Gender",
      Items: ["Female", "male", "other"],
      Type: "radio",
    },
    {
      Title: "Sort Order",
      Items: ["Amount: High to Low", "Ending soon", "Amount: Low to High"],
      Type: "checkbox",
    },
    {
      Title: "Location",
      Items: [
        {
          Title: "Africa",
          Items: ["cote d'ivoire", "mali", "burkina faso", "benin"],
          Type: "checkbox",
        },
        {
          Title: "Amerique",
          Items: ["cote d'ivoire", "mali", "burkina faso", "benin"],
          Type: "checkbox",
        },
        {
          Title: "Europe",
          Items: ["cote d'ivoire", "mali", "burkina faso", "benin"],
          Type: "checkbox",
        },
        {
          Title: "Asie",
          Items: ["cote d'ivoire", "mali", "burkina faso", "benin"],
          Type: "checkbox",
        },
      ],
      Type: "accordion",
    },
    {
      Title: "Sectors",
      Items: [
        "Agiculture",
        "Arts",
        "Clothing",
        "Construction",
        "Education",
        "Entertainment",
        "Food",
        "Health",
        "Housing",
        "Manufacturing",
        "Personal Use",
        "Retail",
        "Services",
        "Transportation",
        "Wholesale",
      ],
      Type: "checkbox",
    },
  ];
};

export default ProjectFilterItems;