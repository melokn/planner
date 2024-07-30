import { ComponentProps } from "react"
import { VariantProps, tv } from "tailwind-variants"

const inputVariants = tv({
    base: 'placeholder-zinc-400 bg-transparent text-lg outline-none',

    variants: {
        inputSize:{
            default: 'flex-1',
            small: 'w-40'
        }
    },

    defaultVariants: {
        inputSize: 'default'
    }
})

interface InputProps extends ComponentProps<'input'>, VariantProps<typeof inputVariants> {}

export function Input({ inputSize, ...props }: InputProps){
    return (
        <input
            {...props}
            className={inputVariants({ inputSize })}
        />
    )
}
