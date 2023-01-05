import countriesList from "../../Seeds/country";

const Africa = [];
const Europe = [];
const Asie = [];
const America = [];
const Other = [];
const Antartica = [];
const Oceania = [];
countriesList.forEach((item) => {
  const continent = item.continents[0].toLowerCase();
  const region = item.region.toLowerCase();
  if (continent === "africa") {
    Africa.push(item.name.common);
  } else if (continent === "europe") {
    Europe.push(item.name.common);
  } else if (continent === "asia") {
    Asie.push(item.name.common);
  } else if (region === "americas") {
    America.push(item.name.common);
  } else if (continent === "antarctica") {
    Antartica.push(item.name.common);
  } else if (continent === "oceania") {
    Oceania.push(item.name.common);
  } else {
    Other.push(item.continents[0]);
  }
});

console.log("country no found his content", Other);

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
          Items: Africa,
          Type: "checkbox",
        },
        {
          Title: "Amerique",
          Items: America,
          Type: "checkbox",
        },
        {
          Title: "Europe",
          Items: Europe,
          Type: "checkbox",
        },
        {
          Title: "Asie",
          Items: Asie,
          Type: "checkbox",
        },
        {
          Title: "Antartica",
          Items: Antartica,
          Type: "checkbox",
        },
        {
          Title: "Oceania",
          Items: Oceania,
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
