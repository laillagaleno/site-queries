import "../styles/button.css";
import { ButtonHTMLAttributes } from "react";


type ButtonProps = ButtonHTMLAttributes <HTMLButtonElement> &{
    isIcon?:boolean;
};


export default function Button({isIcon=false, ...props}: ButtonProps) {
    return (
      <button className={`button ${isIcon ? 'paddingIcon' : 'paddingButton'}`} {...props}>
      </button>
    )
  }
  
  