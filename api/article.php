<?php
class Article {
    function __construct() {
        require './db.php';
        $this->db = new DB();
    }
    private function jsonReturn($data,$total=0){
        if($total){
            $return = array(
                'status' => 200,    
                'data' => $data,
                'message' => '获取成功',
                'total'  => $total,
            );
        }else{
            $return = array(
                'status' => 200,    
                'data' => $data,
                'message' => '获取成功',
            );
        }
        echo json_encode($return);
        die;
    }
    function success($message){
        $return = array(
            'status' => 200,    
            'message' => $message,
        );
        echo json_encode($return);die;
    }
    function error($message){
        $return = array(
            'status' => 500,    
            'message' => $message,
        );
        echo json_encode($return);die;
    }
    function getArticle($sql,$sql2){
        $db = $this->db;
        $data = $db->fetchdata($sql);
        $sql = str_replace('*','count(*)',$sql);
        $total = $db->fetchtotal($sql2)[0][0];
        $this->jsonReturn($data,$total);
    }
    function getTotal($sql){
        $db = $this->db;
        $data = $db->fetchtotal($sql);
        $this->jsonReturn($data);
    }
}

