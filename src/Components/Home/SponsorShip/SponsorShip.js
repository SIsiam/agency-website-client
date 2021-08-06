import React from 'react';
import Sponsor from '../Sponsor/Sponsor';
import image1 from "../../../images/sponsor/logo-me.jpg";
import image2 from "../../../images/sponsor/canon1.png";
import image3 from "../../../images/sponsor/sony.jpg";
import image4 from "../../../images/sponsor/panasoinic.jpg";
import image5 from "../../../images/sponsor/canon.jpg";
import image6 from "../../../images/sponsor/google.jpg";
import image7 from "../../../images/sponsor/netflix.jpg";
import image8 from "../../../images/sponsor/Apple.jpg";


const sponsors = [
    { img: image5 },
    { img: image6 },
    { img: image7 },
    { img: image8 },
    { img: image1 },
    { img: image2 },
    { img: image3 },
    { img: image4 },
];

const SponsorShip = () => {
    return (
        <div className="mt-5 mb-5 container">
            <h2 className="text-center"> <strong style={{ color: '#E40C2B' }}>Top Sponsor Ship </strong>  </h2>
            {
                sponsors.map(sponsor => <Sponsor sponsor={sponsor} />)
            }
        </div>

    );
};

export default SponsorShip;