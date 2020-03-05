import _ from 'lodash'
import { Link, Redirect } from 'react-router-dom';
import React, { Component, } from 'react';



class IndividualContact extends Component {


    //When the user clicks on one of the contacts on the contactlist, below will provide the contacts information that 
    //was previously taken in the form 
    render() {
        const contact = _.find(this.props.contacts, { id: parseInt(this.props.props.match.params.id, 10) });

        if (!contact) {
            return <Redirect to='/contacts' />
        }

        return (
            <div>
                <h1>
                    {contact.name}
                </h1>
                <hr />
                <Link to="/contacts">Back</Link>
                <hr />
                <img height="300" width="400" alt="" src={contact.imageUrl}></img>
                <h3>Email:{contact.email}</h3>
                <h3>Phone:{contact.number}</h3>

            </div>
        );

    }


};
export default IndividualContact