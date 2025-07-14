// components/DocPage.tsx
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MarkdownRenderer } from "./MarkdownRenderer"

export function DocPage() {
  const { folder, page } = useParams<{ folder: string; page: string }>()
  const [content, setContent] = useState<string>("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadContent = async () => {
      setLoading(true)
      setError(null)
      try {
        const response = await fetch(`/docs/${folder}/${page}.mdx`)
        if (response.ok) {
          const text = await response.text()
          setContent(text)
        } else {
          setError(`Página não encontrada: ${folder}/${page}`)
        }
      } catch (err) {
        setError(`Erro ao carregar a página: ${err}`)
      } finally {
        setLoading(false)
      }
    }
    loadContent()
  }, [folder, page])

  if (loading) {
    return (
      <main className="p-4">
        <Card>
          <CardContent className="py-8 text-center">
            <p>Carregando documentação...</p>
          </CardContent>
        </Card>
      </main>
    )
  }

  if (error) {
    return (
      <main className="p-4 space-y-4">
        <Card>
          <CardContent>
            <h2 className="text-xl font-bold mb-2">❌ Erro</h2>
            <p>{error}</p>
          </CardContent>
        </Card>
        <Button variant="link" asChild>
          <Link to="/">← Voltar ao Início</Link>
        </Button>
      </main>
    )
  }

  return (
    <main className="p-4 space-y-4">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link to="/">Home</Link>
        <span>/</span>
        <span>{folder}</span>
        <span>/</span>
        <span>{page}</span>
      </div>
      <Card>
        <CardContent>
          <MarkdownRenderer content={content} />
        </CardContent>
      </Card>
      <Button variant="link" asChild>
        <Link to="/">← Voltar ao Início</Link>
      </Button>
    </main>
  )
}