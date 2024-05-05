import { ComponentProps } from "react"

interface IButton extends ComponentProps<'button'>{
  action: () => void;
  variant: string,
  text: string,
  isLoading?: boolean
}

export default function Button({variant, text, action, isLoading = false}: IButton): JSX.Element {  
  return(
    <button 
    type="button"
    disabled={isLoading}
    onClick={() => action()}
    className={`flex items-center justify-center min-w-32 min-h-10 pl-1 pr-1 ${variant === 'secondary' ? 'bg-gray-700' : 'bg-primary-main'} text-slate-200 
    ${variant === 'secondary' ? 'font-medium' : 'font-bold'} rounded-lg shadow-[0px_4px_2px_rgba(0,0,0,0.38)]
    hover:-translate-y-1 hover:shadow-[0px_7px_2px_rgba(0,0,0,0.38)] active:translate-y-1 
    active:shadow-[0px_4px_2px_rgba(0,0,0,0.38)]  transition-all`}>
      {isLoading &&<div className="animate-spin h-5 w-5 border-[4px] border-solid boder-slate-200 rounded-full border-b-transparent" />}
      {!isLoading && text}
    </button>
  )
}