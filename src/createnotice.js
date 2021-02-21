import React from 'react';
import './App.css'


function CreateNotice ({words,author,onChange,onCreate}) {
    return(
        <div className='clearfix'>
            <input 
                className='wordsput' 
                type='text'
                name='words'
                placeholder='글작성하기'
                onChange={onChange}
                value={words}
            />
            <input 
                className='authorput'
                type='text'
                name='author' 
                placeholder='작성자 이름'
                onChange={onChange}
                value={author}
            />
            <button className='addbtn' type='submit' onClick={()=>onCreate()}>작성하기</button>
        </div>
    )
}

export default React.memo(CreateNotice);