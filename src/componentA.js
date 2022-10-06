import React, { useContext } from 'react';
import {UserContext} from './context/provider';

const ComponentA = () => {
    const user = useContext(UserContext);

    return (
        <div>
        <h1>
            the user is {user.user}
        </h1>
        <h1>
            the product is {user.product}
        </h1>
        </div>
    );
}

export default ComponentA;
