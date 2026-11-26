<?php
    require_once("action/CommonAction.php");

    class joinGameAction extends CommonAction {

        public function __construct() {
            parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
        }

        protected function executeAction() {
            $result = null;
            
            if(!empty($_SESSION["key"]) && !empty($_POST["gameType"])) {
                $data = [];
                $data["key"] = $_SESSION["key"];
                $data["type"] = $_POST["gameType"];
                // next step les modes - standard, coop, arena
                // private key as well pour parties privees


                $result = parent::callAPI("games/auto-match", $data);
            }

            return compact("result");
        }
    }