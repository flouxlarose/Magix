<?php
    require_once("action/CommonAction.php");

    class SignInAction extends CommonAction {

        public function __construct() {
            parent::__construct(CommonAction::$VISIBILITY_);
        }

        protected function executeAction() {
            $data = [];
            $data["username"] = $_POST["username"];
            $data["password"] = $_POST["password"];

            $result = parent::callAPI("signin", $data);

            if ($result == "INVALID_USERNAME_PASSWORD") {
                // err
            }
            else {
                // Pour voir les informations retournées : var_dump($result);exit;
                $key = $result->key;
            }

            return [];
        }
    }