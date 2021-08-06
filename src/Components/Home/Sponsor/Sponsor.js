import React from 'react';
import './Sponsor.css'

const Sponsor = ({ sponsor }) => {
    console.log(sponsor);
    return (
        <div className="my-sponsor">
            <div className="my-sponsor-img">
                <img style={{ width: '180px', height: '130px',borderRadius:'10px' }} src={sponsor.img} className="m-5 img-fluid" alt="sponsors logo" />
            </div>
        </div>
    );
};

export default Sponsor;