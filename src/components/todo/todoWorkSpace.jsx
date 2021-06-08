import React, { Component } from 'react';
import s from './todo.module.css';
import AyeIcon from './../images/view.png';
import ElusIcon from './../images/plus.png';
import EditIcon from './../images/edit.png';
import DeleteIcon from './../images/delete.png';



const TodoWorkSpace = (props) => {
    let i = 0;
    const deletePost = (p) => {
        props.deleteNewWork(p)
    }
        return (
            <div className={s.card}>
                <div><input className={s.checkInput} type="checkbox" onClick={(e) => console.log(e.currentTarget.value)}/></div>
                    <div className={s.inputblock}>
                        
                        <p className={s.works}>{props.workText}</p>
                    </div>
                    <div className={s.rightImgs}>
                        <img src={AyeIcon}/>
                        <img src={ElusIcon}/>
                        <img src={EditIcon}/>
                        <img onClick={() => deletePost(props.p)} src={DeleteIcon}/>
                    </div>
            </div>
        )
    }

export default TodoWorkSpace;

