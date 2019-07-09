<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {

	public function __construct() {
		parent::__construct();
		
		$this->load->model('usuario');
		$this->load->model('post');						
		$this->load->model('comentario');	
		$this->load->model('tag');						
		$this->load->model('cliente');						

		//parametros generales para la carga de archivos. en el caso de las portadas de los  post.
		$this->upload_path = 'fotos_perfil/';
		$this->allowed_types = 'gif|jpg|png|jpeg';
		$this->overwrite= FALSE;		
		$this->max_filename = 25;				
	}

	public function index()
	{
		$data['posts']=$this->post->getPosts();
		$data2['sponsor']=true;
		$this->load->view('header',$data2);
		$this->load->view('welcome_message',$data);
		$this->load->view('footer');
	}
	public function radio_programs()
	{
		$this->load->view('header');
		$this->load->view('radio-programs');
		$this->load->view('footer');
	}
	public function radio_jockey()
	{
		$this->load->view('header');
		$this->load->view('radio-jockey');
		$this->load->view('footer');
	}
	public function rj_profile()
	{
		$this->load->view('header');
		$this->load->view('rj-profile');
		$this->load->view('footer');
	}
	public function radio_chat()
	{
		$data['posts']=$this->post->getPosts();
		$this->load->view('header');
		$this->load->view('radio-chat',$data);
		$this->load->view('footer');
	}
	public function blog()
	{
		
		$data['posts']=$this->post->getPosts();
		$this->load->view('header');
		$this->load->view('blog',$data);
		$this->load->view('footer');
	}
	public function blog_details($id)
	{
		$this->load->view('header');
		$data['comentarios']=$this->comentario->getComentarios($id);
		$data['posts']=$this->post->getPosts();		
		$data['post']=$this->post->getPostById($id);
		$data['tags']=$this->post->getTags($id);
		$data['popular_tags']=$this->tag->getPopularTags();
		$data['post_per_category']=$this->post->getCountPerCategory();
		$this->load->view('blog-details',$data);
		$this->load->view('footer');
	}
	public function about()
	{
		$this->load->view('header');
		$this->load->view('about');
		$this->load->view('footer');
	}
	public function contact()
	{
		$this->load->view('header');
		$this->load->view('contact');
		$this->load->view('footer');
	}

	public function post_category($id){
		$data['posts']=$this->post->getPostsByCategory($id);
		$this->load->view('header');
		$this->load->view('blog',$data);
		$this->load->view('footer');
	}

	public function post_by_tag($id){
		$data['posts']=$this->post->getPostsByTag($id);
		$this->load->view('header');
		$this->load->view('blog',$data);
		$this->load->view('footer');
	}

	public function registro(){	
		$this->load->view('header');
		$this->load->view('registro');
		$this->load->view('footer');
	}
	public function login(){	
		$this->load->view('header');
		$this->load->view('login');
		$this->load->view('footer');
	}
	public function add_client(){
		
			$nombres=$this->input->post('nombres');
			$apellidos=$this->input->post('apellidos');
			$email=$this->input->post('email');					
			$clave=$this->input->post('clave');
			$clave2=$this->input->post('clave2');
			$pregunta=$this->input->post('pregunta');
			$respuesta=$this->input->post('respuesta');					

			//parametros para la carga de la imagen
			$config['upload_path']          = $this->upload_path;
			$config['allowed_types']        = $this->allowed_types;
			$config['overwrite'] = $this->overwrite;
			$new_name = time().'_'.$_FILES["foto"]['name'];
            $config['file_name'] = $new_name;
			$config['max_filename'] = $this->max_filename;	
			

			$data=array('nombres' =>$nombres, 'email' =>$email,'apellidos'=>$apellidos,
			 'clave' =>$this->encryption->encrypt($clave), 'pregunta'=>$pregunta,
			 'respuesta'=>$respuesta);		


			$this->load->library('upload', $config);
			if ( ! $this->upload->do_upload('foto'))
			{
				//en caso de error
			}
			else
			{
				$file =$this->upload->file_name;						
				$data['foto']=$file;
			}
			
			if(strcmp($clave,$clave2)!=0){
				$this->session->set_flashdata('status_cliente','Las contraseñas no coinciden');
				redirect('/registro', 'refresh');
			}
			if($this->cliente->email_exists($email)){
				$this->session->set_flashdata('status_cliente','Este email ya se encuentra registrado');
				redirect('/registro', 'refresh');
			}
			
			if($this->cliente->addClient($data)){
				
				redirect('/blog', 'refresh');
			}
			else{
				$this->session->set_flashdata('status_cliente','Ha ocurrido un error');
				redirect('/registro', 'refresh');
			}

	}

	public function check_login(){
		$password=$this->input->post('clave');
		$email=$this->input->post('email');
		$cliente=$this->cliente->login($email);		//primero chequea si el usuario existe con el correo indicado
		if($cliente!==null){
			if(strcmp($password,$this->encryption->decrypt($cliente->clave))!==0){ //si existe, compara las claves
				$this->session->set_flashdata('status_cliente','Clave incorrecta');
				redirect('/login', 'refresh');	//si no coinciden, lo envia al login
			}				
			else{ //si todo coincide, crea una nueva sesion y  redirige al index
				$newdata = array(
					'nombre'  => $cliente->nombres,
					'email'     => $cliente->apellidos,
					'logged_in_client' => TRUE,
					'id' =>	$cliente->id,					
					'foto' =>	$cliente->foto
			);				
			$this->session->set_userdata($newdata);			
			$this->session->set_flashdata('status_cliente','Bienvenido');
			redirect('/blog/', 'refresh');
			} 				
		}					
		else { //si no encuentra el correo, redirige al login
			$this->session->set_flashdata('status_cliente','Usuario no registrado');
			redirect('/login', 'refresh');
		}			
	}
	public function logout(){		
		session_destroy();		 //destruye la sesion actual
		redirect('/', 'refresh');	
	}
	public function add_comment(){
		$texto=$this->input->post('texto');
		$id_cliente=$this->input->post('id_cliente');
		$id_post=$this->input->post('id_post');
		$data=array('id_cliente'=>$id_cliente,'id_post'=>$id_post,'texto'=>$texto);
		if($this->comentario->addComment($data)){
			$this->session->set_flashdata('status_cliente','Comentario registrado');
			redirect('/blog-details/'.$id_post, 'refresh');
		}
	}
}

