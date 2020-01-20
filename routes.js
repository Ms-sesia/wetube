// Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// users
const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

// videos
const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";  // /뒤에  :를 붙이면 express가 텍스트가 아니라 변수라는 것을 안다.
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";


const routes = {
  home : HOME,
  join : JOIN,
  login : LOGIN,
  logout : LOGOUT,
  search : SEARCH,
  users: USERS,
  userDetail : USER_DETAIL,
  editProfile : EDIT_PROFILE,
  changePassword : CHANGE_PASSWORD,
  videos : VIDEOS,
  upload : UPLOAD,
  videoDetail : VIDEO_DETAIL,
  editVideo : EDIT_VIDEO,
  deleteVideo : DELETE_VIDEO,
};

export default routes;