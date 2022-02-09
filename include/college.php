<?php
    $host = "localhost";
    $database = "skna_final2";
    $username = "root";
    $password = "";
    $sql = new mysqli($host, $username, $password, $database);
    if ($sql->connect_error) {
        die($sql->connect_error);
    }
    // else{
    //     echo("<script>alert('conected')</script>");
    // }
    if(!isset($_GET['searchTerm'])){ 
        $json = [];
    }else{
        $search = "%".$_GET['searchTerm']."%";
        $sqli = $sql->prepare("SELECT id, full_name FROM users 
                WHERE full_name LIKE ?
                LIMIT 10");
        $sqli->bind_param('s',$search);
        $sqli->execute();
        $result = $sqli->get_result();
        $json = [];
        while($row = $result->fetch_assoc()){
            $json[] = ['id'=>$row['id'], 'text'=>$row['full_name']];
        }
    }

    echo json_encode($json);
