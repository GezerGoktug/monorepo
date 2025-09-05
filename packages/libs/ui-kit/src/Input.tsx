import { InputHTMLAttributes } from "react"


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string
}
export const Input = ({ label, className, ...props }: InputProps) => {
    return (
        <div className="col-start">
            <label >{label}</label>
            <input className={`border px-2 py-1 outline-none ${className}`} {...props} />
        </div>
    )
}

