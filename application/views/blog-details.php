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
                    <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10">
                        <ul>
                            <li><a href="<?=base_url()?>">Inicio</a></li>
                            <li>Blog</li>                            
                        </ul>                                                                        
                    </div>
                    <div class="col-lg-2 col-md-2  col-sm-2 col-xs-2">
                        Bienvenido: <?php 
                        $nombre=$this->session->userdata('nombre');
                        if(isset($nombre))
                            echo $this->session->userdata('nombre')?>
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
                            
                            <h2>Comentarios</h2>
                            <div class="blog-comments">
                                <?php if (isset($comentarios)) foreach ($comentarios as $c):?>
                                    <div class="row mb-30 single-comment">
                                        <div class="col-lg-2 col-md-3 col-sm-3 col-xs-3">
                                            <img src="<?=base_url('fotos_perfil/').$this->cliente->getClientById($c->id_cliente)->foto?>" alt="" />
                                        </div>
                                        <div class="col-lg-10 col-md-9 col-sm-9 col-xs-9">
                                            <h4><?=$this->cliente->getClientById($c->id_cliente)->nombres;?></h4>                                                                                    
                                            <p><?=$c->texto?></p>
                                            <br>
                                            <p class="pull-right"><?=date('d/m/Y H:i:s',strtotime($c->fecha))?></p>
                                        </div>
                                    </div>                                    
                                <?php endforeach;?>
                                
                            </div>
                            <?php if($this->session->userdata('logged_in_client')):?>
                                <div class="comment-form">
                                    <h2>Dejar un comentario</h2>
                                    <form action="<?=base_url('add_comment')?>" method="post">
                                        <input type="hidden" value="<?=$post->id?>" name="id_post">                                                                                
                                        <input type="hidden" value="<?=$this->session->userdata('id')?>" name="id_cliente">                                                                                
                                        <textarea name="texto" rows="6" placeholder="Comentario"></textarea>
                                        <button type="submit" class="bttn-mid btn-fill">Enviar</button>
                                    </form>
                                </div>
                            <?php else:?>
                            Para dejar un comentario, <a href="<?=base_url('registro')?>">Regístrate</a> o <a href="<?=base_url('login')?>">Inicia Sesión</a>
                            <?php endif;?>
                            
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