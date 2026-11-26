<?php
    require_once("action/joinGameAction.php");
	
	$action = new joinGameAction();
	$data = $action->execute();
	
	echo json_encode($data["result"]);