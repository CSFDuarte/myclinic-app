'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Search, X } from 'lucide-react'
import { IMAGES, WHATSAPP_URL } from '@/lib/constants'

const serviceRows = [
  {
    title: 'Protocolo Dentário (All-on-4)',
    description:
      'Reabilitação completa para pacientes com perda total dos dentes, com carga imediata e foco em qualidade de vida.',
    keywords: ['protocolo', 'all-on-4', 'dentes fixos', 'reabilitação total', 'prótese fixa', 'implante fixo'],
    image: IMAGES.clinicPhoto,
  },
  {
    title: 'Implantes Dentários',
    description:
      'Planejamento individual, cirurgia segura e acompanhamento contínuo para garantir estabilidade e funcionalidade.',
    keywords: ['implante', 'implantes', 'cirurgia', 'osseointegração', 'dente perdido', 'reabilitação'],
    image: IMAGES.heroBackground,
  },
  {
    title: 'Invisalign e Estética do Sorriso',
    description:
      'Alinhadores transparentes, clareamento e soluções estéticas para harmonizar o sorriso de forma natural.',
    keywords: ['invisalign', 'alinhador', 'ortodontia', 'clareamento', 'estética', 'sorriso', 'alinhamento'],
    image: IMAGES.placeholderA,
  },
]

function filterServices(query: string) {
  if (!query.trim()) return serviceRows
  const q = query.toLowerCase().trim()
  return serviceRows.filter(
    (s) =>
      s.title.toLowerCase().includes(q) ||
      s.description.toLowerCase().includes(q) ||
      s.keywords.some((k) => k.includes(q))
  )
}

interface Props {
  initialQuery: string
}

export default function ServicosContent({ initialQuery }: Props) {
  const router = useRouter()
  const [inputValue, setInputValue] = useState(initialQuery)
  const [activeQuery, setActiveQuery] = useState(initialQuery)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setInputValue(initialQuery)
    setActiveQuery(initialQuery)
  }, [initialQuery])

  const filtered = filterServices(activeQuery)

  const applySearch = (q: string) => {
    const trimmed = q.trim()
    setActiveQuery(trimmed)
    if (trimmed) {
      router.push(`/servicos?q=${encodeURIComponent(trimmed)}`, { scroll: false })
    } else {
      router.push('/servicos', { scroll: false })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    applySearch(inputValue)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    setInputValue(val)
    setActiveQuery(val)
  }

  const handleClear = () => {
    setInputValue('')
    setActiveQuery('')
    router.push('/servicos', { scroll: false })
    inputRef.current?.focus()
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="mb-12">
        <div className="relative max-w-xl mx-auto">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-muted pointer-events-none"
          />
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="Buscar serviços (ex: implante, clareamento…)"
            className="w-full bg-brand-bgLight border border-brand-border rounded-xl pl-11 pr-10 py-3.5 text-sm text-brand-cream placeholder:text-brand-muted/60 focus:outline-none focus:border-brand-rose transition-colors"
          />
          {inputValue && (
            <button
              type="button"
              onClick={handleClear}
              aria-label="Limpar busca"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-muted hover:text-brand-cream transition-colors"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {activeQuery && (
          <p className="text-center text-sm text-brand-muted mt-3">
            {filtered.length > 0 ? (
              <>
                {filtered.length} resultado{filtered.length !== 1 ? 's' : ''} para{' '}
                <span className="text-brand-rose">&ldquo;{activeQuery}&rdquo;</span>
              </>
            ) : (
              <>
                Nenhum resultado para{' '}
                <span className="text-brand-rose">&ldquo;{activeQuery}&rdquo;</span>
              </>
            )}
          </p>
        )}
      </form>

      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand-bgLight border border-brand-border mb-5">
            <Search size={22} className="text-brand-muted" />
          </div>
          <p className="text-brand-cream text-lg font-medium mb-2">Nenhum serviço encontrado</p>
          <p className="text-brand-muted text-sm mb-6">
            Tente outros termos ou veja todos os nossos serviços.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={handleClear}
              className="btn-outline text-sm"
            >
              Ver todos os serviços
            </button>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">
              Falar com especialista
            </a>
          </div>
        </div>
      ) : (
        <div className="space-y-16">
          {filtered.map((item, index) => (
            <article
              key={item.title}
              className={`grid md:grid-cols-2 gap-10 items-center ${
                index % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
              }`}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={683}
                height={600}
                className="w-full h-72 object-cover rounded-2xl"
              />
              <div className="bg-brand-bgLight border border-brand-border rounded-2xl p-6">
                <h2 className="text-2xl font-semibold text-brand-cream mb-3">{item.title}</h2>
                <p className="text-brand-muted mb-5">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      )}
    </>
  )
}
