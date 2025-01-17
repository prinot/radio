<div class="main-panel">      
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
        <div class="container-fluid">
          <div class="navbar-wrapper">
            <a class="navbar-brand" href="#pablo">Crear un nuevo Usuario</a>
          </div>
          <button class="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
            <span class="sr-only">Toggle navigation</span>
            <span class="navbar-toggler-icon icon-bar"></span>
            <span class="navbar-toggler-icon icon-bar"></span>
            <span class="navbar-toggler-icon icon-bar"></span>
          </button>          
        </div>
      </nav>
      <!-- End Navbar -->
      <div class="content">
        <div class="container-fluid">
          <?php if($this->session->flashdata('status')!=''):?>
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
              <strong><?=$this->session->flashdata('status');?></strong> 
              <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          <?php endif;?>
          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title">Nuevo Usuario</h4>                  
                </div>
                <div class="card-body">
                  <form method="post" action="<?=base_url('admin/new_user');?>">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="bmd-label-floating">Nombre completo</label>
                          <input type="text" class="form-control" name="nombre">
                        </div>
                      </div> 
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="bmd-label-floating">Email</label>
                          <input type="email" class="form-control" name="email">
                        </div>
                      </div> 
                    </div>                     
                    <div class="row">                    
                        <div class="col-md-6">
                            <div class="form-group">
                                <label class="bmd-label-floating">Contraseña</label>
                                <input type="password" class="form-control" name="password">
                            </div>
                        </div>                       
                        <div class="col-md-6">
                            <div class="form-group">
                                <label class="bmd-label-floating">Pregunta de seguridad</label>
                                <input type="text" class="form-control" name="pregunta">
                            </div>
                        </div>                       
                    </div>                    
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label class="bmd-label-floating">Respuesta</label>
                                <input type="text" class="form-control" name="respuesta">
                            </div>
                        </div>                                             
                        <div class="col-md-6">
                            <div class="form-group">
                                <label class="bmd-label-floating">Rol</label>
                                <select id="rol" name="rol" class="form-control">
                                    <option value="mod">Moderador (Encargado de registrar posts)</option>
                                    <option value="admin">Administrador (Encargado de registrar usuarios del sistema.)</option>
                                </select>
                            </div>
                        </div>                                             
                    </div>
                    <div class="row">
                        <div class="col-md-3">
                            <div class="form-group">
                                <label class="bmd-label-floating">Avatar</label>
                                <input type="hidden" id="avatar" name="avatar">
                                <select id="demo-htmlselect" name="avatares">
                                    <?php foreach ($avatars as $avatar):?>
                                        <option value="<?=$avatar?>" data-imagesrc="<?=base_url().$avatar?>" ></option>
                                    <?php endforeach;?>                
                                </select>
                            </div>                            
                        </div>                        
                    </div>
                    <button type="submit" class="btn btn-primary pull-right">Enviar</button>
                    <div class="clearfix"></div>
                  </form>
                </div>
              </div>
            </div>            
          </div>
        </div>
      </div>
    <script type="text/javascript" src="https://cdn.rawgit.com/prashantchaudhary/ddslick/master/jquery.ddslick.min.js" ></script>
    <script type="text/javascript">
        $('#demo-htmlselect').ddslick({
            width:100,
            onSelected: function (data) {
                console.log(data.selectedData.value);
                $('#avatar').val(data.selectedData.value);
            }
        });
</script>