<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/*
| -------------------------------------------------------------------------
| URI ROUTING
| -------------------------------------------------------------------------
| This file lets you re-map URI requests to specific controller functions.
|
| Typically there is a one-to-one relationship between a URL string
| and its corresponding controller class/method. The segments in a
| URL normally follow this pattern:
|
|	example.com/class/method/id/
|
| In some instances, however, you may want to remap this relationship
| so that a different class/function is called than the one
| corresponding to the URL.
|
| Please see the user guide for complete details:
|
|	https://codeigniter.com/user_guide/general/routing.html
|
| -------------------------------------------------------------------------
| RESERVED ROUTES
| -------------------------------------------------------------------------
|
| There are three reserved routes:
|
|	$route['default_controller'] = 'welcome';
|
| This route indicates which controller class should be loaded if the
| URI contains no data. In the above example, the "welcome" class
| would be loaded.
|
|	$route['404_override'] = 'errors/page_missing';
|
| This route will tell the Router which controller/method to use if those
| provided in the URL cannot be matched to a valid route.
|
|	$route['translate_uri_dashes'] = FALSE;
|
| This is not exactly a route, but allows you to automatically route
| controller and method names that contain dashes. '-' isn't a valid
| class or method name character, so it requires translation.
| When you set this option to TRUE, it will replace ALL dashes in the
| controller and method URI segments.
|
| Examples:	my-controller/index	-> my_controller/index
|		my-controller/my-method	-> my_controller/my_method
*/
$route['default_controller'] = 'welcome';
$route['404_override'] = '';
$route['translate_uri_dashes'] = FALSE;
$route['radio-programs'] = 'welcome/radio_programs';
$route['radio-jockey'] = 'welcome/radio_jockey';
$route['rj-profile'] = 'welcome/rj_profile';
$route['radio-chat'] = 'welcome/radio_chat';
$route['blog'] = 'welcome/blog';
$route['blog-details/(:num)'] = 'welcome/blog_details/$1';
$route['blog/category/(:num)'] = 'welcome/post_category/$1';
$route['blog/tags/(:num)'] = 'welcome/post_by_tag/$1';
$route['about'] = 'welcome/about';
$route['contact'] = 'welcome/contact';
$route['admin/dedicatorias/delete/(:num)'] = 'admin/delete_dedicatoria/$1';
$route['admin/posts/delete/(:num)'] = 'admin/delete_post/$1';
$route['admin/categorias/delete/(:num)'] = 'admin/delete_category/$1';
$route['admin/tags/delete/(:num)'] = 'admin/delete_tag/$1';
$route['admin/usuarios/delete/(:num)'] = 'admin/delete_user/$1';
$route['admin/posts/edit_post/(:num)'] = 'admin/edit_post_form/$1';
$route['admin/usuarios/edit_user/(:num)'] = 'admin/edit_user_form/$1';



