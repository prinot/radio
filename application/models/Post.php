<?php class Post extends CI_Model {

    public function getPosts()
    {
            $query = $this->db->get('blog');
            return $query->result();
    }
    public function getPostById($id)
    {
        $query = $this->db->get_where('blog', array('id'=>$id));
        if($query->num_rows()>0){
            $row=$query->row();
            return $row;        
        }
        return null;             
    }
    public function addPost($data=array()){
        if($this->db->insert('blog',$data)){

            return $this->db->insert_id();
        }
        return null;
    }

    public function addTag($data){
        if($this->db->insert('post_tags',$data)){
            return true;
        }
        return null;
    }
    public function updateTags($id){
        if($this->db->delete('post_tags', array('id_post' => $id)))        
            return true;
        return false;
    }
    public function getTags($id){
        $query = $this->db->query('select t.* from tags t inner join post_tags pt on pt.id_tag  = t.id 
        inner join blog b on b.id =pt.id_post where b.id ="'.$id.'"');
        if($query->num_rows()>0){
            
            return $query->result();        
        }
        return null;             
    }
    public function getPostsCount(){
        $query = $this->db->get('blog');  
        return $query->num_rows();
    }
    public function updatePost($data=array(),$id){
        $this->db->where('id', $id);
        if($this->db->update('blog', $data))
            return true;            
        return false;        
    }
    public function getCountPerCategory(){
        $query = $this->db->query('SELECT c.id,c.nombre, COUNT(b.id_categoria) total
                                 FROM categorias c LEFT JOIN blog b ON b.id_categoria = c.id GROUP BY c.id');
        if($query->num_rows()>0){
            
            return $query->result();        
        }
        return null;             
    }
    public function getPostsByCategory($id){
        $query = $this->db->get_where('blog', array('id_categoria'=>$id));
        if($query->num_rows()>0){
            $row=$query->result();
            return $row;        
        }
    }

    public function getPostCountPerCategoryId($id){
        $query = $this->db->query('SELECT c.id,c.nombre, COUNT(b.id_categoria) total
        FROM categorias c LEFT JOIN blog b ON b.id_categoria = c.id where c.id="'.$id.'" GROUP BY c.id');
        if($query->num_rows()>0){
            
            return $query->row();        
        }
        return null;             
    }

    public function getPostsByTag($id){
        $query = $this->db->query('select b.* from blog b join post_tags pt
                                    on pt.id_post = b.id where pt.id_tag="'.$id.'"
                                    group by b.id');
        if($query->num_rows()>0){
            
            return $query->result();        
        }
        return null;             
    }

    public function getPostCountByTag($id){
        $query = $this->db->query('select count(pt.id_tag) total from blog b
         join post_tags pt on pt.id_post = b.id where pt.id_tag="'.$id.'" group by pt.id_tag');
        if($query->num_rows()>0){
            
            return $query->row();        
        }
        return null;             
    }
}

?>