import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
    return (
        <div>
            <label>{label}</label>
            <input type="text" {...input}/>
            {touched && error}
        </div>
    )
}