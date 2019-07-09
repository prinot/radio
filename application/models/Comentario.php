<?php class Comentario extends CI_Model {

public function getComentarios($id){
    $query = $this->db->get_where('comentarios', array('id_post'=>$id));
    if($query->num_rows()>0){
        $row=$query->result();
        return $row;        
    }
    return null;        
}
public function getComments(){
    $query = $this->db->get('comentarios');
    return $query->result();
}
public function addComment($data=array()){
    if($this->db->insert('comentarios',$data)){
        return true;
    }
    return false;
}


}
?>