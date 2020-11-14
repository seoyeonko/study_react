import React, {Component} from 'react';

class RefSample extends Component {
    input = React.createRef(); // 1. 멤버 변수 선언

    // DOM에 접근하려면 this.input.current를 조회
    handleFocus = () => {
        this.input.current.focus();
    }

    // 2. 해당 멤버 변수를 달고자 하는 요소에 ref porps로 넣기
    render() {
        return(
            <div>
                <input ref={this.input}/>
            </div>
        );
    }
}

export default RefSample;