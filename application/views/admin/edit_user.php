<div class="main-panel">      
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
        <div class="container-fluid">
          <div class="navbar-wrapper">
            <a class="navbar-brand" href="#pablo">Editar Usuario</a>
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
          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title">Usuario</h4>                  
                </div>
                <div class="card-body">
                  <form method="post" action="<?=base_url('admin/edit_user');?>">
                    <input type="hidden" name="id" value="<?=$usuario->id?>">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="bmd-label-floating">Nombre completo</label>
                          <input type="text" class="form-control" name="nombre" value="<?=$usuario->nombre?>">
                        </div>
                      </div> 
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="bmd-label-floating">Email</label>
                          <input type="email" class="form-control" name="email"  disabled value="<?=$usuario->email?>">
                        </div>
                      </div> 
                    </div>                     
                    <div class="row">                                            
                        <div class="col-md-6">
                            <div class="form-group">
                                <label class="bmd-label-floating">Pregunta de seguridad</label>
                                <input type="text" class="form-control" name="pregunta" value="<?=$usuario->pregunta?>">
                            </div>
                        </div>                       
                        <div class="col-md-6">
                            <div class="form-group">
                                <label class="bmd-label-floating">Respuesta</label>
                                <input type="text" class="form-control" name="respuesta" value="<?=$usuario->respuesta?>">
                            </div>
                        </div>                                             
                    </div>                    
                    <div class="row">                        
                        <div class="col-md-6">
                            <div class="form-group">
                                <label class="bmd-label-floating">Rol</label>
                                <select id="rol" name="rol" class="form-control">
                                    <option value="mod">Moderador (Encargado de registrar posts)</option>
                                    <option value="admin">Administrador (Encargado de registrar usuarios del sistema.)</option>
                                </select>
                            </div>
                        </div>                                             
                        <div class="col-md-3">
                            <div class="form-group">
                                <label class="bmd-label-floating">Avatar</label>
                                <input type="hidden" id="avatar" name="avatar">
                                <select id="demo-htmlselect" name="avatares">
                                    <?php foreach ($avatars as $avatar):?>
                                        <option value="<?=$avatar?>" <?=$usuario->avatar == $avatar ? ' selected="selected"' : '';?> data-imagesrc="<?=base_url().$avatar?>" ></option>
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