import Link from "next/link";

type NavLinkProps = {
    location:string,
    Linkclass?:string,
    children:string
}

const NavbarLink = (props:NavLinkProps) => {
    return ( 
        <Link href={props.location} className={props.Linkclass}>
            {props.children.trim()}
        </Link>
    );
}
 
export default NavbarLink;