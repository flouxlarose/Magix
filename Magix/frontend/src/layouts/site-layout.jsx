import SiteLink from "../components/site-link";

export default function SiteLayout({title, showMenu = true, patate, children, ...props}) {
    // console.log(props.color);
    return  <>
                <header>ShopCVM - {title}</header>
                <div className="flex bg-indigo-900/50 text-lime-800">
                    {
                        showMenu ?
                            <nav className="w-40">
                                <ul>
                                    <li>
                                        <SiteLink href="/">Accueil</SiteLink>
                                    </li>
                                </ul>
                            </nav>
                        :
                            null
                    }
                    <main>
                        {children}
                    </main>
                </div>
                <footer></footer>
            </>
}