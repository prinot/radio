<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <link rel="apple-touch-icon" sizes="76x76" href="<?=base_url('assets/img/apple-icon.png')?>">
  <link rel="icon" type="image/png" href="<?=base_url('assets/img/favicon.png')?>">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  <title>
    Global Musica Online
  </title>
  <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no' name='viewport' />
  <!--     Fonts and icons     -->
  <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons" />
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css">
  <!-- CSS Files -->
  <link href="<?=base_url('assets/css/material-dashboard.css?v=2.1.1')?>" rel="stylesheet" />
  <script src="https://cdn.ckeditor.com/ckeditor5/12.2.0/classic/ckeditor.js"></script>

  <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.19/css/jquery.dataTables.css">
 
  <script src="<?=base_url('assets/js/core/jquery.min.js')?>"></script>
  <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.js"></script>
</head>

<body class="">
  <div class="wrapper ">
    <div class="sidebar" data-color="green" data-background-color="white" data-image="<?=base_url('assets/img/sidebar-1.jpg')?>">
      <!--
        Tip 1: You can change the color of the sidebar using: data-color="purple | azure | green | orange | danger"

        Tip 2: you can also add an image using data-image tag
    -->
      <div class="logo">
        <a href="<?=base_url();?>" class="simple-text logo-normal">
          Bienvenido
        </a>
        <div class="text-center"> 
          <img src="<?=base_url().$this->session->userdata('avatar')?>" width="50" class="text-center">
        </div>
        
        <h4 class="text-center"><?=$this->session->userdata('nombre');?></h4>
      </div>
      <div class="sidebar-wrapper">
        <ul class="nav">
          <li class="nav-item <?php if(strcmp($last, 'admin') == 0) echo 'active';?>">
            <a class="nav-link" href="<?=base_url('admin')?>">
              <i class="material-icons">dashboard</i>
              <p>Dashboard</p>
            </a>
          </li>
          <li class="nav-item  <?php if(strcmp($last, 'posts') == 0) echo 'active';?>">
            <a class="nav-link" data-toggle="collapse" data-target="#demo" href="">
              <i class="material-icons">ballot</i>
              <p>Blog/Posts</p>
            </a>
            <div id="demo" class="collapse">
              <a class="nav-link" href="<?=base_url('admin/add_post')?>">
                <i class="material-icons">create</i>
                <p>Agregar</p>
              </a>
              <a class="nav-link" href="<?=base_url('admin/posts')?>">
                <i class="material-icons">select_all</i>
                <p>Ver todos</p>
              </a>
            </div> 
          </li>
          <li class="nav-item  <?php if(strcmp($last, 'dedicatorias') == 0) echo 'active';?>">
            <a class="nav-link" href="<?=base_url('admin/dedicatorias');?>">
              <i class="material-icons">queue_music</i>
              <p>Dedicatorias</p>
            </a>
          </li>
          <?php if(strcmp($this->session->userdata('rol'),'mod')!==0):?>
            <li class="nav-item  <?php if(strcmp($last, 'users') == 0) echo 'active';?>">
              <a class="nav-link" data-toggle="collapse" data-target="#demo1" href="">
                <i class="material-icons">supervised_user_circle</i>
                <p>Control de usuarios</p>
              </a>
              <div id="demo1" class="collapse">
                <a class="nav-link" href="<?=base_url('admin/add_user')?>">
                  <i class="material-icons">person_add</i>
                  <p>Agregar</p>
                </a>
                <a class="nav-link" href="<?=base_url('admin/usuarios');?>">
                  <i class="material-icons">group</i>
                  <p>Ver todos</p>
                </a>
              </div> 
            </li>    
          <?php endif;?>
          <li class="nav-item  <?php if(strcmp($last, 'perfil') == 0) echo 'active';?>">
            <a class="nav-link" href="<?=base_url('admin/perfil');?>">
              <i class="material-icons">account_box</i>
              <p>Perfil</p>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="<?=base_url('admin/logout');?>">
              <i class="material-icons">power_settings_new</i>
              <p>Cerrar Sesión</p>
            </a>
          </li>                
        </ul>
      </div>
    </div>