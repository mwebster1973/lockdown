import React from "react";
import { Option } from "./VideoPlayer";
import Button from 'react-bootstrap/Button';


export interface ChoiceProps {
    option: Option;
    onSelection : (option : Option)=> void;
  }
  
export class Choice extends React.Component<ChoiceProps, {}> {

  constructor(props :ChoiceProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
    
    handleClick() {
      this.props.onSelection(this.props.option);
    }
    
    render () {
      return (
        <div>
            <Button key={this.props.option.text} variant="primary" size="lg" onClick={this.handleClick}>{this.props.option.text}</Button>
        </div>
      )
    }
  }