
import React from 'react'

interface SheetProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
}

interface SheetContentProps {
  side?: 'left' | 'right'
  className?: string
  children: React.ReactNode
}

export const Sheet: React.FC<SheetProps> = ({ open, onOpenChange, children }) => {
  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
          onClick={() => onOpenChange?.(false)}
        />
      )}
      {children}
    </>
  )
}

export const SheetTrigger: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>
}

export const SheetContent: React.FC<SheetContentProps> = ({ side = 'right', className = '', children }) => {
  const sideClasses = {
    left: 'left-0',
    right: 'right-0'
  }
  
  return (
    <div className={`fixed top-0 ${sideClasses[side]} z-50 h-full w-3/4 max-w-sm bg-background shadow-lg transition-transform ${className}`}>
      {children}
    </div>
  )
}
