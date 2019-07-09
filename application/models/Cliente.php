<?php class Cliente extends CI_Model {

public function login($email){    
    $query = $this->db->get_where('clientes', array('email'=>$email));
    if($query->num_rows()>0){
        $row=$query->row();
        return $row;        
    }
    return null;             
}


public function addClient($data=array()){
    if($this->db->insert('clientes',$data)){
        return true;
    }
    return false;
}

public function getClientById($id){
    $query = $this->db->get_where('clientes', array('id'=>$id));
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
    $query = $this->db->get('clientes');
    if ($query->num_rows() > 0)
        return true;    
    else
        return false;
    
}

}
?>