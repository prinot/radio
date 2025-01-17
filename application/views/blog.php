<!--Custom Hero Area-->
<section class="custom-banner">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="custom-banner-content">
                            <h2>Blog</h2>
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

        <!--Latest News-->
        <section class="latest-news section-padding-2">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-7 col-md-12 col-sm-12 col-xs-12 centered wow fadeInUp" data-wow-delay="0.3s">
                        <div class="section-title cl-black">
                            <h2>Estamos más cerca de ti.</h2>
                            <p>Encontraras albunes, artistas y la tendencia en musica romantica en nuestro Blog GMO</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <?php foreach ($posts as $post):?>
                        <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 wow fadeInUp" data-wow-delay="0.4s">
                            <div class="single-blog">
                                <img src="<?=base_url('uploads/').$post->portada?>" alt="">
                                <div class="blog-meta-content">
                                    <div class="blog-meta">
                                        <a href="#"><i class="fa fa-user"></i><?=$this->usuario->getAuthorNameById($post->redactor)?></a>                                        
                                    </div>
                                    <h2><a href="<?=base_url('blog-details/').$post->id?>"><?=$post->titulo?></a></h2>
                                </div>
                            </div>
                        </div>
                    <?php endforeach;?>                                                            
                    <!--<div class="col-lg-12 col-md-12 wow fadeInUp" data-wow-delay="0.8s">
                        <ul class="styled-pagination mt-30 centered">
                            <li class="next"><a href="#"><span class="fa fa-angle-left"></span></a></li>
                            <li><a href="#">1</a></li>
                            <li><a href="#" class="active">2</a></li>
                            <li><a href="#">3</a></li>
                            <li class="next"><a href="#"><span class="fa fa-angle-right"></span></a></li>
                        </ul>
                    </div>-->
                </div>
            </div>
        </section><!--/Latest News-->