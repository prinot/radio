<!--Custom Hero Area-->
<section class="custom-banner">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="custom-banner-content">
                            <h2>Inicia sesión para continuar</h2>
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
                            <li>Inicio de sesión</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section><!--/Breadcrumb-->

        <!--Contact form-->
        <section class="contact-form section-padding">
            <form action="<?=base_url('check_login')?>" id="contact_form_submit"  enctype="multipart/form-data" method="post">
                <div class="container">                    
                    <div class="row justify-content-center">                    
                        <div class="col-lg-7 centered wow fadeInUp" data-wow-delay="0.3s">
                            <div class="section-title cl-black">
                                <h2>Introduce tus datos para inciar sesión</h2>                                
                            </div>
                        </div>
                    </div>
                    
                    <div class="row justify-content-center">
                        <div class="col-lg-10 col-md-12 col-sm-12 col-xs-12 centered">
                            <div class="row">

                                <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <input type="email" placeholder="Email*" required name="email">
                                </div>    
                                <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <input type="password" placeholder="Clave*" required name="clave">
                                </div>                                                            
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <button type="submit" class="bttn-mid btn-fill">Iniciar sesión</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </section><!--/Contact form-->        
        