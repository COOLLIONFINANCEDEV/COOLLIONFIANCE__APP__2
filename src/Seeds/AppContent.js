const AppContent = {
  poppu: {
    registerSuccess:
      "A verification email has been sent to your email address. Please click on the link to activate your account. Thank you!",
    serverError: "Sorry, server problem, please try again soon",
    walletNoFound: "No wallet was detected. Please login with your wallet.",
  },
  alert: {
    ChangerMethodeDePaiment: (type) =>
      `By default, your payment method is ${type}`,
    becomeLenderWithWallet:
      "Dear user, in order to ensure the security of your account, we suggest that you add an email address to your information. This preventive measure will allow us to better assist you in the event that your wallet is lost. We remain at your disposal for any assistance.",
    successConnexion: "Successful connection",
    becomeBorrowerWithWallet:
      "Dear user, in order to ensure the security of your account, and your reliability we suggest that you enter all the information. This preventive measure will allow us to better assist you in case of loss of your wallet. We remain at your disposal for any assistance.",
    CreateProjectPaiment:
      "the payment method that will be used for your money payments will be the one you have indicated in your information.",
    ActiveProject:
      "Please note that the actions you can perform are intended to activate a project on the platform. Please check all the information about the project carefully to avoid any mistakes that could have consequences. If you want to be sure of what you are doing, check the project several times.",
  },
};

export default AppContent;
