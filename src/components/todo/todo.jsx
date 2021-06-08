import React, { Component } from 'react';
import s from './todo.module.css';
import {connect} from "react-redux";
import { addNewWork, deleteNewWork } from '../../redux/todo-reducer';
import { reduxForm, Field } from 'redux-form';
import TodoWorkSpace from './todoWorkSpace';

const AddNewWorkForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field className={s.addElementInput} type="text" placeholder="dcjnsvjn" name='postWork' component={'input'}/>
            <button className={s.addElementButton}>send</button>
        </form>
    )
}

let AddNewWorkReduxForm = reduxForm({form: 'work'})(AddNewWorkForm)
const Todo = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
        props.addNewWork(formData);
    }
    let i = 0;
    let j = 0;
        return (
            <div className={s.container}>
                <div>
                    <h1>TODO APP</h1>
                    <AddNewWorkReduxForm onSubmit={onSubmit}/>
                </div>
                {props.posts.map(w => <TodoWorkSpace workText={w.postWork} p={i++} key={j++} deleteNewWork={props.deleteNewWork}/>)}
            </div>
        )
    }

    let mapStateToProps = (state) => {
        return {
            posts: state.todoPage.posts
        }
    }
    let mapDispatchToProps = (dispatch) => {
        return {
            addNewWork: (posts) => {
                dispatch(addNewWork(posts));
            },
            deleteNewWork: (id) => {
                dispatch(deleteNewWork(id));
            }
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(Todo);

