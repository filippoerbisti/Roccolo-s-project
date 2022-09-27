import React from 'react';
import { useAuth } from '../context/AuthContext';

const NoAuthPeriod = ({ user, authorizedDates })  => {

    var start = new Date(authorizedDates.start_date.toDate()).toString();
    var end = new Date(authorizedDates.end_date.toDate()).toString();

    return (
        <div className='no-auth-period'>
            <h2>
                Salve, {user.email}
                <br />
                La informiamo che la licenza per il prodotto Mapapp
                sarà attiva 
                <br /> dal: 
                <br /> {start}
                <br /> al:
                <br /> {end}

            </h2>
        </div>
    )
}

export default NoAuthPeriod