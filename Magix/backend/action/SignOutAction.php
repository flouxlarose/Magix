<?php
    require_once("action/CommonAction.php");

    class SignOutAction extends CommonAction {

        public function __construct() {
            parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
        }

        protected function executeAction() {
            $result = null;

            if(!empty($_SESSION["key"])) {
                $data = [];
                $data["key"] = $_SESSION["key"];
                $result = parent::callAPI("signout", $data);

                if($result === "SIGNED_OUT") {
                    // agis seulement sur key au lieu de session_destroy() pour ne pas perdre visibility
                    unset($_SESSION["key"]);
                }
            }

            return compact("result");
        }
    }