import React, {Component} from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
    state = {
        password: '',
        clicked: false, 
        validated: false
    }

    // input에서 onChange 이벤트 발생; state의 password 값을 업데이트
    handleChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    // button에서 onClick 이벤트 발생; clied 값을 참으로 설정 validated 값을 검증결과로 설정
    handleButtonClick = () => {
        this.setState({
            clicked:true,
            validated: this.state.password ==='0000'
        })
        this.input.focus(); // onClick 이벤트 발생; input에 포커스 줌
    }

    render() {
        return(
            <div>
                <input 
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''} 
                    ref={(ref) => this.input=ref}
                /> 
                <button onClick={this.handleButtonClick}>검증하기</button>
            </div>
        );
    }
}

export default ValidationSample;