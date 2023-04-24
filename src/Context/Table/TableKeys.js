export const LENDERKEY = () => {
  return {
    head: [
      " ",
      "Name",
      "Amount lent",
      "Interest Rate",
      "Interest Amount",
      "disbursed date",
      "Created Date",
      "loan length",
    ],
    body: [
      "Name",
      "Amount lent",
      "Interest Rate",
      "Interest Amount",
      "disbursed date",
      "Created Date",
      "loan length",
      "Content",
    ],
  };
};

export const BORROWERKEY = () => {
  return {
    head: [
      "id",
      "Project Name",
      "status",
      "Amount Requested",
      "Company Name",
      "Project Country",
      "Action",
    ],
    body: [
      "id",
      "projectTitle",
      "status",
      "amountRequested",
      "companyName",
      "country",
      "Action",
    ],
  };
};

export const WALLETKEY = () => {
  return {
    head: [
      "id",
      " amount",
      "type",
      "state",
      " creation date",
      " currency",
      "service",
    ],
    body: [
      "id",
      " amount",
      "type",
      "state",
      " creation date",
      " currency",
      "service",
    ],
  };
};
