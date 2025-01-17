<!--Custom Hero Area-->
<section class="custom-banner">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="custom-banner-content">
                            <h2>Radio Chat</h2>
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
    
        <!--Channel List-->
        <section class="channel-list section-padding">
            <div class="container">                
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 wow fadeInUp" data-wow-delay="0.4s">
                        <div class="channel-list-table table-responsive table-responsive-sm table-responsive-xs">
                            <h3 class="text-center">Radio Chat</h3>
                            <br><br>                                                            
                            <iframe src="https://www2.cbox.ws/box/?boxid=2403252&boxtag=dvlteo" width="100%" height="380" allowtransparency="yes" allow="autoplay" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" style="overflow:hidden;"></iframe>	                          
                        </div>
                    </div>
                    <div class=" offset-md-1 offset-lg-1 col-sm-12 col-lg-4 col-md-4">
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
                </div>
            </div>
        </section><!--/Channel List-->
        <section>   
            
        </section>        