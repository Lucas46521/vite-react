
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
      <main className="p-4">
        <Card>
          <CardContent className="py-8 text-center">
            <p className="text-red-500 mb-4">{error}</p>
            <Button asChild>
              <Link to="/">Voltar ao início</Link>
            </Button>
          </CardContent>
        </Card>
      </main>
    )
  }

  return (
    <main className="p-4 max-w-4xl mx-auto">
      <div className="mb-4">
        <Button variant="outline" asChild>
          <Link to="/">← Voltar</Link>
        </Button>
      </div>
      <Card>
        <CardContent className="p-6">
          <MarkdownRenderer content={content} />
        </CardContent>
      </Card>
    </main>
  )
}
