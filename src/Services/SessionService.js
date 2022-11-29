import { createDispatchHook, useDispatch } from "react-redux";
import { ADMIN, BORROWER, LENDER } from "../Context/Roles/roles";
import Error from "../features/Error/Error";
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
   return  ApiService(ServiceRoutes.auth.registration, "post", "", {
      ...values,
      contact: "+22555555532342342234",
    })
  },
  async Logout() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
  },
};

export default SessionService;
