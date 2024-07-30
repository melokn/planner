import { X } from "lucide-react";
import { ComponentProps } from "react"
import { VariantProps, tv } from "tailwind-variants"

const closeButtonVariants = tv({
    base: 'text-zinc-400',

    variants: {
        closeSize:{
            default: 'size-5',
            small: 'size-4'
        }
    },

    defaultVariants: {
        closeSize: 'default'
    }
})

interface CloseButtonProps extends ComponentProps<'button'>, VariantProps<typeof closeButtonVariants>{}

export function CloseButton({closeSize, ...props}:CloseButtonProps){
    return (
        <button {...props}>
            <X className={closeButtonVariants({closeSize})} />
        </button>
    )
}