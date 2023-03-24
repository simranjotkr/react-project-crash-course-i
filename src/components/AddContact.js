import React from 'react';

export default class AppContact extends React.Component {
    state = {
        id: "",
        name: "",
        email: ""
    }

    handleAddContact = (e) => {
        e.preventDefault();
        if(this.state.name === "" || this.state.email==="") {
            alert("All fields are mandatory");
            return;
        }
        this.props.handleAddContact(this.state);
        this.setState({id:"", name:"", email:""});
    }


    render() {
        return (
            <main>
                <h2>Add Contact</h2>
                <form className='ui form'>
                    <div className='ui field'>
                        <label>Name</label>
                        <input placeholder='Name'
                            type="text"
                            id='name'
                            onChange={(e) => this.setState({name:e.target.value})}
                            value={this.state.name}
                            name="name" />
                    </div>
                    <div className='ui field'>
                        <label>Email</label>
                        <input placeholder='Email'
                            type="text"
                            id='email'
                            onChange={(e) => this.setState({email:e.target.value})}
                            value={this.state.email}
                            name="email" />
                    </div>
                    <button className='ui blue button' onClick={this.handleAddContact}>Add Contact</button>
                </form>
            </main>
        )
    }
}