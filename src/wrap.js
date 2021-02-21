import React, { useCallback, useReducer, useRef } from "react";
import Header from './header.js';
import NoticeList from "./noticelist.js";
import CreateNotice from "./createnotice";
import './App.css';

const itialState = {
    noticeWord :{
        words: '',
        author: '',
    },
    notices : [
        {
            id: 1,
            words: '안녕하세요1',
            author: '김형댜',
            on : false,

        },
        {
            id: 2,
            words: '안녕하세요2',
            author: '김형댜',
            on : false,

        },
        {
            id: 3,
            words: '안녕하세요3',
            author: '김형댜',
            on : false,

        },
    ]
}
function reducer(state , action){
    switch(action.type){
        case 'Change_notice':
            return{
                ...state,
                noticeWord:{
                    ...state.noticeWord,
                    [action.name]:action.value,
                }
            }
        case 'create_notice':
            return{
                noticeWord: itialState.noticeWord,
                notices: state.notices.concat(action.notice)
            }
        case 'onremove_notice':
            return{
                ...state,
                notices: state.notices.filter(notice => notice.id !== action.id)
            }
        case 'ontoggle_notice':
            return{
                ...state,
                notices: state.notices.map(notice=>
                    notice.id === action.id
                        ? {...notice, on: !notice.on}
                        : notice
                )
            }
        case 'all_remove':
            return{
                ...state,
                notices: state.notices.filter(notice => notice.on !== true)
            }
        case 'all_checik':
            return{
                ...state,
                notices: state.notices.map(notice=>
                    notice.id ? {...notice, on: !notice.on}
                    : notice
                )
            }        
        default:
            throw new Error('에러났다');
    }
}

function Wrap({childprops}){
    const [state ,dispatch] = useReducer(reducer,itialState);
    const nextId = useRef(4);
    const {notices} = state;
    const {words , author} = state.noticeWord;

    const onChange = useCallback( e =>{
        const {name,value} = e.target;
        dispatch({
            type: 'Change_notice',
            name,
            value,
        });
    },[]);

    const onCreate = useCallback(()=>{
        dispatch({
            type: 'create_notice',
            notice:{
                id: nextId.current,
                words,
                author,
                on: false,
            }
        })
    },[words,author]);
    const onRemove = useCallback(id=>{
        dispatch({
            type: 'onremove_notice',
            id
        });
    },[]);

    const onToggle = useCallback(id=>{
        dispatch({
            type: 'ontoggle_notice',
            id
        })
    },[]);
    const allRemove = useCallback(id=>{
        dispatch({
            type: 'all_remove',
            id
        })
    },[])
    const allchecik = useCallback(id=>{
        dispatch({
            type: 'all_checik',
            id
        })
    },[]);
    return(
        <div className='wrap'>
            <Header />
            <NoticeList 
                notices={notices}
                onRemove={onRemove}
                onToggle={onToggle}
                allRemove={allRemove}
                allchecik={allchecik}
            />
            <CreateNotice
                words={words}
                author={author}
                onChange={onChange}
                onCreate={onCreate}
            />
        </div>
    )
}


export default Wrap;