<div class="main-panel">
      <!-- Navbar -->
      <nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
        <div class="container-fluid">
          <div class="navbar-wrapper">
            <a class="navbar-brand" href="#pablo">Panel administrativo</a>
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
            <div class="col-lg-4 col-md-6 col-sm-6">
              <div class="card card-stats">
                <div class="card-header card-header-warning card-header-icon">
                  <div class="card-icon">
                    <i class="material-icons">group</i>
                  </div>
                  <p class="card-category">Usuarios registrados</p>
                  <h3 class="card-title"><?=$user_count?>                    
                  </h3>
                </div>
                <div class="card-footer">
                  <div class="stats">
                    <!--<i class="material-icons text-danger">warning</i>
                    <a href="#pablo">Get More Space...</a>-->
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6">
              <div class="card card-stats">
                <div class="card-header card-header-success card-header-icon">
                  <div class="card-icon">
                    <i class="material-icons">ballot</i>
                  </div>
                  <p class="card-category">Posts creados</p>
                  <h3 class="card-title"><?=$post_count?></h3>
                </div>
                <div class="card-footer">
                  <div class="stats">
                    <!--<i class="material-icons">date_range</i> Last 24 Hours-->
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6">
              <div class="card card-stats">
                <div class="card-header card-header-danger card-header-icon">
                  <div class="card-icon">
                    <i class="material-icons">queue_music</i>
                  </div>
                  <p class="card-category">Dedicatorias</p>
                  <h3 class="card-title"><?=$dedicatoria_count?></h3>
                </div>
                <div class="card-footer">
                  <div class="stats">
                   <!-- <i class="material-icons">local_offer</i> Tracked from Github-->
                  </div>
                </div>
              </div>
            </div>            
          </div> 
          <div class="row">
          <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary " >
                  <h4 class="card-title ">Últimos posts creados</h4>
                  <p class="card-category"> </p>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                  <table class="table" id="tabla">
                      <thead class=" text-primary">                        
                        <th>
                          Título
                        </th>
                        <th>
                          Autor
                        </th>
                        <th>
                          Fecha
                        </th>                        
                        <th>
                          Acciones
                        </th>                        
                      </thead>
                      <tbody>
                        <?php foreach ($posts as $post):?>
                          <tr>                          
                            <td>
                              <?=$post->titulo;?>
                            </td>
                            <td>
                              <?=$this->usuario->getAuthorNameById($post->redactor);?>
                            </td>
                            <td>
                              <?=date('d-m-Y H:i:s',strtotime($post->publicado));?>
                            </td>
                            <td>
                              <a href="<?=base_url('admin/posts/edit_post/').$post->id;?>" ><i class="material-icons amarillo ">edit</i></a>
                              <a href="<?=base_url('admin/posts/delete/').$post->id;?>" ><i class="material-icons rojo">delete</i></a>
                            </td>
                          </tr>                        
                        <?php endforeach;?>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>         
        </div>
      </div>