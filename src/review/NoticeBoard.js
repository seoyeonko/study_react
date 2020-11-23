import React, {useState} from 'react';

const NoticeBoard= () => {

    const [boards, setBoard] = useState([
        {id:1, title:'첫번째 글', contents: 'First React Study'},
        {id:2, title:'두번째 글', contents: 'Second React Study'},
    ]);
    const [inputTitle, setInputTitle] = useState('');
    const [inputContent, setInputContent] = useState('');
    const [nextId, setNextId] = useState(3);

    
    const onChange1 = e => setInputTitle(e.target.value);
    const onChange2 = e => setInputContent(e.target.value);
    const onClick = () => {
        const nextBoards = boards.concat({
            id: nextId,
            title: inputTitle,
            contents: inputContent
        });
        setNextId(nextId+1);
        setBoard(nextBoards);
        setInputTitle('');
        setInputContent('');
    }
    const onRemove = id => {
        const nextBoards = boards.filter(
            board => board.id !== id
        );
        setBoard(nextBoards);
    }
    

    const boardList = boards.map(board => 
        <div key={board.id} onDoubleClick={()=>onRemove(board.id)}>
            <h3>글 제목 : {board.title}</h3>
            <p>글 내용: {board.contents}</p>
        </div>
    )


    return (
        <div>
            <h1>게시판</h1>
            <input 
                type="text"
                name="title"
                placeholder="글 제목"
                value={inputTitle}
                onChange={onChange1}
            /> <br />
            <textarea 
                name="content"
                rows="5"
                cols="20"
                placeholder="내용"
                value={inputContent}
                onChange={onChange2}
            /> <br />
            <input type="file" name="file"/> <br/>
            <button onClick={onClick}>작성하기</button> <br/>
            {boardList} <br/>
        </div>
    )

}

export default NoticeBoard;