import * as React from "react";
import { YouChoose } from "./YouChoose";

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import { EndModal } from "./EndModal";

export interface VideoProps {
  videos: Array<Video>;
}

interface VideoState {
  currentVideo: Video;
  videoPlaying: boolean;
  items: Array<string>;
  decisions: Array<Question>;
}

export interface Video {
  id: number;
  name: string;
  path: string;
  next?: number;
  question?: Question
}

export interface Question {
  text: string;
  description: string;
  options: Array<Option>
}

export interface Option {
  text: string;
  item?: string;
  next: number
}

export class VideoPlayer extends React.Component<VideoProps, VideoState> {

  constructor(props: VideoProps) {
    super(props);
    this.state = {
      currentVideo: this.props.videos[0],
      videoPlaying: true,
      items: new Array<string>(),
      decisions: new Array<Question>()
    }
    this.selectVideo = this.selectVideo.bind(this);
    this.restartVideo = this.restartVideo.bind(this);
  }

  findVideoById(videos: Array<Video>, idToFind: number): Video | undefined {
    return videos.find((video: Video) => { return video.id === idToFind })
  }

  findVideoByQuestion(videos: Array<Video>, question: Question): Video | undefined {
    return videos.find((video: Video) => { return video.question === question })
  }

  /**
   * When a clip ends, if there is another video then just play that video
   */
  clipEnd() {
    const changeState = { ...this.state }
    if (this.state.currentVideo.next) {
      const nextVideo = this.findVideoById(this.props.videos, this.state.currentVideo.next);
      if (nextVideo) {
        changeState.currentVideo = nextVideo;
        changeState.videoPlaying = true;
      }
    } else {
      changeState.videoPlaying = false;
    }
    this.setState(changeState);
  }

  selectVideo(option: Option) {
    const changeState = { ...this.state }
    const nextVideo = this.findVideoById(this.props.videos, option.next);
    if (nextVideo) {
      changeState.currentVideo = nextVideo;
      changeState.videoPlaying = true;
      if (option.item) {
        changeState.items.push(option.item);
      }
      if (this.state.currentVideo.question){
        changeState.decisions.push(this.state.currentVideo.question)
      }
    }
    this.setState(changeState);
  }

  restartVideo(option: Question) {
    const changeState = { ...this.state }
    const nextVideo = this.findVideoByQuestion(this.props.videos, option);
    if (nextVideo) {
      changeState.currentVideo = nextVideo;
      changeState.videoPlaying = true;
      console.log("Deleting to index",changeState.decisions.indexOf(option));
      changeState.decisions.splice(changeState.decisions.indexOf(option), 9e9);
    }
    this.setState(changeState);
  }

  render() {
    var p = "videos/" + this.state.currentVideo.path + ".mp4";

    var questionBar: JSX.Element = <br />;

    if (!this.state.videoPlaying) {
      if (this.state.currentVideo.question){
        questionBar = <YouChoose question={this.state.currentVideo.question} onSelection={this.selectVideo} />
      } else{
        questionBar = <EndModal decisions={this.state.decisions} onSelection={this.restartVideo} />
      
      }
    }
    return (
      <Container className="p-3">
        <Jumbotron>
          <h1 className="header">
            Welcome To You Vs Lockdown
          
          </h1>
        </Jumbotron>
        <div>
          <video key={p} width="1100" height="650" onEnded={this.clipEnd.bind(this)}
            autoPlay controls>
            <source src={p} type="video/mp4" />
          No video
        </video>
          {questionBar}
        </div>
      </Container>
    )
  }
}