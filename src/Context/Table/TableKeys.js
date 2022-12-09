export const LENDERKEY = () => {
  return {
    head: [
      " ",
      "Name",
      "status",
      "Amount lent",
      "Interest Rate",
      "Interest Amount",
      "Interest received to date",
      "Next Payment Due",
      "Loan Len",
      "Action",
    ],
    body: [
      "Name",
      "status",
      "Amount lent",
      "Interest Rate",
      "Interest Amount",
      "Interest received to date",
      "Next Payment Due",
      "Loan Len",
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
