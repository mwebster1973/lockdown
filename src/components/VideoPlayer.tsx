import * as React from "react";
import { YouChoose } from "./YouChoose";

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
  path?: string;
  next?: number;
  question?: Question;
  routes? : Array<Route>, 
  attribute? : string;
  end? : boolean;
}

export interface Route {
  item?: string;
  next?: number;
}

export interface Question {
  text: string;
  description: string;
  options: Array<Option>
}

export interface Option {
  text: string;
  item?: string;
  next: number, 
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
      let nextVideo = this.findVideoById(this.props.videos, this.state.currentVideo.next);
      if (nextVideo) {
        if (nextVideo.routes) {
          nextVideo.routes.forEach( (route:Route) =>{
              if (route.item && route.next && changeState.items.includes(route.item)){
                nextVideo = this.findVideoById(this.props.videos, route.next);
              }
          });
        }
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
    let nextVideo = this.findVideoById(this.props.videos, option.next);
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
      changeState.decisions.splice(changeState.decisions.indexOf(option), 9e9);
      if (nextVideo.attribute){
        // wipes out previous item
        changeState.items = new Array<string>();
      }
    }
    this.setState(changeState);
  }

  render() {
   var p = "/lockdown/videos/" + this.state.currentVideo.path + ".mp4";

    var questionBar: JSX.Element = <br />;

    if (!this.state.videoPlaying) {
      if (this.state.currentVideo.question){
        questionBar = <YouChoose question={this.state.currentVideo.question} onSelection={this.selectVideo} />
      } else if (this.state.currentVideo.end){
        questionBar = <EndModal title="You did it" header="You survived lockdown" description="If you want to start from a previous decision, you can:" decisions={this.state.decisions} onSelection={this.restartVideo} />  
      } else{
        questionBar = <EndModal title="Oh No." header="You didn't survive lockdown" description="Maybe you would like to try again, and revise a decision you made." decisions={this.state.decisions} onSelection={this.restartVideo} />
      }
    }
    return (
      <Container className="p-3">
        <div className="embed-responsive embed-responsive-16by9">
          <video className="embed-responsive-item" key={p} width="1100" height="650" onEnded={this.clipEnd.bind(this)}
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