
import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'ghost' | 'link'
  size?: 'default' | 'icon'
  asChild?: boolean
  children: React.ReactNode
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'default', size = 'default', asChild = false, children, ...props }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background'
    
    const variants = {
      default: 'bg-primary text-primary-foreground hover:bg-primary/90',
      ghost: 'hover:bg-accent hover:text-accent-foreground',
      link: 'underline-offset-4 hover:underline text-primary'
    }
    
    const sizes = {
      default: 'h-10 py-2 px-4',
      icon: 'h-10 w-10'
    }
    
    const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`
    
    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children, { className: classes, ref, ...props })
    }
    
    return (
      <button className={classes} ref={ref} {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = "Button"
