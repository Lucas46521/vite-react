
export const docsStructure = [
  {
    title: "Métodos Básicos",
    slug: "basic",
    icon: "📁",
    description: "Operações fundamentais para manipular dados",
    items: [
      { title: "set - Definir valores", slug: "set" },
      { title: "get - Obter valores", slug: "get" },
      { title: "has - Verificar existência", slug: "has" },
      { title: "delete - Remover valores", slug: "delete" },
      { title: "all - Listar todos os dados", slug: "all" }
    ]
  },
  {
    title: "Operações Matemáticas",
    slug: "math",
    icon: "🔢",
    description: "Operações matemáticas com valores numéricos",
    items: [
      { title: "add - Somar valores", slug: "add" },
      { title: "sub - Subtrair valores", slug: "sub" }
    ]
  },
  {
    title: "Operações com Arrays",
    slug: "arrays",
    icon: "📊",
    description: "Manipulação avançada de arrays e listas",
    items: [
      { title: "push - Adicionar ao final", slug: "push" },
      { title: "pop - Remover do final", slug: "pop" },
      { title: "shift - Remover do início", slug: "shift" },
      { title: "unshift - Adicionar ao início", slug: "unshift" },
      { title: "pull - Remover por valor", slug: "pull" },
      { title: "splice - Operações de posição", slug: "splice" },
      { title: "indexOf - Encontrar índice", slug: "indexOf" },
      { title: "includes - Verificar conteúdo", slug: "includes" },
      { title: "filter - Filtrar elementos", slug: "filter" },
      { title: "map - Transformar elementos", slug: "map" },
      { title: "reduce - Reduzir a valor único", slug: "reduce" }
    ]
  },
  {
    title: "Sistema de Busca",
    slug: "search",
    icon: "🔍",
    description: "Ferramentas avançadas de busca e filtros",
    items: [
      { title: "search - Busca global", slug: "search" },
      { title: "between - Valores entre limites", slug: "between" },
      { title: "startsWith - Chaves que começam com", slug: "startsWith" },
      { title: "endsWith - Chaves que terminam com", slug: "endsWith" },
      { title: "in - Valores específicos", slug: "in" },
      { title: "regex - Expressões regulares", slug: "regex" },
      { title: "compare - Comparações customizadas", slug: "compare" },
      { title: "custom - Filtros personalizados", slug: "custom" }
    ]
  },
  {
    title: "Operações Estatísticas",
    slug: "stats",
    icon: "📈",
    description: "Análise e estatísticas dos dados",
    items: [
      { title: "count - Contar registros", slug: "count" },
      { title: "sum - Somar valores", slug: "sum" },
      { title: "avg - Calcular média", slug: "avg" },
      { title: "min - Valor mínimo", slug: "min" },
      { title: "max - Valor máximo", slug: "max" },
      { title: "aggregate - Agregações múltiplas", slug: "aggregate" }
    ]
  },
  {
    title: "Operações em Lote",
    slug: "batch",
    icon: "⚡",
    description: "Operações com múltiplos registros simultaneamente",
    items: [
      { title: "setMany - Definir múltiplos valores", slug: "setMany" },
      { title: "getMany - Obter múltiplos valores", slug: "getMany" },
      { title: "deleteMany - Remover múltiplos valores", slug: "deleteMany" },
      { title: "updateMany - Atualizar múltiplos valores", slug: "updateMany" }
    ]
  },
  {
    title: "Backup e Exportação",
    slug: "backup",
    icon: "💾",
    description: "Ferramentas de backup e exportação de dados",
    items: [
      { title: "backup - Criar backups", slug: "backup" },
      { title: "restore - Restaurar backups", slug: "restore" },
      { title: "export - Exportar dados", slug: "export" },
      { title: "import - Importar dados", slug: "import" }
    ]
  },
  {
    title: "Monitoramento",
    slug: "monitoring",
    icon: "📡",
    description: "Ferramentas de monitoramento e diagnóstico",
    items: [
      { title: "ping - Verificar conectividade", slug: "ping" }
    ]
  },
  {
    title: "Drivers",
    slug: "drivers",
    icon: "🔌",
    description: "Drivers para diferentes tipos de banco de dados",
    items: [
      { title: "sqlite - SQLite Driver", slug: "sqlite" },
      { title: "mysql - MySQL Driver", slug: "mysql" },
      { title: "mariadb - MariaDB Driver", slug: "mariadb" },
      { title: "mongodb - MongoDB Driver", slug: "mongodb" },
      { title: "json - JSON Driver", slug: "json" },
      { title: "memory - Memory Driver", slug: "memory" }
    ]
  },
  {
    title: "Configurações",
    slug: "config",
    icon: "⚙️",
    description: "Configurações avançadas do sistema",
    items: [
      { title: "config - Configurações gerais", slug: "config" },
      { title: "cache - Sistema de cache", slug: "cache" },
      { title: "backup-auto - Backup automático", slug: "backup-auto" },
      { title: "validation - Validação de schema", slug: "validation" },
      { title: "transactions - Sistema de transações", slug: "transactions" },
      { title: "events - Sistema de eventos", slug: "events" }
    ]
  }
];
