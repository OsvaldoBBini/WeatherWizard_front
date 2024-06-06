import { ComponentProps } from "react"
import { cn } from "../../utils/cn";
import Loader from "../Loader";

interface IButton extends ComponentProps<'button'>{
  variant: string,
  text: string,
  isLoading?: boolean
}

export default function Button({className, type = 'button', variant, text, isLoading = false, onClick}: IButton): JSX.Element {  
  return(
    <button 
    type={type}
    disabled={isLoading}
    onClick={onClick}
    className={cn(`flex items-center justify-center min-w-32 min-h-10 pl-1 pr-1 ${variant === 'secondary' ? 'bg-gray-700' : 'bg-primary-main'} text-slate-200 
    ${variant === 'secondary' ? 'font-medium' : 'font-bold'} rounded-lg shadow-[0px_4px_2px_rgba(0,0,0,0.38)]
    hover:-translate-y-1 hover:shadow-[0px_7px_2px_rgba(0,0,0,0.38)] active:translate-y-1 
    active:shadow-[0px_4px_2px_rgba(0,0,0,0.38)]  transition-all`, className)}>
      {isLoading && <Loader className="h-5 w-5"/>}
      {!isLoading && text}
    </button>
  )
}