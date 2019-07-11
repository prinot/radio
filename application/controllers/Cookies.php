<?php
    if ( ! defined('BASEPATH')) exit('Stop Its demostrate how to set cookie');
    class Cookies extends CI_Controller {
       function __construct()
       {
           parent::__construct();
           $this->load->helper('cookie');
       }
       function set()
       {
           $cookie= array(
               'name'   => 'gmo_cookie_play',
               'value'  => 'true',
               'expire' => '3600',
           );
           $this->input->set_cookie($cookie);
           echo "Cookie set";
       }
       function get()
       {
           echo $this->input->cookie('gmo_cookie_play',true);
       }
    }