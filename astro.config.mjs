
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import pagefind from 'astro-pagefind';
import starlight from '@astrojs/starlight';

export default defineConfig({
  build: {
    format: "file",
  },
  integrations: [
    starlight({
      title: 'Helper.DB Wiki',
      description: 'Documentação completa do Helper.DB',
      social: {
        github: 'https://github.com/seu-repo/helper-db',
      },
      sidebar: [
        {
          label: 'Início',
          link: '/',
        },
        {
          label: 'Operações Básicas',
          items: [
            { label: 'get', link: '/docs/basic/get/' },
            { label: 'set', link: '/docs/basic/set/' },
            { label: 'has', link: '/docs/basic/has/' },
            { label: 'delete', link: '/docs/basic/delete/' },
            { label: 'all', link: '/docs/basic/all/' },
          ],
        },
        {
          label: 'Arrays',
          items: [
            { label: 'push', link: '/docs/arrays/push/' },
            { label: 'pop', link: '/docs/arrays/pop/' },
            { label: 'pull', link: '/docs/arrays/pull/' },
            { label: 'shift', link: '/docs/arrays/shift/' },
            { label: 'unshift', link: '/docs/arrays/unshift/' },
            { label: 'map', link: '/docs/arrays/map/' },
            { label: 'filter', link: '/docs/arrays/filter/' },
            { label: 'reduce', link: '/docs/arrays/reduce/' },
            { label: 'includes', link: '/docs/arrays/includes/' },
            { label: 'indexOf', link: '/docs/arrays/indexOf/' },
            { label: 'splice', link: '/docs/arrays/splice/' },
          ],
        },
        {
          label: 'Operações em Lote',
          items: [
            { label: 'getMany', link: '/docs/batch/getMany/' },
            { label: 'setMany', link: '/docs/batch/setMany/' },
            { label: 'deleteMany', link: '/docs/batch/deleteMany/' },
            { label: 'updateMany', link: '/docs/batch/updateMany/' },
          ],
        },
        {
          label: 'Busca',
          items: [
            { label: 'search', link: '/docs/search/search/' },
            { label: 'startsWith', link: '/docs/search/startsWith/' },
            { label: 'endsWith', link: '/docs/search/endsWith/' },
            { label: 'in', link: '/docs/search/in/' },
            { label: 'between', link: '/docs/search/between/' },
            { label: 'regex', link: '/docs/search/regex/' },
            { label: 'compare', link: '/docs/search/compare/' },
            { label: 'custom', link: '/docs/search/custom/' },
          ],
        },
        {
          label: 'Matemática',
          items: [
            { label: 'add', link: '/docs/math/add/' },
            { label: 'sub', link: '/docs/math/sub/' },
          ],
        },
        {
          label: 'Estatísticas',
          items: [
            { label: 'count', link: '/docs/stats/count/' },
            { label: 'sum', link: '/docs/stats/sum/' },
            { label: 'avg', link: '/docs/stats/avg/' },
            { label: 'min', link: '/docs/stats/min/' },
            { label: 'max', link: '/docs/stats/max/' },
            { label: 'aggregate', link: '/docs/stats/aggregate/' },
          ],
        },
        {
          label: 'Backup',
          items: [
            { label: 'backup', link: '/docs/backup/backup/' },
            { label: 'restore', link: '/docs/backup/restore/' },
            { label: 'export', link: '/docs/backup/export/' },
            { label: 'import', link: '/docs/backup/import/' },
          ],
        },
        {
          label: 'Drivers',
          items: [
            { label: 'JSON', link: '/docs/drivers/json/' },
            { label: 'SQLite', link: '/docs/drivers/sqlite/' },
            { label: 'MySQL', link: '/docs/drivers/mysql/' },
            { label: 'MariaDB', link: '/docs/drivers/mariadb/' },
            { label: 'MongoDB', link: '/docs/drivers/mongodb/' },
            { label: 'Memory', link: '/docs/drivers/memory/' },
          ],
        },
        {
          label: 'Configuração',
          items: [
            { label: 'config', link: '/docs/config/config/' },
            { label: 'cache', link: '/docs/config/cache/' },
            { label: 'events', link: '/docs/config/events/' },
            { label: 'transactions', link: '/docs/config/transactions/' },
            { label: 'validation', link: '/docs/config/validation/' },
            { label: 'backup-auto', link: '/docs/config/backup-auto/' },
          ],
        },
        {
          label: 'Monitoramento',
          items: [
            { label: 'ping', link: '/docs/monitoring/ping/' },
          ],
        },
      ],
      customCss: [
        './src/styles/custom.css',
      ],
    }),
    mdx(),
    tailwind(),
    pagefind()
  ],
  server: {
    host: '0.0.0.0',
    port: 5000
  }
});
