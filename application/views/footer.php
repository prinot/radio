
        <!--Footer Area-->
        <footer class="footer-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                        <div class="footer-menu">                                                                        
                        <div class=' col-md-6 spacial-widget-now-97928-93f0d7e38a797ca2f06f6a17d6f560785b5c446b'></div>
                        <audio >
                            <source src="https://samcloud.spacial.com/api/listen?sid=97928&m=sc&rid=173585">                        
                                Your browser does not support the audio tag.
                        </audio> 
                            <ul>
                                <li><a href="<?=base_url()?>">Inicio</a></li>
                                <li><a href="<?=base_url('about')?>">Acerca de</a></li>
                                <li><a href="<?=base_url('radio-chat')?>">Radio Chat</a></li>
                                <li><a href="<?=base_url('blog')?>">Blog</a></li>                               
                                <li><a href="<?=base_url('contact')?>">Contactanos</a></li>                                
                            </ul>                            
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12 col-sm-12">
                        <div class="footer-social">
                            <a href="#"><i class="fa fa-facebook"></i></a>
                            <a href="#"><i class="fa fa-twitter"></i></a>
                            <a href="#"><i class="fa fa-linkedin"></i></a>
                           
                            <a href="#"><i class="fa fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer><!--/Footer Area-->

        <div id="la">

Antes de continuar, por favor confirma que aceptas nuestros términos para escuchar nuestra estación de radio.  

</div>
			
		<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
        <script src="<?=base_url('assets/js/jquery-3.2.1.min.js')?>"></script>


        <script src="<?=base_url('assets/js/popper.js')?>"></script>
        <script src="<?=base_url('assets/js/bootstrap.min.js')?>"></script>
		<script src="<?=base_url('assets/js/owl.carousel.min.js')?>"></script>
        <script src="<?=base_url('assets/js/scrollUp.min.js')?>"></script>

        <script src="<?=base_url('assets/js/magnific-popup.min.js')?>"></script>
		<script src="<?=base_url('assets/js/imagesloaded.pkgd.min.js')?>"></script>
        <script src="<?=base_url('assets/js/isotope.pkgd.min.js')?>"></script>

        <script src="<?=base_url('assets/js/wow.min.js')?>"></script>
        <script src="<?=base_url('assets/js/script.js')?>"></script>
        <script src="<?=base_url('assets/js/toast.js')?>"></script>
        <script src="//cdn.jsdelivr.net/npm/alertifyjs@1.11.4/build/alertify.min.js"></script>        
        <script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.1.2/howler.min.js"></script>
        
        <script type="text/javascript">
            <?php if($this->session->flashdata('status_cliente')!=''){
                echo 'new Toast({message: "'.$this->session->flashdata('status_cliente').'",
                    type: "danger"});';
                }
            ?>
        </script>

        <script type="text/javascript">
            var sound = new Howl({
                src: ['http://17003.live.streamtheworld.com/SP_R2568747_SC'],                
                html5: true,                
            });
            
            $( document ).ready(function() {                
                var pre = document.createElement('pre');
                pre.style.maxHeight = "400px";
                pre.style.margin = "0";
                pre.style.padding = "24px";
                pre.style.whiteSpace = "pre-wrap";
                pre.style.textAlign = "justify";
                pre.appendChild(document.createTextNode($('#la').text()));
                


   
alertify.defaults = {
        // dialogs defaults
        
        autoReset:true,
        basic:false,
        closable:true,
        closableByDimmer:true,
        frameless:false,
        maintainFocus:true, // <== global default not per instance, applies to all dialogs
        maximizable:true,
        modal:true,
        movable:true,
        moveBounded:false,
        overflow:true,
        padding: true,
        pinnable:true,
        pinned:true,
        preventBodyShift:false, // <== global default not per instance, applies to all dialogs
        resizable:true,
        startMaximized:false,
        transition:'pulse',

        // notifier defaults
        notifier:{
            // auto-dismiss wait time (in seconds)  
            delay:5,
            // default position
            position:'bottom-right',
            // adds a close button to notifier messages
            closeButton: false
        },

        // language resources 
        glossary:{
            // dialogs default title
            title:'Términos',
            // ok button text
            ok: 'OK',
            // cancel button text
            cancel: 'Cancel'            
        },

        // theme settings
        theme:{
            // class name attached to prompt dialog input textbox.
            input:'form-control',
            // class name attached to ok button
            ok:'btn btn-primary',
            // class name attached to cancel button 
            cancel:'btn btn-danger'
        }
    };

                alertify.confirm(pre, function(){
                    sound.play();
                },function(){
                    //alertify.error('Declined');
                }).set({labels:{ok:'Acepto', cancel: 'No acepto'}, padding: false});                                
            });   
        </script>
        <script type='text/javascript' src='//samcloudmedia.spacial.com/webwidgets/widget/v5/spacialwidget.js?lib=5&his=5&queue=5&hours=8&art=true&themeType=defined&theme=light&showBuyButton=never'></script>                        
    </body>
</html>