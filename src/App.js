import React, {Component} from 'react';
import IterationSample from './IterationSample.js';
import LifeCycleSample from './LifeCycleSample.js';
import ErrorBoundry from './ErrorBoundary.js';

// 랜덤 색상 생성
function getRandomColor() {
  return '#'+ Math.floor(Math.random()*16777215).toString(16);
}

class App extends Component {

  state = {
    color : '#000000'
  }

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤색상</button>
        <ErrorBoundry>
          <LifeCycleSample color={this.state.color}/>
        </ErrorBoundry>
      </div>
    );
  }
}

export default App;
