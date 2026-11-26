import { useState , useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import SiteLayout from '../layouts/site-layout';
import Button from '../components/button';

export default function Lobby() {
    const [key, setKey] = useState(null);
    const [showDeck, setShowDeck] = useState(false);
    const navigate = useNavigate();
    
    useEffect(() => {
        fetch("/api/key.php")
        .then(response => response.json())
        .then(result => {
            setKey(result);
        });
    }, []);
    
    let urlChat = "https://magix.apps-de-cours.com/server/chat/" + key;
    let urlDeck = "https://magix.apps-de-cours.com/server/deck/" + key;

    const chatRef = useRef(null);

    const handleSignOut = () => {
        evt.preventDefault();
        
        fetch("/api/sign-out.php", {
            method: 'POST',
        })
        .then(response => response.json())
        .then(result => {
            if (result == "SIGNED_OUT") {
                setKey(null);
                navigate("/");
            }
            else {
                // probleme avec la clee lors du sign out
                console.error("Error signing out:", result);
            }
        });
    };

    const handlePractice = () => {
        evt.preventDefault();
    }

    const applyStyles = ()=> {
        let styles = {
            fontColor : "#f1f5f9",
            backgroundColor : "rgba(15, 23, 42, 0.85)", // Fond sombre semi-transparent
            fontGoogleName : "Poppins",
            fontSize : "15px",
            hideIcons : false,
            inputBackgroundColor : "rgba(30, 41, 59, 0.9)",
            inputFontColor : "ffffff",
            height : "280px",
            padding: "10px",
            memberListFontColor : "#cbd5e1",
            memberListBackgroundColor : "rgba(15, 23, 42, 0.6)",
            borderColor : "rgba(148, 163, 184, 0.2)",
            hideScrollBar: true,                        // pour cacher le scroll bar
        }
        
        setTimeout(() => {
            chatRef.current.contentWindow.postMessage(JSON.stringify(styles), "*");	
        }, 100);
    }



  	return  <SiteLayout title="Lobby">
        	{key ? (
                <>
                    {showDeck && (
                        <div
                            onClick={() => setShowDeck(false)}  // background si clique alors ferme la sous-page
                            style={{
                                position: "fixed",
                                inset: 0,
                                backgroundColor: "rgba(0, 0, 0, 0.7)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                zIndex: 50,
                            }}
                        >
                            <div
                                onClick={(e) => e.stopPropagation()}    // Empeche la fermeture de la sous page en empechant le click de se propager au parent
                                style={{
                                    position: "relative",
                                    width: "85vw",
                                    height: "80vh",
                                    borderRadius: "12px",
                                    overflow: "hidden",
                                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.6)",
                                    border: "1px solid rgba(255, 255, 255, 0.2)",
                                }}
                            >
                                <Button
                                    onClick={() => setShowDeck(false)}
                                    className="absolute top-2 right-6 bg-black/70 text-white z-10"
                                >
                                    ✕
                                </Button>
                                <iframe
                                    src={urlDeck}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        border: "none",
                                        display: "block",
                                        backgroundColor: "rgba(0, 0, 0, 0.7)",
                                        padding: "10px 0px 10px 10px",
                                    }}
                                />
                            </div>
                        </div>
                    )}
                    <div>
                        <Button onClick={() => setShowDeck(true)}>Change Deck</Button>
                        <Button onClick={handleSignOut}>Sign Out</Button>
                        <Button onClick={handlePractice}>Practice</Button>
                    </div>
                    <div
                        style={{
                            position: "fixed",
                            bottom: "20px",
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: "750px",
                            maxWidth: "95vw",
                            borderRadius: "12px",
                            overflow: "hidden",
                            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.4)",
                            border: "1px solid rgba(255, 255, 255, 0.15)",
                            backdropFilter: "blur(8px)",
                        }}>
                        
                        <iframe 
                            ref={chatRef} 
                            width={700} 
                            height={240} 
                            onLoad={applyStyles} 
                            src={urlChat}
                            style={{
                                width: "100%",
                                height: "280px",
                                border: "none",
                                display: "block",
                            }}
                        />
                    </div>
                
                </>
                
            ) :
            (
                <p>access unauthorized</p>
            )}

          	</SiteLayout>
}
