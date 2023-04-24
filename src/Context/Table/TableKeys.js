export const LENDERKEY = () => {
  return {
    head: [
      " ",
      "Name",
      "Amount lent",
      "Interest Rate",
      "Interest Amount",
    ],
    body: [
      "Name",
      "Amount lent",
      "Interest Rate",
      "Interest Amount",
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
    head: ["id", "service"],
    body: ["id", "service"],
  };
};
