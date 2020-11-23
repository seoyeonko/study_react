import React, {Component} from 'react';

class Login
 extends Component {

    state = {
        id:'',
    }

    render() {
        return (
            <div>
                <h1>로그인</h1>
                <input 
                    type="text"
                    name="id"
                    placeholder="아이디"
                    value={this.state.id}
                    onChange={
                        (e) => {
                            this.setState({
                                id: e.target.value
                            })
                        }
                    }
                /><br />
                <input 
                    type="password"
                    name="passwd"
                    placeholder="비밀번호"
                /><br />
                <button
                    onClick={
                        ()=>{
                            alert("id: " + this.state.id); // alert창에 메세지 띄우기
                            this.setState({
                                id:''
                            }); // comment 값 공백으로 설정
                        }
                    }
                >로그인</button><br />
                <button>회원가입</button>


            </div>
        )
    }
}

export default Login
;