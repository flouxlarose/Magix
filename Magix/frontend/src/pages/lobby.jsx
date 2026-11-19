import { useState , useEffect, useRef } from 'react';
import SiteLayout from '../layouts/site-layout';
import Button from '../components/button';

export default function Lobby() {
    const [key, setKey] = useState(null);
    
    useEffect(() => {
        fetch("/api/key.php")
        .then(response => response.json())
        .then(result => {
            setKey(result);
        });
    }, []);
    
    let url = "https://magix.apps-de-cours.com/server/chat/" + key;

    const chatRef = useRef(null);

    const applyStyles = ()=> {
        let styles = {
            fontColor : "#f1f5f9",
            backgroundColor : "rgba(15, 23, 42, 0.85)", // Fond sombre semi-transparent
            fontGoogleName : "Poppins",                 // Police moderne et lisible
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
                        src={url}
                        style={{
                            width: "100%",
                            height: "280px",
                            border: "none",
                            display: "block",
                        }}
                    />
                </div>
                
            ) :
            (
                <p>access unauthorized</p>
            )}

          	</SiteLayout>
}
