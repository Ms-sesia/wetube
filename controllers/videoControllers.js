import routes from "../routes"
import Video from "../models/Video";

export const home = async(req, res) => {
  try{
    const videos = await Video.find({});  // DB에 있는 video들을 전부 가지고 온다.
    res.render("home", { pageTitle: "Home", videos});
  } catch(error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", videos : [] });
  }
};

export const search = (req, res) => {
  const {
    // searchingBy = req.query.term \req의 query속성의 term속성값을 searchingBy변수에 지정한다는 의미.
    query: {term: searchingBy}    
  } = req;
  res.render("search", { pageTitle: "Search", searchingBy, videos});
};

export const getUpload = (req, res) => res.render("upload", { pageTitle: "Upload"});

export const postUpload = async(req, res) => {
  const {
    body : { title, description },
    file : { path },
  } = req;
  console.log(path);
  const newVideo = await Video.create({
    fileUrl : path,
    title,
    description
  });
  console.log(newVideo);
  res.redirect(routes.videoDetail(newVideo.id));
};


export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle: "Video detail"});
export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle: "Delete Video"});
export const editVideo = (req, res) => res.render("editVideo", { pageTitle: "Edit Video"});