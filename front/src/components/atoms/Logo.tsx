import Image from "next/image";

type LogoProps = {
    img:string,
    isCircle:boolean,
    border:boolean,
    width:number, //rem
    height:number //rem
}

const Logo = (props:LogoProps) => {

    return ( 
        <div style={{
            width:`${props.width}rem`,
            height:`${props.height}rem`,
            border: props.border ? 'solid 0.125rem #383838' : 'none',
            borderRadius: props.isCircle ? '50%' : '0%',
            padding: props.border ? '0.125rem' : '0rem'
        }}>
            <Image alt='logo' width='200' height='200' src={`/img/${props.img}`} style={{
                borderRadius: props.isCircle ? '50%' : '0%',
            }}/>
        </div>
    );
}
 
export default Logo;