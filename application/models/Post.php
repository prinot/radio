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
            return true;
        }
        return false;
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
}
?>