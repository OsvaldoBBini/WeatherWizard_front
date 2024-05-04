import { ComponentProps } from "react"

interface IButton extends ComponentProps<'button'>{
  action: () => void;
  variant: string,
  text: string
}

export default function Button({variant, text, action}: IButton): JSX.Element {  
  return(
    <button
    onClick={() => action()}
    className={`min-w-32 min-h-10 pl-1 pr-1 ${variant === 'secondary' ? 'bg-gray-700' : 'bg-primary-main'} text-slate-200 
    ${variant === 'secondary' ? 'font-medium' : 'font-bold'} rounded-lg shadow-[0px_4px_2px_rgba(0,0,0,0.38)]
    hover:-translate-y-1 hover:shadow-[0px_7px_2px_rgba(0,0,0,0.38)] active:translate-y-1 
    active:shadow-[0px_4px_2px_rgba(0,0,0,0.38)]  transition-all`}>
      {text}
    </button>
  )
}