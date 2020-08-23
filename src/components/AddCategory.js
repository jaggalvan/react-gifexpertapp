

import React , {useState} from 'react'

import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {


    const [InputValue, setInputValue] = useState('');

    const HandleInputChange =(e) => {
        setInputValue( e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();


        if ( InputValue.trim().length > 2) {
            setCategories(categories => [InputValue, ...categories,InputValue]);
            setInputValue('');
        }

        //console.log('Submit hecho');
     
    }

  
    return (
        <form onSubmit={ handleSubmit }>
            <input
                type = "text"
                value= {InputValue}
                onChange= { HandleInputChange}
            />
        </form>
    )
}


AddCategory.proTypes ={
    setCategories: PropTypes.func.isRequired
}