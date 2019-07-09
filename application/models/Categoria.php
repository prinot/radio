<?php class Categoria extends CI_Model {

        public function getCategorias()
        {
                $query = $this->db->get('categorias');
                return $query->result();
        }
        public function addCategory($data=array()){
                if($this->db->insert('categorias',$data)){
                    return true;
                }
                return false;
            }


}
?>