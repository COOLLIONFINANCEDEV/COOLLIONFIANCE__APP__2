const SessionService = {
    async Login(email, password) {
       localStorage.setItem("accessToken", "test");
       localStorage.setItem("user", { name: "sylla", lastName: "ibrahim" });

    },
    async Logout() {
        localStorage.removeItem("accessToken");
       localStorage.removeItem("user");

    },
};

export default SessionService;