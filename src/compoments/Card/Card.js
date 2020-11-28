import React from "react";
// import "./card.css";

const CardMod = ({ img, title, text }) => {
    return (
        <>

<div class="col-md-4">

            <div class="card card-blog">
                <div class="card-image">
                    <img class="img" src={img} alt="hello" />
                    <div class="card-caption"> {title} </div>

                    <div class="ripple-cont"></div>
                </div>
                <div class="table">
                    <h6 class="category text-info">uncategory</h6>
                    <p class="card-description"> {text.substr(0,150)+"..."} </p>
                </div>


                <div class="ftr text-center"> <a href="#" class="btn btn-white btn-round">Read More</a> </div>
            </div>
            </div>

        </>


    )
}
export default CardMod;