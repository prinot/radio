<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Admin extends CI_Controller {

	public function __construct() {
		parent::__construct();
		$this->load->helper('form');
		$this->load->model('usuario');
		$this->load->model('post');
		$this->load->model('dedicatoria');	
		$this->load->model('tag');	
		$this->load->model('categoria');	
		$this->load->model('comentario');	
		$this->load->model('cliente');	

		//parametros generales para la carga de archivos. en el caso de las portadas de los  post.
		$this->upload_path = 'uploads/';
		$this->allowed_types = 'gif|jpg|png';
		$this->overwrite= FALSE;		
		$this->max_filename = 25;				
	}
	
	public function index()
	{	
		if($this->session->userdata('logged_in')){ //chequea si se ha iniciado sesion
			$data['last']='admin'; //variable de control para marcar como activo el menu de navegacion
			$data['post_count']=$this->post->getPostsCount();
			$data['user_count']=$this->usuario->getUsersCount();
			$data['dedicatoria_count']=$this->dedicatoria->getDedicatoriasCount();	
			$data['posts']=$this->post->getPosts();
			$this->load->view('admin/header',$data);
			$this->load->view('admin/index');
			$this->load->view('admin/footer');			
		}
		else{ //sino, redirecciona al login
			redirect('admin/login');
		}			
	}

    public function login()
    {
        $this->load->view('admin/login');
	}

	public function logout(){		
		session_destroy();		 //destruye la sesion actual
		redirect('/admin/login', 'refresh');	
	}

	public function check_login(){
		$password=$this->input->post('password');
		$email=$this->input->post('email');
		$usuario=$this->usuario->login($email);		//primero chequea si el usuario existe con el correo indicado
		if($usuario!==null){
			if(strcmp($password,$this->encryption->decrypt($usuario->clave))!==0){ //si existe, compara las claves
				$this->session->set_flashdata('status','Password incorrecto');
				redirect('/admin/login', 'refresh');	//si no coinciden, lo envia al login
			}				
			else{ //si todo coincide, crea una nueva sesion y  redirige al index
				$newdata = array(
					'nombre'  => $usuario->nombre,
					'email'     => $usuario->email,
					'logged_in' => TRUE,
					'id' =>	$usuario->id,
					'rol' => 	$usuario->rol,
					'avatar' =>	$usuario->avatar
			);				
			$this->session->set_userdata($newdata);			
			redirect('/admin/', 'refresh');
			} 				
		}					
		else { //si no encuentra el correo, redirige al login
			$this->session->set_flashdata('status','Usuario no registrado');
			redirect('/admin/login', 'refresh');
		}			
	}

	public function add_post(){	
		if($this->session->userdata('logged_in')){	
			$data['last']='posts';
			$data2['tags']=$this->tag->getTags();
			$this->load->view('admin/header',$data);
			$this->load->view('admin/add_post',$data2);
			$this->load->view('admin/footer');
		}
		else{
			$this->session->set_flashdata('status','Inicia sesión para continuar');
			redirect('admin/login');
		}			
	}
	public function add_user(){	
		//ademas de chequear si esta logueado, tambien chequea que tenga el rol de admin
		if($this->session->userdata('logged_in') && ($this->session->userdata('rol')=="admin")){	
			$data['last']='users';

			//carga todos los archivos de la carpeta avatars.
			$dirname = "avatars/";
			$data['avatars']= glob($dirname."*.png");
			$this->load->view('admin/header',$data);
			$this->load->view('admin/add_user');
			$this->load->view('admin/footer');
		}
		else{
			$this->session->set_flashdata('status','Inicia sesión para continuar');
			redirect('admin/login');
		}			
	}

	public function posts(){
		if($this->session->userdata('logged_in')){		
			$data['last']='posts';
			$data['posts']=$this->post->getPosts();
			$this->load->view('admin/header',$data);
			$this->load->view('admin/posts');
			$this->load->view('admin/footer');						
		}
		else{
			$this->session->set_flashdata('status','Inicia sesión para continuar');
			redirect('admin/login');
		}			
	}

	public function edit_post_form($id){
		if($this->session->userdata('logged_in')){
			$data['last']='posts';
			$data2['post']=$this->post->getPostById($id);
			$data2['tags']=$this->tag->getTags();

			//query a los tags que ya el post tiene asignados
			$data2['post_tags']=$this->post->getTags($id);
			$this->load->view('admin/header',$data);
			$this->load->view('admin/edit_post',$data2);
			$this->load->view('admin/footer');						
		}
		else{
			$this->session->set_flashdata('status','Inicia sesión para continuar');
			redirect('admin/login');
		}			
	}
	public function edit_user_form($id){
		if($this->session->userdata('logged_in') && ($this->session->userdata('rol')=="admin")){	
			$data['last']='users';		
			$dirname = "avatars/";
			$data['avatars']= glob($dirname."*.png");
			$data2['usuario']=$this->usuario->getUserById($id);
			$this->load->view('admin/header',$data);
			$this->load->view('admin/edit_user',$data2);
			$this->load->view('admin/footer');						
		}
		else{
			$this->session->set_flashdata('status','Inicia sesión para continuar');
			redirect('admin/login');
		}			
	}
	public function edit_post(){
		if($this->session->userdata('logged_in')){
			$titulo=$this->input->post('titulo');
			$id=$this->input->post('id');
			$contenido=$this->input->post('contenido');	

			$data=array('titulo' =>$titulo, 'contenido' =>$contenido);
			//parametros para la carga de la imagen
			$config['upload_path']          = $this->upload_path;
			$config['allowed_types']        = $this->allowed_types;
			$config['overwrite'] = $this->overwrite;
			$new_name = time().'_'.$_FILES["portada"]['name'];
            $config['file_name'] = $new_name;
			$config['max_filename'] = $this->max_filename;	

			$this->load->library('upload', $config);

			$tags=$this->input->post('tags');
			if ( ! $this->upload->do_upload('portada'))
			{
			//error al subir el archivo	
			}
			else
			{	//en caso de exito, se guarda el nombre del archivo para usarlo en la BD.
				$file =$this->upload->file_name;						
				$data['portada']=$file;
			}
			
			if($this->post->updatePost($data,$id)){
				$this->post->updateTags($id);			
				if(isset($tags)){
					foreach ($tags as $tag){
						$etiqueta=array('id_post'=>$id,'id_tag'=>$tag);
						$this->post->addTag($etiqueta);
					}
				}	
				
				$this->session->set_flashdata('status','Post modificado exitosamente');
				redirect('/admin/posts', 'refresh');
			}
		}		
		else{
			redirect('admin/login');
		}			
	}

	public function new_post()
	{
		if($this->session->userdata('logged_in')){
			$titulo=$this->input->post('titulo');
			$contenido=$this->input->post('contenido');		
			$redactor=$this->session->userdata('id');
			$tags=$this->input->post('tags');
			$data=array('titulo' =>$titulo, 'contenido' =>$contenido, 'redactor' =>$redactor);
			
			//parametros para la carga de la imagen
			$config['upload_path']          = $this->upload_path;
			$config['allowed_types']        = $this->allowed_types;
			$config['overwrite'] = $this->overwrite;
			$new_name = time().'_'.$_FILES["portada"]['name'];
            $config['file_name'] = $new_name;
			$config['max_filename'] = $this->max_filename;	
			
			$this->load->library('upload', $config);
			if ( ! $this->upload->do_upload('portada'))
			{
				//en caso de error
			}
			else
			{
				$file =$this->upload->file_name;						
				$data['portada']=$file;
			}
			$id_post=$this->post->addPost($data);
			if($id_post!==null){		
				if(isset($tags)){
					foreach ($tags as $tag){
						$etiqueta=array('id_post'=>$id_post,'id_tag'=>$tag);
						$this->post->addTag($etiqueta);
					}
				}		
				
				$this->session->set_flashdata('status','Post registrado exitosamente');
				redirect('/admin/posts', 'refresh');
			}
		}
		else{
			$this->session->set_flashdata('status','Inicia sesión para continuar');
			redirect('admin/login');
		}			
	}

	public function usuarios(){
		if($this->session->userdata('logged_in') && ($this->session->userdata('rol')=="admin")){	
			$data['last']='users';
			$data2['usuarios']=$this->usuario->getUsers();
			$this->load->view('admin/header',$data);
			$this->load->view('admin/usuarios',$data2);
			$this->load->view('admin/footer');
		}
		else{
			$this->session->set_flashdata('status','Inicia sesión para continuar');
			redirect('admin/login');
		}			
	}
	public function new_user()
	{
		if($this->session->userdata('logged_in') && ($this->session->userdata('rol')=="admin")){	
			$nombre=$this->input->post('nombre');
			$email=$this->input->post('email');		
			$password=$this->encryption->encrypt($this->input->post('password'));
			$pregunta=$this->input->post('pregunta');
			$respuesta=$this->input->post('respuesta');
			$rol=$this->input->post('rol');
			$avatar=$this->input->post('avatar');			
			$data=array('nombre' =>$nombre, 'email' =>$email, 'clave' =>$password,'rol'=>$rol,
			'pregunta'=>$pregunta,	'respuesta'=>$respuesta,'avatar'=>$avatar);		

			//valida que no este ya el email registrado en la BD
			if($this->usuario->email_exists($email)){
				$this->session->set_flashdata('status','Este email ya se encuentra registrado');
				redirect('/admin/add_user', 'refresh');
			}				
			if($this->usuario->addUser($data)){
				$this->session->set_flashdata('status','Usuario registrado exitosamente');
				redirect('/admin/usuarios', 'refresh');
			}
		}
		else{
			$this->session->set_flashdata('status','Inicia sesión para continuar');
			redirect('admin/login');
		}			
	}

	public function edit_user()
	{
		if($this->session->userdata('logged_in') && ($this->session->userdata('rol')=="admin")){	
			$id=$this->input->post('id');
			$nombre=$this->input->post('nombre');			
			$password=$this->encryption->encrypt($this->input->post('password'));
			$pregunta=$this->input->post('pregunta');
			$respuesta=$this->input->post('respuesta');
			$rol=$this->input->post('rol');
			$avatar=$this->input->post('avatar');			
			$data=array('nombre' =>$nombre, 'clave' =>$password,'rol'=>$rol,
			'pregunta'=>$pregunta,	'respuesta'=>$respuesta,'avatar'=>$avatar);			
			if($this->usuario->updateUser($data,$id)){
				$this->session->set_flashdata('status','Usuario actualizado exitosamente');
				redirect('/admin/usuarios', 'refresh');
			}
		}
		else{
			$this->session->set_flashdata('status','Inicia sesión para continuar');
			redirect('admin/login');
		}			
	}


	public function delete_post($id){				
		if($this->session->userdata('logged_in')){
			$this->db->delete('blog', array('id' => $id));
			$this->session->set_flashdata('status', 'Post eliminado');
			redirect('admin/posts'); 
		}
		else{
			$this->session->set_flashdata('status','Inicia sesión para continuar');
			redirect('admin/login');
		}			
	}
	public function delete_comment($id){				
		if($this->session->userdata('logged_in')){
			$this->db->delete('comentarios', array('id' => $id));
			$this->session->set_flashdata('status', 'Comentario eliminado');
			redirect('admin/comentarios'); 
		}
		else{
			$this->session->set_flashdata('status','Inicia sesión para continuar');
			redirect('admin/login');
		}			
	}
	
	public function dedicatorias(){		
		if($this->session->userdata('logged_in')){
			
			$data['dedicatorias']=$this->dedicatoria->getDedicatorias();
			$data['last']='dedicatorias';
			$this->load->view('admin/header',$data);
			$this->load->view('admin/dedicatorias');
			$this->load->view('admin/footer');						
		}
		else{
			$this->session->set_flashdata('status','Inicia sesión para continuar');
			redirect('admin/login');
		}			
	}
	public function comentarios(){		
		if($this->session->userdata('logged_in')){
			
			$data['comentarios']=$this->comentario->getComments();
			$data['last']='comentarios';
			$this->load->view('admin/header',$data);
			$this->load->view('admin/comentarios');
			$this->load->view('admin/footer');						
		}
		else{
			$this->session->set_flashdata('status','Inicia sesión para continuar');
			redirect('admin/login');
		}			
	}
	public function delete_dedicatoria($id){				
		if($this->session->userdata('logged_in')){
			$this->db->delete('dedicatorias', array('id' => $id));
			$this->session->set_flashdata('status', 'Dedicatoria eliminada');
			redirect('admin/dedicatorias');
		}
		else{
			$this->session->set_flashdata('status','Inicia sesión para continuar');
			redirect('admin/login');
		}			
	}
	public function delete_user($id){				
		if($this->session->userdata('logged_in') && ($this->session->userdata('rol')=="admin")){	
			$this->db->delete('users', array('id' => $id));
			$this->session->set_flashdata('status', 'Usuario eliminado');
			redirect('admin/usuarios');
		}
		else{
			$this->session->set_flashdata('status','Inicia sesión para continuar');
			redirect('admin/login');
		}			
	}
	public function perfil(){	
		if($this->session->userdata('logged_in')){	
			$data['last']='perfil';
			$id=$this->session->userdata('id');
			$data2['usuario']=$this->usuario->getUserById($id);
			$dirname = "avatars/";
			$data2['avatars']= glob($dirname."*.png");
			$this->load->view('admin/header',$data);
			$this->load->view('admin/perfil',$data2);
			$this->load->view('admin/footer');
		}
		else{
			$this->session->set_flashdata('status','Inicia sesión para continuar');
			redirect('admin/login');
		}			
	}
	public function edit_profile()
	{
		if($this->session->userdata('logged_in')){	
			$id=$this->input->post('id');
			$nombre=$this->input->post('nombre');			
			$password=$this->input->post('password');
			
			
			$pregunta=$this->input->post('pregunta');
			$respuesta=$this->input->post('respuesta');
			$rol=$this->input->post('rol');
			$avatar=$this->input->post('avatar');			
			$data=array('nombre' =>$nombre,	'pregunta'=>$pregunta,	'respuesta'=>$respuesta,'avatar'=>$avatar);			
			if($password){
				$password=$this->encryption->encrypt($password);
				$data['clave']=$password;
			}
			if($this->usuario->updateUser($data,$id)){
				$this->session->set_flashdata('status','Perfil actualizado exitosamente');
				$newdata = array(
					'nombre'  => $nombre,																				
					'avatar' =>	$avatar
			);				
			$this->session->set_userdata($newdata);			
				redirect('/admin/index', 'refresh');
			}
		}
		else{
			$this->session->set_flashdata('status','Inicia sesión para continuar');
			redirect('admin/login');
		}			
	}

	public function categorias(){
		if($this->session->userdata('logged_in')){
			
			$data['categorias']=$this->categoria->getCategorias();
			$data['last']='categorias';
			$this->load->view('admin/header',$data);
			$this->load->view('admin/categorias');
			$this->load->view('admin/footer');						
		}
		else{
			$this->session->set_flashdata('status','Inicia sesión para continuar');
			redirect('admin/login');
		}			

	}

	public function add_category(){		
		if($this->session->userdata('logged_in')){						
			$data['last']='categorias';
			$this->load->view('admin/header',$data);
			$this->load->view('admin/add_category');
			$this->load->view('admin/footer');						
		}
		else{
			$this->session->set_flashdata('status','Inicia sesión para continuar');
			redirect('admin/login');
		}			
	}

	public function new_category()
	{
		if($this->session->userdata('logged_in') && ($this->session->userdata('rol')=="admin")){	
			$nombre=$this->input->post('nombre');			
			$data=array('nombre' =>$nombre);		
			
			if($this->tag->addTag($data)){
				$this->session->set_flashdata('status','Etiqueta registrada exitosamente');
				redirect('/admin/categorias', 'refresh');
			}
		}
		else{
			$this->session->set_flashdata('status','Inicia sesión para continuar');
			redirect('admin/login');
		}			
	}
	public function delete_category($id){				
		if($this->session->userdata('logged_in')){
			$this->db->delete('categorias', array('id' => $id));
			$this->session->set_flashdata('status', 'Categoría eliminada');
			redirect('admin/categorias'); 
		}
		else{
			$this->session->set_flashdata('status','Inicia sesión para continuar');
			redirect('admin/login');
		}			
	}
	public function tags(){
		if($this->session->userdata('logged_in')){
			
			$data['tags']=$this->tag->getTags();
			$data['last']='tags';
			$this->load->view('admin/header',$data);
			$this->load->view('admin/tags');
			$this->load->view('admin/footer');						
		}
		else{
			$this->session->set_flashdata('status','Inicia sesión para continuar');
			redirect('admin/login');
		}			

	}

	public function add_tag(){		
		if($this->session->userdata('logged_in')){						
			$data['last']='tags';
			$this->load->view('admin/header',$data);
			$this->load->view('admin/add_tag');
			$this->load->view('admin/footer');						
		}
		else{
			$this->session->set_flashdata('status','Inicia sesión para continuar');
			redirect('admin/login');
		}			
	}

	public function new_tag()
	{
		if($this->session->userdata('logged_in') && ($this->session->userdata('rol')=="admin")){	
			$nombre=$this->input->post('nombre');			
			$data=array('tag' =>$nombre);		
			
			if($this->tag->addTag($data)){
				$this->session->set_flashdata('status','Etiqueta registrada exitosamente');
				redirect('/admin/tags', 'refresh');
			}
		}
		else{
			$this->session->set_flashdata('status','Inicia sesión para continuar');
			redirect('admin/login');
		}			
	}
	public function delete_tag($id){				
		if($this->session->userdata('logged_in')){
			$this->db->delete('tags', array('id' => $id));
			$this->session->set_flashdata('status', 'Etiqueta eliminada');
			redirect('admin/tags'); 
		}
		else{
			$this->session->set_flashdata('status','Inicia sesión para continuar');
			redirect('admin/login');
		}			
	}
}

