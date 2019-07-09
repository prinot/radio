<!--Custom Hero Area-->
<section class="custom-banner">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="custom-banner-content">
                            <h2>Detalles del Blog</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section><!--/Custom Hero Area-->

        <!--Breadcrumb-->
        <section class="breadcrumb-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7 col-md-12 col-sm-12 col-xs-12">
                        <ul>
                            <li><a href="<?=base_url()?>">Inicio</a></li>
                            <li>Detalles del Blog</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section><!--/Breadcrumb-->

        <!--Blog Details Area-->
        <section class="blog-details-area section-padding">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-7 wow fadeInLeft" data-wow-delay="0.3s">
                        <div class="blog-details-content">
                            <img src="<?=base_url('uploads/').$post->portada?>" alt="" />
                            <div class="blog-meta">
                                <p><i class="fa fa-user"></i><?=$this->usuario->getAuthorNameById($post->redactor)?></p>
                            </div>
                            <h2 class="cl-black">The Dangerous Truth About Clinton</h2>
                            
                            <p><?=$post->contenido;?></p>
                            <div class="blog-tag-share mt-50">
                                <div class="blog-tag">
                                    <?php if(isset($tags)):?><p><i class="fa fa-tags"></i> <?php foreach ($tags as $tag):?><a href="<?=base_url('blog/tags/').$tag->id?>"><?=$tag->tag?></a>,<?php endforeach;?> </p><?php endif;?>
                                </div>
                                <!--<div class="blog-share">
                                    <i class="fa fa-share"></i><a href="#"><i class="fa fa-facebook-f"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a><a href="#"><i class="fa fa-instagram"></i></a>
                                </div>-->
                            </div>
                            
                            <h2>Comments</h2>
                            <div class="blog-comments">
                                <div class="row mb-30 single-comment">
                                    <div class="col-lg-2 col-md-3 col-sm-3 col-xs-3">
                                        <img src="<?=base_url('assets/images/commenter1.png')?>" alt="" />
                                    </div>
                                    <div class="col-lg-10 col-md-9 col-sm-9 col-xs-9">
                                        <h4>Andrew Karl</h4>
                                        <a href="#" class="comment-reply">Replay</a>
                                        <p>Or kind rest bred with am shed then. In raptures building an bringing be. Elderly is detract tedious assured private so tovisited. Do travelling companions contrasted it.</p>
                                    </div>
                                </div>
                                <div class="row mb-30 single-comment">
                                    <div class="col-lg-2 col-md-3 col-sm-3 col-xs-3">
                                        <img src="<?=base_url('assets/images/commenter2.png')?>" alt="" />
                                    </div>
                                    <div class="col-lg-10 col-md-9 col-sm-9 col-xs-9">
                                        <h4>Kevin Dove</h4>
                                        <a href="#" class="comment-reply">Replay</a>
                                        <p>Or kind rest bred with am shed then. In raptures building an bringing be. Elderly is detract tedious assured private so tovisited. Do travelling companions contrasted it.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="comment-form">
                                <h2>Leave a reply</h2>
                                <form action="#">
                                    <div class="row">
                                        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <input type="text" placeholder="Name*" required />
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <input type="email" placeholder="Email*" required />
                                        </div>
                                    </div>
                                    <input type="text" placeholder="Website*" required />
                                    <textarea name="message" rows="6" placeholder="Message"></textarea>
                                    <button type="submit" class="bttn-mid btn-fill">Comment</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-5 wow fadeInRight" data-wow-delay="0.3s">
                        <div class="page-sidebar">
                        <!--    <div class="single-sidebar-block sidebar-search">
                                <form action="#">
                                    <input type="email" placeholder="Search" required >
                                    <button type="submit"><i class="fa fa-search"></i></button>
                                </form>
                            </div>-->
                            <div class="single-sidebar-block category-list">
                                <h3>Categorías</h3>
                                <ul class="cat-anchors">
                                    <?php foreach($post_per_category as $pc):?>                                    
                                        <?php if($pc->total>0): ?>
                                            <li><a href="<?=base_url('blog/category/').$pc->id?>"><?=$pc->nombre?> <span>(<?=$pc->total?>)</span></a></li>
                                        <?php endif;?>
                                    <?php endforeach;?>
                                </ul>
                            </div>
                            <div class="single-sidebar-block most-viewed-post">
                                <h3>Posts más recientes</h3>
                                <div class="viewed-post">                                    
                                    <div class="row">
                                        <?php foreach ($posts as $post):?>
                                            <div class="col-6">
                                                <a href="<?=base_url('blog-details/').$post->id?>" class="single-most-viewed-post mb-30">
                                                    <img src="<?=base_url('uploads/').$post->portada?>" alt="">
                                                    <h4><?=$post->titulo?></h4>
                                                </a>
                                            </div>
                                        <?php endforeach;?>                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="single-sidebar-block instagram-feed">
                                <h3>Instagram</h3>
                                <div class="viewed-post">
                                    <div class="row">
                                        <div class="col-4">
                                            <a href="#" class="single-most-viewed-post">
                                                <img src="<?=base_url('assets/images/insta-feed1.jpg')?>" alt="">
                                            </a>
                                        </div>
                                        <div class="col-4">
                                            <a href="#" class="single-most-viewed-post">
                                                <img src="<?=base_url('assets/images/insta-feed2.jpg')?>" alt="">
                                            </a>
                                        </div>
                                        <div class="col-4">
                                            <a href="#" class="single-most-viewed-post">
                                                <img src="<?=base_url('assets/images/insta-feed3.jpg')?>" alt="">
                                            </a>
                                        </div>
                                        <div class="col-4">
                                            <a href="#" class="single-most-viewed-post">
                                                <img src="<?=base_url('assets/images/insta-feed4.jpg')?>" alt="">
                                            </a>
                                        </div>
                                        <div class="col-4">
                                            <a href="#" class="single-most-viewed-post">
                                                <img src="<?=base_url('assets/images/insta-feed5.jpg')?>" alt="">
                                            </a>
                                        </div>
                                        <div class="col-4">
                                            <a href="#" class="single-most-viewed-post">
                                                <img src="<?=base_url('assets/images/insta-feed6.jpg')?>" alt="">
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="single-sidebar-block popular-tags">
                                <h3>Etiquetas más populares</h3>
                                <div class="sidebar-tags">
                                    <?php foreach($popular_tags as $pt):?>
                                        <a href="<?=base_url('blog/tags/').$pt->id?>"><?=$pt->tag?></a>
                                    <?php endforeach;?>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section><!--/Blog Details Area-->