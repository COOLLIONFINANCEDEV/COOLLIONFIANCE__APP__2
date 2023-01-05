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
      "Name",
      "status",
      "Amount lent",
      "Interest Rate",
      "Interest Amount",
      "disbursed date",
      "Created Date",
      "loan length",
      "Action",
    ],
    body: [
      "id",
      "Name",
      "status",
      "Amount lent",
      "Interest Rate",
      "Interest Amount",
      "disbursed date",
      "Created Date",
      "loan length",
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
