
type ButtonProps = {
    children:string,
    action?:Function
    buttonStyle?:{
        border?:string,
        borderRadius?:string,
        backgroundColor?:string,
        color?:string,
    },
    buttonClass?:string
}

const Button = (props:ButtonProps) => {

    return ( 
        <button className={props.buttonClass} style={{...props.buttonStyle,width:'max-content',padding:'0rem 0.625rem 0rem 0.625rem'}} 
        onClick={(e) => props.action}> {props.children} </button>
     );
}
 
export default Button;