import React, {Component} from 'react';

class SignUp extends Component {

    state = {
        id: '',
        name: '',
        birthday: '',
        gender: '',
        phoneNum: ''
    }

    render() {
        return (
            <div>
                <h1>회원가입</h1>
                <input
                    type="text"
                    name="id"
                    placeholder="아이디"
                    value={this.state.id}
                    onChange={
                        (e)=>{
                            this.setState({
                                id: e.target.value
                            })
                        }
                    }
                /><br/>
                <input
                    type="password"
                    name="passwd1"
                    placeholder="비밀번호"
                /><br/>
                <input
                    type="password"
                    name="passwd2"
                    placeholder="비밀번호 재확인"
                /><br/>
                <input
                    type="text"
                    name="name"
                    placeholder="이름"
                    value={this.state.name}
                    onChange={
                        (e)=>{
                            this.setState({
                                name: e.target.value
                            })
                        }
                    }
                /><br/>
                <input
                    type="date"
                    name="date"
                    value={this.state.birthday}
                    onChange={
                        (e)=>{
                            this.setState({
                                birthday: e.target.value
                            })
                        }
                    }
                /><br/>
                <select name="gender" value={this.state.gender} onChange={
                        (e)=>{
                            this.setState({
                                gender: e.target.value
                            })
                        }
                    }>
                    <option value="여">여</option>
                    <option value="남">남</option>
                </select><br/>
                <input
                    type="tel"
                    name="phoneNum"
                    placeholder="휴대전화"
                    value={this.state.phoneNum}
                    onChange={
                        (e)=>{
                            this.setState({
                                phoneNum: e.target.value
                            })
                        }
                    }
                /><br/>

                <button onClick={
                    () => {
                        alert(
                            "아이디: " + this.state.id +'\n'
                            + "이름: " + this.state.name +'\n'
                            + "생년월일: " + this.state.birthday +'\n'
                            + "성별: " + this.state.gender +'\n'
                            + "전화번호: " + this.state.phoneNum +'\n'
                        
                        ); // alert 창에 메세지 띄우기
                        this.setState({
                            id:'',
                            passwd1:'',
                            passwd2:'',
                            name:'',
                            birthday:'',
                            phoneNum:'',
                        }); // comment 값 공백 채우기
                    }
                }>가입하기</button>
            </div>
        );
    }
}

export default SignUp;