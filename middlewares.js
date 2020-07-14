import multer from "multer";
import routes from "./routes";

const multerVideo = multer({ dest : "videos/" });
// Local variable set. If you want import that just use 'variable name'.(ex : siteName, routes, user.isAuthenthicated etc.)
export const localsMiddleware = (req, res, next) => {
  //res.locals 함수를 이용하면 렌더링할 때 중복되는 값들을 한번에 처리할 수 있다.
  res.locals.siteName = 'WeTube';
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated : true,
    id : 1,
  };
  next();
};

export const uploadVideo = multerVideo.single("videoFile");