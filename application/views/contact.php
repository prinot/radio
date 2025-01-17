<!--Custom Hero Area-->
<section class="custom-banner">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="custom-banner-content">
                            <h2>Contáctanos</h2>
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

        <!--Contact form-->
        <section class="contact-form section-padding">
            <form action="#" id="contact_form_submit">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-7 centered wow fadeInUp" data-wow-delay="0.3s">
                            <div class="section-title cl-black">
                                <h2>Contactanos</h2>
                                <p>Si tienes alguna sugerencia o quieres ser parte de nosotros no dudes en comunicarte a GMO. </p>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-lg-10 col-md-12 col-sm-12 col-xs-12 centered">
                            <div class="row">
                                <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <input type="text" placeholder="Ingresa Tu nombre*">
                                </div>
                                <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <input type="text" placeholder="Ingresa tu apellido*">
                                </div>
                                <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <input type="email" placeholder="Ingresa tu correo*">
                                </div>
                                <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <input type="text" placeholder="Deja tu numero de whatsApp">
                                </div>
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <textarea name="rj-msg" rows="4" placeholder="En que podemos ayudarte"></textarea>
                                </div>
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <button type="submit" class="bttn-mid btn-fill">Enviar mensaje</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </section><!--/Contact form-->

        
        