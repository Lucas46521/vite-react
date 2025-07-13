
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom'
import './App.css'

// Estrutura da documentação
const docsStructure = {
  'Métodos Básicos': {
    'basic': {
      'set': 'Definir valores',
      'get': 'Obter valores',
      'has': 'Verificar existência',
      'delete': 'Remover valores',
      'all': 'Listar todos os dados'
    }
  },
  'Operações Matemáticas': {
    'math': {
      'add': 'Somar valores',
      'sub': 'Subtrair valores'
    }
  },
  'Operações com Arrays': {
    'arrays': {
      'push': 'Adicionar ao final',
      'pop': 'Remover do final',
      'shift': 'Remover do início',
      'unshift': 'Adicionar ao início',
      'pull': 'Remover por valor',
      'splice': 'Operações de posição',
      'indexOf': 'Encontrar índice',
      'includes': 'Verificar conteúdo',
      'filter': 'Filtrar elementos',
      'map': 'Transformar elementos',
      'reduce': 'Reduzir a valor único'
    }
  },
  'Sistema de Busca': {
    'search': {
      'search': 'Busca global',
      'between': 'Valores entre limites',
      'startsWith': 'Chaves que começam com',
      'endsWith': 'Chaves que terminam com',
      'in': 'Valores específicos',
      'regex': 'Expressões regulares',
      'compare': 'Comparações customizadas',
      'custom': 'Filtros personalizados'
    }
  },
  'Operações Estatísticas': {
    'stats': {
      'count': 'Contar registros',
      'sum': 'Somar valores',
      'avg': 'Calcular média',
      'min': 'Valor mínimo',
      'max': 'Valor máximo',
      'aggregate': 'Agregações múltiplas'
    }
  },
  'Operações em Lote': {
    'batch': {
      'setMany': 'Definir múltiplos valores',
      'getMany': 'Obter múltiplos valores',
      'deleteMany': 'Remover múltiplos valores',
      'updateMany': 'Atualizar múltiplos valores'
    }
  },
  'Backup e Exportação': {
    'backup': {
      'backup': 'Criar backups',
      'restore': 'Restaurar backups',
      'export': 'Exportar dados',
      'import': 'Importar dados'
    }
  },
  'Monitoramento': {
    'monitoring': {
      'ping': 'Verificar conectividade'
    }
  },
  'Drivers': {
    'drivers': {
      'sqlite': 'SQLite Driver',
      'mysql': 'MySQL Driver',
      'mariadb': 'MariaDB Driver',
      'mongodb': 'MongoDB Driver',
      'json': 'JSON Driver',
      'memory': 'Memory Driver'
    }
  },
  'Configurações': {
    'config': {
      'config': 'Configurações gerais',
      'cache': 'Sistema de cache',
      'backup-auto': 'Backup automático',
      'validation': 'Validação de schema',
      'transactions': 'Sistema de transações',
      'events': 'Sistema de eventos'
    }
  }
}

function Sidebar() {
  return (
    <nav className="sidebar">
      <div className="sidebar-header">
        <h2>📚 Helper.DB Wiki</h2>
      </div>
      <div className="sidebar-content">
        {Object.entries(docsStructure).map(([categoryName, category]) => (
          <div key={categoryName} className="category">
            <h3>{categoryName}</h3>
            {Object.entries(category as Record<string, Record<string, string>>).map(([folder, pages]) => (
              <div key={folder} className="folder">
                {Object.entries(pages).map(([page]) => (
                  <Link
                    key={page}
                    to={`/docs/${folder}/${page}`}
                    className="page-link"
                  >
                    {page}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </nav>
  )
}

function HomePage() {
  return (
    <div className="content">
      <h1>📚 Documentação Helper.DB</h1>
      <p>Bem-vindo à documentação completa da Helper.DB!</p>
      
      <div className="overview">
        <h2>Visão Geral</h2>
        <p>Esta wiki contém toda a documentação da Helper.DB, organizada por categoria e funcionalidade.</p>
        
        <div className="categories-overview">
          {Object.entries(docsStructure).map(([categoryName, category]) => (
            <div key={categoryName} className="category-card">
              <h3>{categoryName}</h3>
              <p>{Object.keys(category).reduce((acc, folder) => acc + Object.keys((category as Record<string, Record<string, string>>)[folder]).length, 0)} páginas</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function DocPage() {
  const { folder, page } = useParams<{ folder: string; page: string }>()
  const [content, setContent] = useState<string>('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadContent = async () => {
      try {
        const response = await fetch(`/docs/${folder}/${page}.mdx`)
        if (response.ok) {
          const text = await response.text()
          setContent(text)
        } else {
          setContent(`# Página não encontrada\n\nA página ${folder}/${page} não foi encontrada.`)
        }
      } catch (error) {
        setContent(`# Erro ao carregar\n\nErro ao carregar a página: ${error}`)
      } finally {
        setLoading(false)
      }
    }

    loadContent()
  }, [folder, page])

  if (loading) {
    return <div className="content loading">Carregando...</div>
  }

  return (
    <div className="content">
      <div className="breadcrumb">
        <Link to="/">Home</Link> / <span>{folder}</span> / <span>{page}</span>
      </div>
      <div className="markdown-content">
        <pre>{content}</pre>
      </div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/docs/:folder/:page" element={<DocPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
