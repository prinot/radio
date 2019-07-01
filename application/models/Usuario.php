<?php class Usuario extends CI_Model {

    public function login($email){    
        $query = $this->db->get_where('users', array('email'=>$email));
        if($query->num_rows()>0){
            $row=$query->row();
            return $row;        
        }
        return null;             
    }
    public function getUsersCount(){
        $query = $this->db->get('users');  
        return $query->num_rows();
    }
    public function getAuthorNameById($id){
        $query = $this->db->get_where('users', array('id'=>$id));
        if($query->num_rows()>0){
            $row=$query->row();
            return $row->nombre;        
        }
        return null;             
    }
}
?>