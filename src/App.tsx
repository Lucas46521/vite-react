
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { MarkdownRenderer } from './components/MarkdownRenderer'
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

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
  isMobileOpen: boolean;
  onMobileClose: () => void;
}

function Sidebar({ isCollapsed, onToggle, isMobileOpen, onMobileClose }: SidebarProps) {
  return (
    <>
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mobile-overlay"
            onClick={onMobileClose}
          />
        )}
      </AnimatePresence>
      
      <motion.nav
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        className={`sidebar ${isCollapsed ? 'collapsed' : ''} ${isMobileOpen ? 'mobile-open' : ''}`}
      >
        <div className="sidebar-header">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            📚 Helper.DB Wiki
          </motion.h2>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="collapse-btn desktop-only"
            onClick={onToggle}
          >
            {isCollapsed ? '→' : '←'}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="close-btn mobile-only"
            onClick={onMobileClose}
          >
            ✕
          </motion.button>
        </div>
        
        <AnimatePresence>
          {!isCollapsed && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="sidebar-content"
            >
              {Object.entries(docsStructure).map(([categoryName, category], categoryIndex) => (
                <motion.div
                  key={categoryName}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * categoryIndex }}
                  className="category"
                >
                  <h3>{categoryName}</h3>
                  {Object.entries(category as Record<string, Record<string, string>>).map(([folder, pages]) => (
                    <div key={folder} className="folder">
                      {Object.entries(pages).map(([page, description], pageIndex) => (
                        <motion.div
                          key={page}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.05 * pageIndex }}
                          whileHover={{ x: 5 }}
                        >
                          <Link
                            to={`/docs/${folder}/${page}`}
                            className="page-link"
                            onClick={onMobileClose}
                            title={description}
                          >
                            <span className="page-name">{page}</span>
                            <span className="page-description">{description}</span>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  ))}
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}

function Header({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="header"
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="menu-btn mobile-only"
        onClick={onMenuClick}
      >
        ☰
      </motion.button>
      <h1 className="header-title">Helper.DB Wiki</h1>
    </motion.header>
  )
}

function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="content"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="hero-section"
      >
        <h1>📚 Documentação Helper.DB</h1>
        <p>Bem-vindo à documentação completa da Helper.DB!</p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="overview"
      >
        <h2>Visão Geral</h2>
        <p>Esta wiki contém toda a documentação da Helper.DB, organizada por categoria e funcionalidade.</p>
        
        <div className="categories-overview">
          {Object.entries(docsStructure).map(([categoryName, category], index) => (
            <motion.div
              key={categoryName}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 + (index * 0.1) }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="category-card"
            >
              <h3>{categoryName}</h3>
              <p>{Object.keys(category).reduce((acc, folder) => acc + Object.keys((category as Record<string, Record<string, string>>)[folder]).length, 0)} páginas</p>
              <div className="category-card-footer">
                <span className="explore-btn">Explorar →</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="quick-start"
      >
        <h2>🚀 Início Rápido</h2>
        <div className="quick-start-grid">
          <div className="quick-start-card">
            <h3>🔧 Métodos Básicos</h3>
            <p>Aprenda os fundamentos: set, get, has, delete</p>
            <Link to="/docs/basic/set" className="quick-link">Começar →</Link>
          </div>
          <div className="quick-start-card">
            <h3>🔍 Sistema de Busca</h3>
            <p>Descubra como buscar e filtrar dados</p>
            <Link to="/docs/search/search" className="quick-link">Explorar →</Link>
          </div>
          <div className="quick-start-card">
            <h3>📊 Arrays</h3>
            <p>Manipule arrays com facilidade</p>
            <Link to="/docs/arrays/push" className="quick-link">Ver Exemplos →</Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function DocPage() {
  const { folder, page } = useParams<{ folder: string; page: string }>()
  const [content, setContent] = useState<string>('')
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
      } catch (error) {
        setError(`Erro ao carregar a página: ${error}`)
      } finally {
        setLoading(false)
      }
    }

    loadContent()
  }, [folder, page])

  if (loading) {
    return (
      <div className="content">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="loading-container"
        >
          <div className="loading-spinner"></div>
          <p>Carregando documentação...</p>
        </motion.div>
      </div>
    )
  }

  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="content error-page"
      >
        <h1>❌ Erro</h1>
        <p>{error}</p>
        <Link to="/" className="back-home">← Voltar ao Início</Link>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="content"
    >
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="breadcrumb"
      >
        <Link to="/">Home</Link> 
        <span className="separator">/</span> 
        <span className="folder">{folder}</span> 
        <span className="separator">/</span> 
        <span className="page">{page}</span>
      </motion.div>
      
      <div className="doc-content">
        <MarkdownRenderer content={content} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="doc-footer"
      >
        <Link to="/" className="back-home">← Voltar ao Início</Link>
      </motion.div>
    </motion.div>
  )
}

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const toggleSidebar = () => setIsCollapsed(!isCollapsed)
  const openMobileSidebar = () => setIsMobileOpen(true)
  const closeMobileSidebar = () => setIsMobileOpen(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileOpen(false)
      }
      // Fechar sidebar em orientação landscape em telas pequenas
      if (window.innerHeight < 480 && window.innerWidth > window.innerHeight) {
        setIsMobileOpen(false)
      }
    }

    const handleOrientationChange = () => {
      // Aguardar um pouco para a orientação ser aplicada
      setTimeout(() => {
        if (window.innerWidth > 768) {
          setIsMobileOpen(false)
        }
      }, 100)
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('orientationchange', handleOrientationChange)
    
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('orientationchange', handleOrientationChange)
    }
  }, [])

  return (
    <Router>
      <div className="app">
        <Header onMenuClick={openMobileSidebar} />
        <Sidebar 
          isCollapsed={isCollapsed}
          onToggle={toggleSidebar}
          isMobileOpen={isMobileOpen}
          onMobileClose={closeMobileSidebar}
        />
        <motion.main
          layout
          className={`main-content ${isCollapsed ? 'sidebar-collapsed' : ''}`}
        >
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/docs/:folder/:page" element={<DocPage />} />
            </Routes>
          </AnimatePresence>
        </motion.main>
      </div>
    </Router>
  )
}

export default App
