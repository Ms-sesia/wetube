import express from "express";
import routes from "../routes";

const videoRouter = express.Router();

videoRouter.get(routes.upload, (req, res) => res.send("Video Upload"));
videoRouter.get(routes.videos, (req, res) => res.send("Videos"));
videoRouter.get(routes.videoDetail, (req, res) => res.send("Video Detail"));
videoRouter.get(routes.deleteVideo, (req, res) => res.send("Video Delete"));
videoRouter.get(routes.editVideo, (req, res) => res.send("Video Edit"));

export default videoRouter;