<?php
	require_once "connect.php";
	function getNews ($limit, $id) {
		global $mysqli;
		connectDB();
		if ($id)
			$where = "WHERE `id` = ".$id;
		$result = $mysqli->query("SELECT * FROM `news` $where ORDER BY `id` DESC LIMIT $limit");
		closeDB();
		if (!$id)
			return resulToArray ($result);
		else
			return $result->fetch_assoc();
	}
	
	function resulToArray ($result) {
		$array = array ();
		while (($row = $result->fetch_assoc()) != false)
			$array[] = $row;
		return $array;
	}
?>