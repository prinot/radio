<!--Custom Hero Area-->
<section class="custom-banner">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="custom-banner-content">
                            <h2>Acerca de nosotros</h2>
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

        <!--About Area-->
        <section class="about-area section-padding-2">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 wow fadeInLeft" data-wow-delay="0.3s">
                        <div class="about-content-img">
                            <img src="assets/images/about.jpg" alt="">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 wow fadeInRight" data-wow-delay="0.3s">
                        <div class="about-content">
                            <div class="section-title-left cl-black">
                                <h2>Acerca de GMO</h2>
                                <p>Nace de la idea de integrar comunidades por medio de la música romantica. Su lanzamiento oficial en julio del 2019. Con mucho tiempo de preparación para mostrar a los radio escuchas la mejor calidad en interacción y música. </p>
                                <p>Global Music Online es una radio de caracter personal y con fines comerciales. </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section><!--/About Area-->

