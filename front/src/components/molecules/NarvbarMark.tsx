import Logo from "../atoms/Logo";

type NavbarMarkProps = {
    logo:string,
    logoWidth:number,
    logoHeight:number,
    logoBorder?:boolean,
    logoCircle?:boolean,
    children:string,
}

const NavbarMark = (props:NavbarMarkProps) => {
    return ( 
        <div className='flex items-center h-20'>
            
            <Logo img={props.logo} width={4.5} height={4.5} border={true} isCircle={true} />
           
            <div className="ml-3 bg-dark" style={{fontSize:'1.5rem'}}>
                {props.children}
            </div>
        </div>
    );
}
 
export default NavbarMark;