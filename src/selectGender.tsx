import React, { Component } from 'react';

export enum GenderType{
  Male,
  Female,
}

interface Props{
  face: (gender: GenderType) => JSX.Element
}

interface State{
  gender: GenderType,
}


class SelectGender extends Component<Props,State>{
  constructor(props: Props) {
    super(props);
    this.state = {
      gender: GenderType.Male,
    }
    this.changeGender = this.changeGender.bind(this);
  }

  changeGender(gender: GenderType){
    this.setState({ gender });
  }


  render() {
    return(
      <React.Fragment>
        <button
          onClick={() => this.changeGender(GenderType.Male)}
        >
          Male
        </button>
        <button
          onClick={() => this.changeGender(GenderType.Female)}
        >
          Female
        </button>
        {this.props.face(this.state.gender)}
      </React.Fragment>
    )
  }
}

export default SelectGender;