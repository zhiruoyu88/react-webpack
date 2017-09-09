<?php
    class DB {
        public $dbms;     
        public $host; 
        public $dbName;    
        public $user;     
        public $pass; 

        function __construct($dbName="blog",$dbms="mysql",$host="127.0.0.1",$user="root",$pass=""){
            $this->user = $user;
            $this->pass = $pass;
            $this->dns  = "$dbms:host=$host;dbname=$dbName";
        }
        function fetchdata($sql){
            try {
                $dbn = new PDO($this->dns,$this->user,$this->pass);
                $data = $dbn->query($sql);
                return $data->fetchAll(PDO::FETCH_ASSOC);
                $dbn = null;
            } catch (PDOException $e) {
                die ("Error!: " . $e->getMessage() . "<br/>");
            }
        }
        function fetchtotal($sql){
            try {
                $dbn = new PDO($this->dns,$this->user,$this->pass);
                $data = $dbn->query($sql);
                return $data->fetchAll(PDO::FETCH_NUM);
                $dbn = null;
            } catch (PDOException $e) {
                die ("Error!: " . $e->getMessage() . "<br/>");
            }
        }
        function updatedata($sql){
            try {
                $dbn = new PDO($this->dns,$this->user,$this->pass);
                $data = $dbn->exec($sql);
                print_r($data);
                $dbn = null;
            } catch (PDOException $e) {
                die ("Error!: " . $e->getMessage() . "<br/>");
            }
        }
    }
    //默认这个不是长连接，如果需要数据库长连接，需要最后加一个参数：array(PDO::ATTR_PERSISTENT => true) 变成这样：
    // $db = new PDO($dsn, $user, $pass, array(PDO::ATTR_PERSISTENT => true));
?>