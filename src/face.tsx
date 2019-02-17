import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SelectGender, { GenderType } from './selectGender';
import Face from './face';

interface Props {
}

interface State{
  count: number,
  isShowText: boolean,
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      count: 0,
      isShowText: false,
    }
    this.countUp = this.countUp.bind(this);
  }

  countUp() {
    this.setState({
      count: this.state.count + 1,
      isShowText: true,
    })
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <p>{(this.state.isShowText) && 'test'}</p>
          <img
            src={logo}
            className="App-logo"
            alt="logo"
            width="200"
            height="100"
            onClick={this.countUp}
          />
          <p>
            {this.state.count}
          </p>
          <SelectGender
            face={(gender: GenderType) =>(
              <React.Fragment>
                <Face gender={gender} />
              </React.Fragment>
            )}
          />
        </header>
      </div>
    );
  }
}

export default App;
