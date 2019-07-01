<?php class Usuario extends CI_Model {

    public function login($email){    
        $query = $this->db->get_where('users', array('email'=>$email));
        if($query->num_rows()>0){
            $row=$query->row();
            return $row;        
        }
        return null;             
    }

    public function getUsers(){
        $query = $this->db->get('users');
            return $query->result();
    }
    public function addUser($data=array()){
        if($this->db->insert('users',$data)){
            return true;
        }
        return false;
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
    public function getUserById($id){
        $query = $this->db->get_where('users', array('id'=>$id));
        if($query->num_rows()>0){
            $row=$query->row();
            return $row;        
        }
        return null;             
    }
    public function updateUser($data=array(),$id){
        $this->db->where('id', $id);
        if($this->db->update('users', $data))
            return true;            
        return false;        
    }
    function email_exists($key)
{
    $this->db->where('email',$key);
    $query = $this->db->get('users');
    if ($query->num_rows() > 0)
        return true;    
    else
        return false;
    
}
}
?>