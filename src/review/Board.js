import React, {useState} from 'react';

const Board= () => {

    // map 함수 사용 -> 5, 6장에서 배움
    // map 함수 빼고 완성해보기!
    const [lists, setLists] = useState([
        { 
            id: 1,
            title: "첫 번째 글",
            contents: "React 첫 Study",
        },
        {
            id: 2,
            title:" 두 번째 글",
            contents: "아자아자!!",
        }
    ]);

    // const onClickWrite = () => setLists({id})

    return (
        <div>
            <h1>게시판</h1>
            <input 
                type="text"
                name="title"
                placeholder="글 제목"
            /> <br />
            <textarea 
                name="content"
                rows="5"
                cols="20"
                placeholder="내용"
            /> <br />
            <input type="file" name="file"/> <br/>
            <button>작성하기</button> <br/>
            <h4>{lists}</h4>

        </div>
    )

}

export default Board;