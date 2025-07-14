// components/Sidebar.tsx
import { Link } from "react-router-dom"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { docsStructure } from "@/lib/docsStructure"

interface SidebarProps {
  isMobileOpen: boolean
  setIsMobileOpen: (open: boolean) => void
  onLinkClick: () => void
}

export function Sidebar({
  isMobileOpen,
  setIsMobileOpen,
  onLinkClick
}: SidebarProps) {
  return (
    <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
      <SheetContent side="left" className="p-0">
        <div className="p-4">
          <h2 className="text-lg font-bold mb-4">📚 Helper.DB Wiki</h2>
          <Accordion type="multiple" className="w-full">
            {Object.entries(docsStructure).map(([categoryName, category]) => (
              <AccordionItem key={categoryName} value={categoryName}>
                <AccordionTrigger>{categoryName}</AccordionTrigger>
                <AccordionContent>
                  {Object.entries(category as Record<string, Record<string, string>>).map(
                    ([folder, pages]) => (
                      <div key={folder} className="mb-2">
                        <h4 className="text-sm font-semibold mb-1">{folder}</h4>
                        <div className="flex flex-col gap-1">
                          {Object.entries(pages).map(([page, description]) => (
                            <Link
                              key={page}
                              to={`/docs/${folder}/${page}`}
                              onClick={() => {
                                onLinkClick()
                                setIsMobileOpen(false)
                              }}
                              className="text-sm text-muted-foreground hover:underline"
                              title={description}
                            >
                              {page}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </SheetContent>
    </Sheet>
  )
}