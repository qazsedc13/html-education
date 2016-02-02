<?php
	require_once "connect.php";
	function getNews ($limit) {
		global $mysqli;
		connectDB();
		$result = $mysqli->query("SELECT * FROM `news` ORDER BY `id` DESC LIMIT $limit");
		closeDB();
		return resulToArray ($result);	
	}
	
	function resulToArray ($result) {
		$array = array ();
		while (($row = $result->fetch_assoc()) != false)
			$array[] = $row;
		return $array;
	}
?>