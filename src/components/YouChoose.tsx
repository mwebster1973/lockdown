import { Question } from "./VideoPlayer";
import { Option } from "./VideoPlayer";
import { Choice } from "./Choice";
import React from "react";
import Modal from 'react-bootstrap/Modal';

export interface YouChooseProps {
  question: Question;
  onSelection: (option: Option) => void;
}

export class YouChoose extends React.Component<YouChooseProps, {}> {
  render() {
    var choices: Array<JSX.Element> = this.props.question.options.map(
      (currentOption): JSX.Element => {
        return <Choice key={currentOption.text} option={currentOption} onSelection={this.props.onSelection} />
      });

    return (
      <Modal
        show
        fade="true"
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          You Decide
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>{this.props.question.text}</h4>
          <p>{this.props.question.description}</p>
        </Modal.Body>
        <Modal.Footer>
          {choices}
        </Modal.Footer>
      </Modal>
    )
  }
}