<?php class Tag extends CI_Model {

public function getTags()
{
        $query = $this->db->get('tags');
        return $query->result();
}
public function getTagById($id)
{
    $query = $this->db->get_where('tags', array('id'=>$id));
    if($query->num_rows()>0){
        $row=$query->row();
        return $row;        
    }
    return null;             
}
public function addTag($data=array()){
    if($this->db->insert('tags',$data)){
        return true;
    }
    return false;
}
public function getTagsCount(){
    $query = $this->db->get('blog');  
    return $query->num_rows();
}
public function updateTag($data=array(),$id){
    $this->db->where('id', $id);
    if($this->db->update('tags', $data))
        return true;            
    return false;        
}
public function getPopularTags(){ 
    // obtener las tags que mas se repiten y limitar hasta 5 resultados para sacar las mas populares
    $query = $this->db->query('SELECT t1.id, t1.tag, count(t2.id_tag) AS `count`
                                FROM tags t1 LEFT JOIN post_tags t2 ON t1.id=t2.id_tag
                                GROUP BY t1.id order by count DESC limit 5');
    if($query->num_rows()>0){
        
        return $query->result();        
    }
    return null;             
}

}
?>