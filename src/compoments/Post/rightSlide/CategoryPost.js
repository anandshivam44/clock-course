import React from "react";

const CategoryPost = () => {
    return (
        <div class="sidebar-widget category mb-5">
		<h4 class="text-center widget-title">Catgeories</h4>
	 	<ul class="list-unstyled">
		  <li class="align-items-center d-flex justify-content-between">
		    <a href="#">Innovation</a>
		    <span>14</span>
		  </li>
		  <li class="align-items-center d-flex justify-content-between">
		    <a href="#">Software</a>
		    <span>2</span>
		  </li>
		  <li class="align-items-center d-flex justify-content-between">
		    <a href="#">Social</a>
		    <span>10</span>
		  </li>
		  <li class="align-items-center d-flex justify-content-between">
		    <a href="#">Trends</a>
		    <span>5</span>
		  </li>
		</ul>
	</div>
    )
}

export default CategoryPost;