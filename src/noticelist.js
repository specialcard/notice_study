import React from 'react';
import './App.css';
function Notice ({notice, onRemove ,onToggle}){
    const {words,author,id,on} = notice;

    return(
        <div className='noticeZoon'>
            <p className='wordsZoon'>
                {words}
            </p>
            <span 
                className='authorZoon'
            >
                작성자 : {author}
            </span>
            <input type='checkbox'checked={
                on ? 'checked' : false
            }
                onClick={()=>onToggle(id)}
            />
            <button className='deBtn' onClick={()=>onRemove(id)}>삭제</button>
        </div>
    )
}
function NoticeList ({notices, onRemove , onToggle ,allRemove ,allchecik}){
    return(
        <div>
            {
                notices.map(
                    notice => (<
                        Notice notice={notice}
                        key={notice.id}
                        onRemove={onRemove}
                        onToggle={onToggle}
                    />)
                )
            }
            <button className='alldeBtn' onClick={()=>allRemove()}>선택목록삭제</button>
            <button className='allch' onClick={()=>allchecik()}>전체선택</button>
        </div>
    )
}

export default React.memo(NoticeList);