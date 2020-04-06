import React from 'react'
import {Link} from "react-router-dom";

const CreateClientButton = () => {
    return (
        <React.Fragment>
        <Link to="/addClient" className="btn btn-lg btn-info">
        Create a Client
      </Link>
      </React.Fragment>
    )
}

export default CreateClientButton;

