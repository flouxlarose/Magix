<?php
    require_once("action/lobbyAction.php");
	
	$action = new lobbyAction();
	$data = $action->execute();
	
	echo json_encode($data["result"]);