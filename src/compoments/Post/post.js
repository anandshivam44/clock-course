import React from "react";
import { Button, Card } from "react-bootstrap";
import HeaderPost from './lelfSlide/headerPost';
import BodyPost from './lelfSlide/bodyPost';
import AuthorPost from './lelfSlide/authorPost';
import RelatedPost from './lelfSlide/relatedPost';
import TrendingPost from './rightSlide/TrendingPost.js';
import CategoryPost from './rightSlide/CategoryPost.js';
import SubscribePost from './rightSlide/SubscribePost.js';
import './css/style.css';

const Post = () => {
    return (
        <>
            <section class="single-block-wrapper section-padding">
                <div class="container">
                    <div class="row">



                     {/* lelfSlide */}

                        <div class="col-lg-8 col-md-12 col-sm-12 col-xs-12">    
                            
                            <div class="single-post">   
                                <HeaderPost />
                                <BodyPost />
                            </div>
                                <AuthorPost />
                                <RelatedPost />
                        </div>
 

                    {/* rightSlide */}
                        <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                            <div class="sidebar sidebar-right">
                                <div class="sidebar-wrap mt-5 mt-lg-0">
                                    <TrendingPost />
                                    <CategoryPost />
                                    <SubscribePost />

                                   

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Post;