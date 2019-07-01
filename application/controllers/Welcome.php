<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {

	public function index()
	{
		$this->load->view('header');
		$this->load->view('welcome_message');
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
	public function channel_list()
	{
		$this->load->view('header');
		$this->load->view('channel-list');
		$this->load->view('footer');
	}
	public function blog()
	{
		$this->load->model('post');
		$this->load->model('usuario');
		$data['posts']=$this->post->getPosts();
		$this->load->view('header');
		$this->load->view('blog',$data);
		$this->load->view('footer');
	}
	public function blog_details()
	{
		$this->load->view('header');
		$this->load->view('blog-details');
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
