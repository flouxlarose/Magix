<?php
    require_once("action/SignOutAction.php");
	
	$action = new SignOutAction();
	$data = $action->execute();
	
	echo json_encode($data["result"]);