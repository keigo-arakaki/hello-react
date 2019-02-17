import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SelectGender, { GenderType } from './selectGender';
import Face from './face';

interface Props {
}

interface State{
  count: number,
  name: string,
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      count: 0,
      name:''
    }
    this.countUp = this.countUp.bind(this);
  }

  countUp() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  countDown() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  render() {
    const name = this.state.name;
    return (
      <div className="App">
        <header className="App-header">
          <img
            src={logo}
            className="App-logo"
            alt="logo"
            width="200"
            height="100"
            onClick={() => this.countUp()}
            //countUpきかないのなんで
          />
          <h2>Counter</h2>
          <p>
            {this.state.count}
          </p>
          <div className="select-button">
            <button className="select-button__item"
            onClick={() => this.countUp()}
            >
            +1
            </button>
            <button className="select-button__item"
            onClick={() => this.countDown()}
            >
            -1
            </button>
          </div>
          <SelectGender
            face={(gender: GenderType) =>(
              <React.Fragment>
                <Face gender={gender} />
              </React.Fragment>
            )}
          />
          <h2>今日の気分をどうぞ！</h2>
          <input
            type="text"
            value={name}
            onChange={ event => {
              this.setState({
                name:event.target.value
              })
            }}
            placeholder="挨拶は大事(text入力)"
          />
          <h2>{name}</h2>
        </header>
      </div>
    );
  }
}

export default App;
