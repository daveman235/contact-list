import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

//This shows all contacts in a list on the main page 
class ContactList extends Component {

    handleClick = (e) => {
        this.props.removeContact(e.target.value)
    }

    handleEdit = (e) => {
        this.props.editContact(e.target.value)
        
    }



    render() {
        return (
            <div className="contact-list" >
                <ul className="list-group">
                    {this.props.contacts.map((contact) => {
                        return (
                            <Link to={`/contacts/${contact.id}`} key={contact.id} className="list-group-item">{contact.name}
                                <button className={'btn btn-secondary'} id="delete" type="button" value={contact.id} onClick={this.handleClick}>X</button>
                                <button className={'btn btn-secondary'} id="edit" value={contact.id} onClick={this.handleEdit}>Edit</button>
                            </Link>
                        )
                    })}
                </ul>
            </div>
        )
    };

}




export default ContactList


