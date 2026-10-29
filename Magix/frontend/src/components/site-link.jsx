import { NavLink } from "react-router";

export default function SiteLink({href, children}) {

    return  <NavLink className="underline hover:opacity-30 hover:text-lg transition-all duration-300" to={href}>
                {children}
            </NavLink>
}