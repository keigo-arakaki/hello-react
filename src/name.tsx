import React, { Component } from 'react';

// なぜかinputが聞かない
interface Props{
}

interface State{
  name: string,
}


class Name extends Component<Props,State>{
  constructor(props: Props) {
    super(props);
    this.state = {
      name:''
    }
  }

  render() {
    return(
      <React.Fragment>
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
      </React.Fragment>
    )
  }
}

export default Name;