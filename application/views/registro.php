<!--Custom Hero Area-->
<section class="custom-banner">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="custom-banner-content">
                            <h2>Regístrate en nuestra plataforma</h2>
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
                            <li>Registro</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section><!--/Breadcrumb-->

        <!--Contact form-->
        <section class="contact-form section-padding">
            <form action="<?=base_url('check_login')?>" id="contact_form_submit" method="post">
                <div class="container">
                    
                    <div class="row justify-content-center">                    
                        <div class="col-lg-7 centered wow fadeInUp" data-wow-delay="0.3s">
                            <div class="section-title cl-black">
                                <h2>Completa el siguiente formulario</h2>
                                <p>Y forma parte de nuestra comunidad </p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="row justify-content-center">
                        <div class="col-lg-10 col-md-12 col-sm-12 col-xs-12 centered">
                            <div class="row">
                                <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <input type="text" placeholder="Nombres*" required name="nombres">
                                </div>
                                <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <input type="text" placeholder="Apellidos*" required name="apellidos">
                                </div>
                                <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <input type="text" placeholder="Pregunta de seguridad*" required name="pregunta">
                                </div>
                                <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <input type="text" placeholder="Respuesta*" required name="respuesta">
                                </div>
                                <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <input type="text" placeholder="Clave*" required name="clave">
                                </div>
                                <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <input type="text" placeholder="Confirmar clave*" required name="clave2">
                                </div>
                                <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <input type="email" placeholder="Email*" required name="email">
                                </div>    
                                <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="inputGroupFileAddon01">Subir</span>
                                        </div>
                                        <div class="custom-file">
                                            <input type="file" accept='image/*' class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" name="foto" required>
                                            <label class="custom-file-label" for="inputGroupFile01">Foto de perfil</label>
                                        </div>
                                    </div>                
                                </div>                                    
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <button type="submit" class="bttn-mid btn-fill">Enviar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </section><!--/Contact form-->

        
        