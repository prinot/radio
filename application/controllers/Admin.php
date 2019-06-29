<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Admin extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */
	public function index()
	{		
		$data['last']='admin';
		$this->load->view('admin/header',$data);
		$this->load->view('admin/index');
		$this->load->view('admin/footer');
	}
    public function login()
    {
        $this->load->view('admin/login');
	}
	public function add_post(){		
		$data['last']='posts';
		$this->load->view('admin/header',$data);
		$this->load->view('admin/add_post');
		$this->load->view('admin/footer');
	}
	public function posts(){		
		$data['last']='posts';
		$this->load->view('admin/header',$data);
		$this->load->view('admin/posts');
		$this->load->view('admin/footer');						
	}
}
