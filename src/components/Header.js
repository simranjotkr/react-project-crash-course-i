import React from 'react';

export default function Header() {
    const containerHeader = {
        width: '100%',
        justifyContent: 'center'
    }
    return (
        <div className='ui menu'>
            <div className='ui container' style={containerHeader}>
                <h2>Contact Manager</h2>
            </div>
        </div>
    )
}