import * as React from "react";
import * as ReactDOM from "react-dom";
import { videos} from "./videos.json"
import 'bootstrap/dist/css/bootstrap.min.css';
import { VideoPlayer, Video } from "./components/VideoPlayer";

const myVideos : Array<Video> = videos;

ReactDOM.render(
  <VideoPlayer videos={myVideos}/>,
  document.getElementById("example")
);