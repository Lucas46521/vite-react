// components/HomePage.tsx
import { Link } from "react-router-dom"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { docsStructure } from "@/lib/docsStructure"

export function HomePage() {
  return (
    <main className="p-4 space-y-6">
      <section className="text-center space-y-2">
        <h1 className="text-2xl font-bold">📚 Documentação Helper.DB</h1>
        <p>Bem-vindo à documentação completa da Helper.DB!</p>
      </section>

      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(docsStructure).map(([categoryName, category]) => {
          const count = Object.values(category).reduce(
            (acc, folder) => acc + Object.keys(folder).length,
            0
          )
          return (
            <Card key={categoryName}>
              <CardHeader>
                <CardTitle>{categoryName}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{count} páginas</p>
              </CardContent>
              <CardFooter>
                <Button variant="link" asChild>
                  <Link to="/">Explorar →</Link>
                </Button>
              </CardFooter>
            </Card>
          )
        })}
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">🚀 Início Rápido</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>🔧 Métodos Básicos</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Aprenda os fundamentos: set, get, has, delete</p>
            </CardContent>
            <CardFooter>
              <Button variant="link" asChild>
                <Link to="/docs/basic/set">Começar →</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>🔍 Sistema de Busca</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Descubra como buscar e filtrar dados</p>
            </CardContent>
            <CardFooter>
              <Button variant="link" asChild>
                <Link to="/docs/search/search">Explorar →</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>📊 Arrays</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Manipule arrays com facilidade</p>
            </CardContent>
            <CardFooter>
              <Button variant="link" asChild>
                <Link to="/docs/arrays/push">Ver Exemplos →</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </main>
  )
}