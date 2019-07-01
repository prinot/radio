<?php class Dedicatoria extends CI_Model {

        public function getDedicatorias()
        {
                $query = $this->db->get('dedicatorias');
                return $query->result();
        }
        public function getDedicatoriasCount(){
                $query = $this->db->get('dedicatorias');  
                return $query->num_rows();
        }

}
?>