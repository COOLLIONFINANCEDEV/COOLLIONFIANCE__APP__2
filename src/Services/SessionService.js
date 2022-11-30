import { ADMIN, BORROWER, LENDER } from "../Context/Roles/roles";
import ApiService from "./ApiService";
import ServiceRoutes from "./ServiceRoutes";

const SessionService = {
  async Login(email, password) {
    localStorage.setItem("accessToken", "test");
    if (email === "lender@gmail.com")
      localStorage.setItem(
        "user",
        JSON.stringify({ name: "sylla", lastName: "ibrahim", role: LENDER() })
      );
    else if (email === "borrower@gmail.com")
      localStorage.setItem(
        "user",
        JSON.stringify({ name: "sylla", lastName: "ibrahim", role: BORROWER() })
      );
    else if (email === "admin@gmail.com")
      localStorage.setItem(
        "user",
        JSON.stringify({ name: "sylla", lastName: "ibrahim", role: ADMIN() })
      );
  },
  async Register(values) {
   return  ApiService(ServiceRoutes.auth.registration, "post", "",values)
  },
  async Logout() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
  },
};

export default SessionService;
