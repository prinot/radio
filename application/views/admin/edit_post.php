<div class="main-panel">      
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
        <div class="container-fluid">
          <div class="navbar-wrapper">
            <a class="navbar-brand" href="#pablo">Crear un nuevo Post</a>
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
                  <h4 class="card-title">Editar Post</h4>                  
                </div>
                <div class="card-body">
                  <?php echo form_open_multipart('admin/edit_post');?>
                    <input type="hidden" value="<?=$post->id?>" name="id">
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                          <label class="bmd-label-floating">Título</label>
                          <input type="text" class="form-control" value="<?=$post->titulo?>" name="titulo">
                        </div>
                      </div> 
                    </div>                     
                    <div class="row">                    
                      <div class="col-md-3">                       
                      <?php if($post->portada!==null):?>
                            Portada actual:
                            <img src="<?=base_url('uploads/').$post->portada?>" width="400">  
                        <?php endif;?>
                        <div class="input-group">
                            Nueva portada (no seleccionar si no se desea cambiar)
                            <span class="input-group-btn">
                                <span class="btn btn-primary ">                                   
                                    <input type="file" single name="portada">
                                </span>
                            </span>                            
                        </div>                              
                      </div>                      
                    </div>    
                    <div class="row">                    
                      <div class="col-md-6">
                        <div clas="form-group">
                        <label>Tags</label>
                          <select class="js-example-basic-multiple form-control" name="tags[]" multiple="multiple">
                            <?php foreach ($tags as $tag):?>
                                <?php foreach ($post_tags as $pt){
                                  if($pt->id==$tag->id)
                                    $tag->selected=true;
                                }?>                                
                                <option value="<?=$tag->id?>" <?php if( isset($tag->selected) &&($tag->selected)) echo 'selected';?>> <?=$tag->tag?></option>                                                            
                            <?php endforeach;?>
                          </select>
                        </div>
                      </div>
                    </div>                                 
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                          <label>Descripción</label>
                          <div class="form-group">
                            <textarea name="contenido" id="editor" rows="20"><?=$post->contenido?></textarea>                            
                          </div>
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
      <link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.7/css/select2.min.css" rel="stylesheet" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.7/js/select2.min.js"></script>
      <script>
      $(document).ready(function() {
        $('.js-example-basic-multiple').select2({
          placeholder: "Selecciona las etiquetas para el post",
    allowClear: true}
        );
      });
            ClassicEditor
                .create( document.querySelector( '#editor' ) )
                .then( editor => {
                    console.log( editor );
                } )
                .catch( error => {
                    console.error( error );
                } );
        </script>