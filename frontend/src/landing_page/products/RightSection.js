import React from 'react';

function RightSection(
    {
        imageURL,
        productName,
        productDescription,
        LearnMore,

    }
) {
    return (
        <div className="container mt-5">
            <div className="row">

                <div className="col-6 p-5">
                    <h1>{productName}</h1>
                    <p style={{ paddingRight: "30%" }} >{productDescription}</p>

                    <a href={LearnMore}>Learn More</a>

                </div>
                <div className="col-6">
                    <img src={imageURL} alt="" />
                </div>
            </div>
        </div>
    );
}

export default RightSection;