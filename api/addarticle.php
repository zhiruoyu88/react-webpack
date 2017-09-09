<?php
    header('content-type:application:json;charset=utf8');  
    header('Access-Control-Allow-Origin:*');  
    header('Access-Control-Allow-Methods:POST');  
    header('Access-Control-Allow-Headers:x-requested-with,content-type'); 
    require './article.php';
    // $request_body = file_get_contents('php://input');
    $post_data = $GLOBALS['HTTP_RAW_POST_DATA'];
    $post_data = json_decode($post_data);
    $id = $post_data['id'];
    $title = $post_data['title'];
    $content = $post_data['content'];
    $author = $post_data['author'];
    $type = $post_data['type'];
    $totalread = $post_data['totalread'];
    $createdtime = $post_data['createdtime'];
    $clected = $post_data['clected'];
    $sql = 'insert into article (id,title,content,author,type,totalread,createdtime,clected) values(insert into article ('.$id.','.$title.','.$content.','.$author.','.$type.','.$totalread.','.$createdtime.','.$clected.')';