import React from 'react'

export default function ContactCard(props) {
    const { id, name, email } = props.contact;
    return (
        <div className='item' key={id}>
            <div className='content'>
                <div className='header'>
                    {name}
                    <i style={{ float: "right", color: "red" }} className='trash alternate outline icon'></i>
                </div>
                <div>{email}</div>
            </div>
        </div>
    )
}