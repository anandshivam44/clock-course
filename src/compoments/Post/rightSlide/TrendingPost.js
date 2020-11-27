import React from "react";

const TrendingPost = () => {
    return (

    <>
    <div class="sidebar-widget mb-5 ">
		<h4 class="text-center widget-title">Trending Posts</h4>

		<div class="sidebar-post-item-big">
			<a href="blog-single.html"><img src="images/news/img-1.jpg" alt="" class="img-fluid" /></a>
			<div class="mt-3 media-body">
            	<span class="text-muted letter-spacing text-uppercase font-sm">September 10, 2019</span>
				<h4><a href="blog-single.html">Meeting With Clarissa, Founder Of Purple Conversation App</a></h4>
			</div>
		</div>

        <div class="media border-bottom py-3 sidebar-post-item">
            <a href="#"><img class="mr-4" src="images/news/thumb-1.jpg" alt="" /></a>
            <div class="media-body">
            	<span class="text-muted letter-spacing text-uppercase font-sm">September 10, 2019</span>
                <h4><a href="blog-single.html">Thoughtful living in los Angeles</a></h4>
            </div>
        </div>

        <div class="media py-3 sidebar-post-item">
            <a href="#"><img class="mr-4" src="images/news/thumb-2.jpg" alt="" /></a>
           <div class="media-body">
           		<span class="text-muted letter-spacing text-uppercase font-sm">September 10, 2019</span>
                <h4><a href="blog-single.html">Vivamus molestie gravida turpis.</a></h4>
            </div>
        </div>
	</div>
    </>
    )
}

export default TrendingPost;