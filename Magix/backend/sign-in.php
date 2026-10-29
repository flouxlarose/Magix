<?php
    require_once("action/SignInAction.php");
	
	$action = new SignInAction();
	$data = $action->execute();
	
	echo json_encode($data["result"]);