<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Admin extends CI_Controller {

	public function __construct() {
		parent::__construct();
		$this->load->helper('form');
		$this->load->model('usuario');
		$this->load->model('post');
		$this->load->model('dedicatoria');				
	}
	
	public function index()
	{	
		if($this->session->userdata('logged_in')){
			$data['last']='admin';
			$data['post_count']=$this->post->getPostsCount();
			$data['user_count']=$this->usuario->getUsersCount();
			$data['dedicatoria_count']=$this->dedicatoria->getDedicatoriasCount();	
			$data['posts']=$this->post->getPosts();
			$this->load->view('admin/header',$data);
			$this->load->view('admin/index');
			$this->load->view('admin/footer');			
		}
		else{
			redirect('admin/login');
		}			
	}

    public function login()
    {
        $this->load->view('admin/login');
	}

	public function logout(){		
		session_destroy();		
		redirect('/admin/login', 'refresh');	
	}

	public function check_login(){
		$password=$this->input->post('password');
		$email=$this->input->post('email');
		$usuario=$this->usuario->login($email);		
		if($usuario!==null){
			if(strcmp($password,$this->encryption->decrypt($usuario->clave))!==0){
				$this->session->set_flashdata('status','Password incorrecto');
				redirect('/admin/login', 'refresh');	
			}				
			else{
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
		else {
			$this->session->set_flashdata('status','Usuario no registrado');
			redirect('/admin/login', 'refresh');
		}			
	}

	public function add_post(){	
		if($this->session->userdata('logged_in')){	
			$data['last']='posts';
			$this->load->view('admin/header',$data);
			$this->load->view('admin/add_post');
			$this->load->view('admin/footer');
		}
		else{
			$this->session->set_flashdata('status','Inicia sesión para continuar');
			redirect('admin/login');
		}			
	}
	public function add_user(){	
		if($this->session->userdata('logged_in')){	
			$data['last']='users';
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
		if($this->session->userdata('logged_in')){
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
			$config['upload_path']          = 'uploads/';
			$config['allowed_types']        = 'gif|jpg|png';
			$config['overwrite'] = FALSE;
			$config['encrypt_name'] = TRUE;
			$config['max_filename'] = 25;	

			$this->load->library('upload', $config);
			if ( ! $this->upload->do_upload('portada'))
			{
			//error al subir el archivo	
			}
			else
			{
				$file =$this->upload->file_name;						
				$data['portada']=$file;
			}
			$this->load->model('post');	
			if($this->post->updatePost($data,$id)){
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

			$data=array('titulo' =>$titulo, 'contenido' =>$contenido, 'redactor' =>$redactor);
			$config['upload_path']          = 'uploads/';
			$config['allowed_types']        = 'gif|jpg|png';
			$config['overwrite'] = FALSE;
			$config['encrypt_name'] = TRUE;
			$config['max_filename'] = 25;	

			$this->load->library('upload', $config);
			if ( ! $this->upload->do_upload('portada'))
			{
				
			}
			else
			{
				$file =$this->upload->file_name;						
				$data['portada']=$file;
			}
			$this->load->model('post');
			if($this->post->addPost($data)){
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
		$data['last']='users';
		$data2['usuarios']=$this->usuario->getUsers();
		$this->load->view('admin/header',$data);
		$this->load->view('admin/usuarios',$data2);
		$this->load->view('admin/footer');
	}
	public function new_user()
	{
		if($this->session->userdata('logged_in')){
			$nombre=$this->input->post('nombre');
			$email=$this->input->post('email');		
			$password=$this->encryption->encrypt($this->input->post('password'));
			$pregunta=$this->input->post('pregunta');
			$respuesta=$this->input->post('respuesta');
			$rol=$this->input->post('rol');
			$avatar=$this->input->post('avatar');			
			$data=array('nombre' =>$nombre, 'email' =>$email, 'clave' =>$password,'rol'=>$rol,
			'pregunta'=>$pregunta,	'respuesta'=>$respuesta,'avatar'=>$avatar);			
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
		if($this->session->userdata('logged_in')){
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
			$this->session->set_flashdata('status', 'Eliminado');
			redirect('admin/posts'); 
		}
		else{
			$this->session->set_flashdata('status','Inicia sesión para continuar');
			redirect('admin/login');
		}			
	}
	
	public function dedicatorias(){		
		if($this->session->userdata('logged_in')){
			$this->load->model('dedicatoria');
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
	public function delete_dedicatoria($id){				
		if($this->session->userdata('logged_in')){
			$this->db->delete('dedicatorias', array('id' => $id));
			$this->session->set_flashdata('status', 'Eliminado');
			redirect('admin/dedicatorias');
		}
		else{
			$this->session->set_flashdata('status','Inicia sesión para continuar');
			redirect('admin/login');
		}			
	}
	public function delete_user($id){				
		if($this->session->userdata('logged_in')){
			$this->db->delete('users', array('id' => $id));
			$this->session->set_flashdata('status', 'Eliminado');
			redirect('admin/usuarios');
		}
		else{
			$this->session->set_flashdata('status','Inicia sesión para continuar');
			redirect('admin/login');
		}			
	}
}

