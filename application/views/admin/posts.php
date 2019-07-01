<div class="main-panel">      
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
        <div class="container-fluid">
          <div class="navbar-wrapper">
            <a class="navbar-brand" href="#pablo">Listado de Posts</a>
          </div>
          <button class="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
            <span class="sr-only">Toggle navigation</span>
            <span class="navbar-toggler-icon icon-bar"></span>
            <span class="navbar-toggler-icon icon-bar"></span>
            <span class="navbar-toggler-icon icon-bar"></span>
          </button>          
        </div>
      </nav>
      <!-- End Navbar --><div class="content">
        <div class="container-fluid">
          <?php if($this->session->flashdata('status')!=''):?>
            <div class="alert alert-success alert-dismissible fade show" role="alert">
              <strong><?=$this->session->flashdata('status');?></strong> 
              <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          <?php endif;?>
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
