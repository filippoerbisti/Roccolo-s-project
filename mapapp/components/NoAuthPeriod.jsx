import React from 'react';
import { useAuth } from '../context/AuthContext';

const NoAuthPeriod = () => {
    const { user } = useAuth();
    const { authorizedDates } = useAuth();

    return (
        <div className='no-auth-period' style={{paddingTop: '150px'}}>
            <h2>
                {/* Salve, {user.email} */}
                <br />
                La informiamo che la licenza per il prodotto Mapapp
                {/* sarà attiva dal {authorizedDates.start_date.toDate()}
                al {authorizedDates.end_date.toDate()} */}

            </h2>
        </div>
    )
}

export default NoAuthPeriod