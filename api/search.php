<?php
    header('content-type:application:json;charset=utf8');  
    header('Access-Control-Allow-Origin:*');  
    header('Access-Control-Allow-Methods:POST');  
    header('Access-Control-Allow-Headers:x-requested-with,content-type'); 
    require './article.php';
    function _get($str){
        return isset($_GET[$str])?$_GET[$str]:null;
    }
    $type = _get('type');
    $pn   = _get('pn');
    $id   = _get('id');
    $num  = _get('num');
    $sql = 'select * from article';
    $data = new Article();
    switch($type){
        case 'life':
            $type = 1;
            break;
        case 'learn':
            $type = 2;
            break;
    }
    if($type && empty($id)) {
        $sql .= ' where type='.$type.'';
    }else if($type && $id){
        $sql .= '"and id="'.$id.'"';
    }
    $num = $num?$num:8;
    $pn  = $pn?$pn:1;
    $offset = ($pn-1)*$num;
    $sql2 = $sql;
    $sql .= ' limit '.$offset.','.$num;
    $data->getArticle($sql,$sql2);
    