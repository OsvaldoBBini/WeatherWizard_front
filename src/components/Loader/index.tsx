import { ComponentProps } from "react";
import { cn } from "../../utils/cn";

interface ILoader extends ComponentProps<'div'>{}

export default function Loader({className}: ILoader): JSX.Element {
  return <div className={cn("animate-spin border-[4px] border-solid boder-slate-200 rounded-full border-b-transparent", className)}/>
}