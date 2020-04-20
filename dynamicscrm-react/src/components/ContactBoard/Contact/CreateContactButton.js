import React from 'react'
import {Link} from "react-router-dom";

const CreateContactButton = () => {
    return (
        <React.Fragment>
        <Link to="/addClient" className="btn btn-lg btn-info">
        Create a Contact
      </Link>
      </React.Fragment>
    )
}

export default CreateContactButton;