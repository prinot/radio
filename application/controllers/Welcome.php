<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {

	public function __construct() {
		parent::__construct();
		
		$this->load->model('usuario');
		$this->load->model('post');						
	}

	public function index()
	{
		$data['posts']=$this->post->getPosts();
		$this->load->view('header');
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
		$this->load->model('post');
		$data['post']=$this->post->getPostById($id);
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

}
