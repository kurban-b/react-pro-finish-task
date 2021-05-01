import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addComment} from "../redux/actionss";

function Form(props) {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [text, setText] = useState('');
    const loadingComment = useSelector(state => state.publication.loadingComment)
    const [checkInput, setCheckInput] = useState('')

    function handleName(e) {
        setName(e.target.value)
    }
    function handleComment(e) {
        setText(e.target.value)
    }
    function handleAddComment(name, text, id) {
        setCheckInput('')
        if (text === '' || name === '') {
            setCheckInput(
                <div className='inputsCheck'> *заполните все поля </div>)
        } else {
            setText('');
            setName('');
            dispatch(addComment(name, text, id));
        }
    }
    return (
        <div className="card_form">
            <input
                value={name}
                onChange={handleName}
                type="name"
                placeholder='Ваше имя'/>
            <input
                value={text}
                onChange={handleComment}
                type="text"
                placeholder='Ваш комментарий'/>
            <button disabled={loadingComment} onClick={()=>{
                    handleAddComment(name, text, props.id)
                }
            }>Оставить комментарий</button>
            {checkInput}
        </div>
    );
}

export default Form;