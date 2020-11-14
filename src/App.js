import React, {Component} from 'react';
import ScrollBox from './ScrollBox.js';

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => this.scrollBox=ref}/>
        <button onClick={() => this.scrollBox.scorllToBottom()}>맨밑으로</button>
      </div>
    );
  }
}

export default App;
