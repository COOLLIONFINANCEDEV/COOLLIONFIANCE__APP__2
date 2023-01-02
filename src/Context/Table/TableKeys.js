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
      "Name",
      "status",
      "Amount lent",
      "Interest Rate",
      "Interest Amount",
      "the last debt to pay",
      "next payment of your debt",
      "Action",
    ],
    body: [
      "Name",
      "status",
      "Amount lent",
      "Interest Rate",
      "Interest Amount",
      "the last debt to pay",
      "next payment of your debt",
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
