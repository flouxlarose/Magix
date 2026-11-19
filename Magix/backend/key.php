<?php
    require_once("action/keyAction.php");
	
	$action = new keyAction();
	$data = $action->execute();
	
	echo json_encode($data["key"]);