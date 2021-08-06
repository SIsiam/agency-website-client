import React from 'react';
import photoHead from '../../../images/camera/pic-2.jpg';
import './Header.css';



const Header = () => {

    return (
        <main className="header-container row" style={{ height: '600px', width: '100%' }}>

            <div className="col-md-5 col-sm-6 offset-md-1 ">
                <h1 className="mt-5 p-3"> Welcome to <br /> <strong style={{ color:'#00FFFF', fontWeight: 'bold' }}> Photography Agencies </strong></h1>
                <p >
                    Photography Agencies is the world's most popular resource for photographers who want how to learn to use their flashes like a pro.
                 </p>
            </div>

            <div id="all" className="col-md-6 col-sm-6 mt-5">
                <div class="view view-second">
                    <img src={photoHead} width="500px" className="img-fluid" alt="" />
                    <div class="mask"></div>
                    <div class="content">
                        <h2>Digital Photography</h2>
                        <p>A description of some sort between these tags. I am so cool and awesomely awesome. Photography is the world's most popular resource for photographers who want how to learn</p>
                    </div>
                </div>
            </div>


        </main>
    );
};

export default Header;