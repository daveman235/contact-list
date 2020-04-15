import { Link } from 'react-router-dom';
import React, { Component } from 'react';


// Function that takes in information from user via a form and passes information back to state object
class EditContact extends Component {
    constructor(props) {
        super(props)

        this.state = {

            name: '',
            email: '',
            imageUrl: '',
            number: ''
        }
    }


    render() {
        return (
            <div className="container new-contact">
                <form>
                    <label htmlFor="inputName">Name:</label><br></br>
                    <input onChange={(e) => { this.setState({ name: e.target.value }) }} value={this.state.name} type="text" id="name" minLength="8" maxLength="15" size="30" placeholder="" required />
                    <br></br>
                    <label htmlFor="inputEmail">E-mail:</label><br></br>
                    <input onChange={(e) => { this.setState({ email: e.target.value }) }} value={this.state.email} type="email" id="email" pattern="@globex.com" size="30" placeholder="" required />
                    <br></br>
                    <label htmlFor="inputUrl">Image URL:</label><br></br>
                    <input onChange={(e) => { this.setState({ imageUrl: e.target.value }) }} value={this.state.imageUrl} type="url" name="url" id="url" placeholder="https://" pattern="https://.*" size="30" />
                    <br></br>
                    <label htmlFor="inputPhone">Phone:</label><br></br>
                    <input onChange={(e) => { this.setState({ number: e.target.value }) }} value={this.state.number} type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="ex. 555-555-5555" size="30" required />
                    <br></br>
                    <Link to="/contacts">
                        <button onClick={() => this.props.addContact(this.state)} type="button" className="btn btn-secondary submitContact">
                            Update Contact
                        </ button>
                    </Link>
                </form>
            </div>


        )
    }
}

export default EditContact
