// components/Header.tsx
import { Button } from "@/components/ui/button"

interface HeaderProps {
  onMenuClick: () => void
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="flex items-center justify-between p-4 border-b">
      <Button
        variant="ghost"
        size="icon"
        onClick={onMenuClick}
        className="md:hidden"
      >
        ☰
      </Button>
      <h1 className="text-xl font-bold">Helper.DB Wiki</h1>
    </header>
  )
}