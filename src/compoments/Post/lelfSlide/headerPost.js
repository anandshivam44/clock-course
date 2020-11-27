import React from "react";


const HeaderPost = () => {
    return (
        <>
        <div class="post-header mb-5 text-center">
        <div class="meta-cat">
            
            <a class="post-category font-extra text-color text-uppercase font-sm letter-spacing-1" href="#" >Health ,</a>
            <a class="post-category font-extra text-color text-uppercase font-sm letter-spacing-1" href="#" >lifestyle</a>
        </div>
        <h2 class="post-title mt-2">
            First Look At Self-Portrait's Autumn Collection
        </h2>

        <div class="post-meta">
            <span class="text-uppercase font-sm letter-spacing-1 mr-3">by Liam</span>
            <span class="text-uppercase font-sm letter-spacing-1">January 17,2019</span>
        </div>
        <div class="post-featured-image mt-5">
            <img src="images/fashion/bg-banner.jpg" class="img-fluid w-100" alt="featured-image" />
        </div>
    </div>

        </>
    )
}

export default HeaderPost;
