import routes from "../routes";

// Join Page
export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};

// Join user information
export const postJoin = (req, res) => {
  const {
    body: { name, email, password, password2 },
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    // To do : Register User
    // To do : Log user In
    res.redirect(routes.home);
  }
};

export const getLogin = (req, res) => res.render("login", { pageTitle: "Log In" });
export const postLogin = (req, res) => {
  res.redirect(routes.home);
};

export const logout = (req, res) => {
  // To do : process log out
  res.redirect(routes.home);
};

export const userDetail = (req, res) => res.render("userDetail", { pageTitle: "User Detail" });
export const editProfile = (req, res) => res.render("editProfile", { pageTitle: "Edit profile" });
export const changePassword = (req, res) => res.render("changePassword", { pageTitle: "Change Password" });
