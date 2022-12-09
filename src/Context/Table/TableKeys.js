export const LENDERKEY = () => {
  return {
    head: [
      " ",
      "Name",
      "Location",
      "Category",
      "status",
      "Amount lent",
      "Description",
      "Country",
      "Loan Len",
      "Action",
    ],
    body: [
      "name",
      "Location",
      "category",
      "status",
      "amout",
      "decr",
      "country",
      "Loan",
      "Action",
      "Content",
    ],
  };
};

export const BORROWERKEY = () => {
  return {
    head: [
      "name",
      " total amount",
      " received amount",
      "categories",
      " creation date",
      " modification date",
      " status",
      "  actions",
    ],
    body: [
      "name",
      "amount",
      "received",
      "categories",
      "creation",
      "modification",
      "status",
      "actions",
    ],
  };
};
