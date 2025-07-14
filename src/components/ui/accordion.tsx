
import React, { useState } from 'react'

interface AccordionProps {
  type: 'single' | 'multiple'
  className?: string
  children: React.ReactNode
}

interface AccordionItemProps {
  value: string
  children: React.ReactNode
}

interface AccordionTriggerProps {
  children: React.ReactNode
}

interface AccordionContentProps {
  children: React.ReactNode
}

const AccordionContext = React.createContext<{
  openItems: string[]
  toggleItem: (value: string) => void
  type: 'single' | 'multiple'
}>({
  openItems: [],
  toggleItem: () => {},
  type: 'single'
})

export const Accordion: React.FC<AccordionProps> = ({ type, className = '', children }) => {
  const [openItems, setOpenItems] = useState<string[]>([])
  
  const toggleItem = (value: string) => {
    if (type === 'single') {
      setOpenItems(openItems.includes(value) ? [] : [value])
    } else {
      setOpenItems(prev => 
        prev.includes(value) 
          ? prev.filter(item => item !== value)
          : [...prev, value]
      )
    }
  }
  
  return (
    <AccordionContext.Provider value={{ openItems, toggleItem, type }}>
      <div className={className}>{children}</div>
    </AccordionContext.Provider>
  )
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ value, children }) => {
  return (
    <div className="border-b" data-value={value}>
      {children}
    </div>
  )
}

export const AccordionTrigger: React.FC<AccordionTriggerProps> = ({ children }) => {
  const { toggleItem } = React.useContext(AccordionContext)
  const value = React.useContext(AccordionItemContext)
  
  return (
    <button
      className="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline"
      onClick={() => toggleItem(value)}
    >
      {children}
      <span className="h-4 w-4 shrink-0 transition-transform duration-200">▼</span>
    </button>
  )
}

export const AccordionContent: React.FC<AccordionContentProps> = ({ children }) => {
  const { openItems } = React.useContext(AccordionContext)
  const value = React.useContext(AccordionItemContext)
  const isOpen = openItems.includes(value)
  
  return (
    <div className={`overflow-hidden text-sm transition-all ${isOpen ? 'pb-4 pt-0' : 'h-0'}`}>
      {children}
    </div>
  )
}

const AccordionItemContext = React.createContext<string>('')

// Update AccordionItem to provide context
export const AccordionItemWithContext: React.FC<AccordionItemProps> = ({ value, children }) => {
  return (
    <AccordionItemContext.Provider value={value}>
      <div className="border-b">{children}</div>
    </AccordionItemContext.Provider>
  )
}
