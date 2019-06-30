<div class="main-panel">      
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
        <div class="container-fluid">
          <div class="navbar-wrapper">
            <a class="navbar-brand" href="#pablo">Listado de Dedicatorias</a>
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
                    <strong>Dedicatoria eliminada</strong> 
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            <?php endif;?>
          <div class="row">
          <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary " >
                  <h4 class="card-title ">Dedicatorias registradas</h4>
                  <p class="card-category"> </p>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table" id="tabla">
                      <thead class=" text-primary">
                        <th>
                          Fecha
                        </th>
                        <th>
                          Cliente
                        </th>
                        <th>
                          Canción
                        </th>
                        <th>
                          Artista
                        </th>                        
                        <th>
                          Dedicatoria
                        </th>                        
                        <th>
                          Acción
                        </th>                        
                      </thead>
                      <tbody>
                        <?php foreach ($dedicatorias as $dedicatoria):?>
                            <tr>
                                <td>
                                <?=date('d-m-Y H:i:s',strtotime($dedicatoria->fecha));?>
                                </td>
                                <td>
                                <?=$dedicatoria->cliente;?>
                                </td>
                                <td>
                                <?=$dedicatoria->cancion;?>
                                </td>
                                <td>
                                <?=$dedicatoria->artista;?>
                                </td>
                                <td>
                                <?=$dedicatoria->dedicatoria;?>
                                </td>
                                <td>
                                <a class="btn btn-danger" href="<?=base_url('admin/dedicatorias/delete/').$dedicatoria->id;?>" style="color:white">Eliminar</a>
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


