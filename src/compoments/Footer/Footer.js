import React from "react";
import "../Post/css/style.css";

const Footer = () => {
    return (

        <>
        <footer class="footer-section bg-grey">


    <div class="container">
        <div class="row">
            <div class="col-lg-12 text-center">
                <div class="mb-4">
                    <h2 class="footer-logo">Clock Course.</h2>
                </div>
                <ul class="list-inline footer-socials">
                    <li class="list-inline-item"><a href="#" ><i class="ti-facebook mr-2"></i>Facebook</a></li>
                    <li class="list-inline-item"><a href="#" ><i class="ti-twitter mr-2"></i>Twitter</a></li>
                    <li class="list-inline-item"><a href="#" ><i class="ti-linkedin mr-2"></i>Linkedin</a></li> 
                    <li class="list-inline-item"><a href="#" ><i class="ti-pinterest mr-2"></i>Pinterest</a></li>
                    <li class="list-inline-item"><a href="#" ><i class="ti-github mr-2"></i>Github</a></li>
                    <li class="list-inline-item"><a href="#" ><i class="ti-instagram mr-2"></i>Instrgram</a></li>
                    <li class="list-inline-item"><a href="#" ><i class="ti-rss mr-2"></i>rss</a></li>
                </ul>
            </div>
       
            <div class="col-md-12 text-center">
               <p class="copyright">© Copyright 2019 - Revolve. All Rights Reserved.</p>
            </div>
        </div>
    </div>
</footer>
        </>

    )
}

export default Footer;