const SessionService = {
  async Login(email, password) {
    localStorage.setItem("accessToken", "test");
    if (email === "lender@gmail.com")
      localStorage.setItem(
        "user",
        JSON.stringify({ name: "sylla", lastName: "ibrahim", role: "lender" })
      );
    else if (email === "borrower@gmail.com")
      localStorage.setItem(
        "user",
        JSON.stringify({ name: "sylla", lastName: "ibrahim", role: "borrower" })
      );
    else if (email === "admin@gmail.com")
      localStorage.setItem(
        "user",
        JSON.stringify({ name: "sylla", lastName: "ibrahim", role: "admin" })
      );
  },
  async Logout() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
  },
};

export default SessionService;
