import { Question } from "./VideoPlayer";
import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";

export interface EndModalProps {
  decisions: Array<Question>;
  onSelection: (option: Question) => void;
}

export class EndModal extends React.Component<EndModalProps, {}> {
  constructor(props :EndModalProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(idx: number) {
    this.props.onSelection(this.props.decisions[idx]);
  }

  render() {

    var choices: Array<JSX.Element> = this.props.decisions.map(
      (currentOption, idx): JSX.Element => {
        return <Button variant="primary" size="lg" key={currentOption.text} onClick={this.handleClick.bind(this, idx)}>{currentOption.text}</Button>
      });

    return (
      <Modal
        show
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          Oh No. 
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>You didn't surivie Lockdown</h4>
          <p>Maybe one of your previous decisions was not right. Want to change your mind at a past decision?</p>
          <div className="btn-group-vertical">
             {choices}
          </div>
        </Modal.Body>
      </Modal>
    )
  }
}