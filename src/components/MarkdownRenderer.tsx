
import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { motion } from 'framer-motion'

interface MarkdownRendererProps {
  content: string
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const [processedContent, setProcessedContent] = useState('')

  useEffect(() => {
    // Remove frontmatter if present
    const cleanContent = content.replace(/^---[\s\S]*?---\n?/, '')
    setProcessedContent(cleanContent)
  }, [content])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="markdown-renderer"
    >
      <ReactMarkdown
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            const language = match ? match[1] : ''
            
            if (!inline && language) {
              return (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="code-block-container"
                >
                  <div className="code-block-header">
                    <span className="language-label">{language}</span>
                    <button 
                      className="copy-button"
                      onClick={() => navigator.clipboard.writeText(String(children).replace(/\n$/, ''))}
                    >
                      📋 Copiar
                    </button>
                  </div>
                  <SyntaxHighlighter
                    style={oneDark}
                    language={language}
                    PreTag="div"
                    customStyle={{
                      margin: 0,
                      borderRadius: '0 0 8px 8px',
                      fontSize: '0.9em'
                    }}
                    {...props}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                </motion.div>
              )
            }
            
            return (
              <code className="inline-code" {...props}>
                {children}
              </code>
            )
          },
          h1: ({ children }) => (
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              {children}
            </motion.h1>
          ),
          h2: ({ children }) => (
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              {children}
            </motion.h2>
          ),
          h3: ({ children }) => (
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
            >
              {children}
            </motion.h3>
          ),
          p: ({ children }) => (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              {children}
            </motion.p>
          ),
          ul: ({ children }) => (
            <motion.ul
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.25 }}
            >
              {children}
            </motion.ul>
          ),
          blockquote: ({ children }) => (
            <motion.blockquote
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="blockquote"
            >
              {children}
            </motion.blockquote>
          ),
          table: ({ children }) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="table-container"
            >
              <table>{children}</table>
            </motion.div>
          )
        }}
      >
        {processedContent}
      </ReactMarkdown>
    </motion.div>
  )
}
