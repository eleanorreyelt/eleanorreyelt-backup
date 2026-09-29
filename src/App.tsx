import { useState } from 'react'

const artworks = [
  {
    id: '01',
    title: 'Untitled No. 7',
    year: '2024',
    medium: 'Oil on canvas',
    dimensions: '120 × 90 cm',
    url: 'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?w=800&h=1000&fit=crop&auto=format',
    aspect: 'tall',
  },
  {
    id: '02',
    title: 'Composition in Blue',
    year: '2024',
    medium: 'Acrylic on linen',
    dimensions: '80 × 100 cm',
    url: 'https://images.unsplash.com/photo-1618331833071-ce81bd50d300?w=800&h=1000&fit=crop&auto=format',
    aspect: 'tall',
  },
  {
    id: '03',
    title: 'Field Study III',
    year: '2023',
    medium: 'Mixed media',
    dimensions: '150 × 100 cm',
    url: 'https://images.unsplash.com/flagged/photo-1567934150921-7632371abb32?w=900&h=600&fit=crop&auto=format',
    aspect: 'wide',
  },
  {
    id: '04',
    title: 'Interior, Dusk',
    year: '2023',
    medium: 'Oil on panel',
    dimensions: '60 × 80 cm',
    url: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=1000&fit=crop&auto=format',
    aspect: 'tall',
  },
  {
    id: '05',
    title: 'Passage',
    year: '2023',
    medium: 'Acrylic on canvas',
    dimensions: '200 × 120 cm',
    url: 'https://images.unsplash.com/photo-1533208087231-c3618eab623c?w=1000&h=650&fit=crop&auto=format',
    aspect: 'wide',
  },
  {
    id: '06',
    title: 'Figure and Ground',
    year: '2022',
    medium: 'Oil on canvas',
    dimensions: '90 × 90 cm',
    url: 'https://images.unsplash.com/photo-1533157950006-c38844053d55?w=800&h=800&fit=crop&auto=format',
    aspect: 'square',
  },
  {
    id: '07',
    title: 'Blue Threshold',
    year: '2022',
    medium: 'Encaustic on panel',
    dimensions: '70 × 50 cm',
    url: 'https://images.unsplash.com/photo-1531913764164-f85c52e6e654?w=800&h=650&fit=crop&auto=format',
    aspect: 'wide',
  },
  {
    id: '08',
    title: 'Remnant',
    year: '2022',
    medium: 'Oil on linen',
    dimensions: '110 × 140 cm',
    url: 'https://images.unsplash.com/photo-1599753894977-bc6c162417e6?w=800&h=1000&fit=crop&auto=format',
    aspect: 'tall',
  },
]

type Section = 'work' | 'about' | 'contact'

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('work')
  const [hoveredWork, setHoveredWork] = useState<string | null>(null)
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: '#F4F1EB', color: '#1C1B18', fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      {/* Header */}
      <header
        className="fixed top-0 left-0 right-0 z-50 flex items-end justify-between px-8 py-5 border-b"
        style={{
          backgroundColor: '#F4F1EB',
          borderColor: '#C8C4BA',
          backdropFilter: 'blur(8px)',
        }}
      >
        <div>
          <span
            className="text-xl tracking-tight"
            style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 400 }}
          >
            Mara Lund
          </span>
          <span
            className="ml-3 text-xs tracking-widest uppercase"
            style={{ fontFamily: "'DM Mono', monospace", color: '#6B6860' }}
          >
            Studio
          </span>
        </div>
        <nav className="flex gap-8">
          {(['work', 'about', 'contact'] as Section[]).map((s) => (
            <button
              key={s}
              onClick={() => setActiveSection(s)}
              className="text-sm transition-colors"
              style={{
                fontFamily: "'DM Mono', monospace",
                fontWeight: 300,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: activeSection === s ? '#1C1B18' : '#6B6860',
                borderBottom: activeSection === s ? '1px solid #1C1B18' : '1px solid transparent',
                paddingBottom: '2px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                borderBottomStyle: 'solid',
                borderBottomWidth: '1px',
                borderBottomColor: activeSection === s ? '#1C1B18' : 'transparent',
              }}
            >
              {s}
            </button>
          ))}
        </nav>
      </header>

      <main className="pt-20">
        {/* WORK */}
        {activeSection === 'work' && (
          <section>
            {/* Hero */}
            <div className="px-8 pt-16 pb-10 border-b" style={{ borderColor: '#C8C4BA' }}>
              <p
                className="text-xs tracking-widest uppercase mb-4"
                style={{ fontFamily: "'DM Mono', monospace", color: '#6B6860' }}
              >
                Selected Works — 2022–2024
              </p>
              <h1
                className="text-6xl md:text-8xl leading-none tracking-tight max-w-4xl"
                style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 300, fontStyle: 'italic' }}
              >
                Painting the<br />threshold between<br />presence and void.
              </h1>
            </div>

            {/* Gallery grid */}
            <div className="px-8 py-12">
              <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                {artworks.map((work) => (
                  <div
                    key={work.id}
                    className="break-inside-avoid group cursor-pointer"
                    onMouseEnter={() => setHoveredWork(work.id)}
                    onMouseLeave={() => setHoveredWork(null)}
                  >
                    <div className="relative overflow-hidden" style={{ backgroundColor: '#D6D2C8' }}>
                      <img
                        src={work.url}
                        alt={work.title}
                        className="w-full object-cover transition-transform duration-700"
                        style={{
                          transform: hoveredWork === work.id ? 'scale(1.03)' : 'scale(1)',
                          display: 'block',
                        }}
                      />
                      <div
                        className="absolute inset-0 flex items-end p-4 transition-opacity duration-300"
                        style={{
                          background: 'linear-gradient(to top, rgba(28,27,24,0.6) 0%, transparent 50%)',
                          opacity: hoveredWork === work.id ? 1 : 0,
                        }}
                      >
                        <div>
                          <p className="text-sm text-white" style={{ fontFamily: "'Fraunces', Georgia, serif", fontStyle: 'italic' }}>
                            {work.title}
                          </p>
                          <p className="text-xs mt-1" style={{ fontFamily: "'DM Mono', monospace", color: 'rgba(244,241,235,0.7)' }}>
                            {work.medium}, {work.year}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-baseline justify-between mt-2">
                      <div>
                        <span
                          className="text-xs mr-2"
                          style={{ fontFamily: "'DM Mono', monospace", color: '#6B6860' }}
                        >
                          {work.id}
                        </span>
                        <span className="text-sm" style={{ fontFamily: "'Fraunces', Georgia, serif", fontStyle: 'italic' }}>
                          {work.title}
                        </span>
                      </div>
                      <span
                        className="text-xs"
                        style={{ fontFamily: "'DM Mono', monospace", color: '#6B6860' }}
                      >
                        {work.year}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ABOUT */}
        {activeSection === 'about' && (
          <section className="px-8 pt-16 pb-24 max-w-5xl mx-auto">
            <p
              className="text-xs tracking-widest uppercase mb-12"
              style={{ fontFamily: "'DM Mono', monospace", color: '#6B6860' }}
            >
              About the Artist
            </p>
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <div className="overflow-hidden" style={{ backgroundColor: '#D6D2C8' }}>
                  <img
                    src="https://images.unsplash.com/photo-1486413869840-a99ac0a4c031?w=700&h=900&fit=crop&auto=format"
                    alt="Mara Lund in her studio"
                    className="w-full object-cover"
                    style={{ display: 'block' }}
                  />
                </div>
                <p
                  className="mt-3 text-xs"
                  style={{ fontFamily: "'DM Mono', monospace", color: '#6B6860' }}
                >
                  Studio, Oslo — 2024
                </p>
              </div>
              <div className="pt-2">
                <h2
                  className="text-4xl md:text-5xl leading-tight mb-8"
                  style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 300, fontStyle: 'italic' }}
                >
                  Mara Lund
                </h2>
                <div className="space-y-5 text-base leading-relaxed" style={{ color: '#3A3935' }}>
                  <p>
                    Mara Lund is a Norwegian painter based in Oslo. Her practice centers on the ambiguous
                    space between figuration and abstraction — canvases that hold the memory of a scene
                    without resolving it into legibility.
                  </p>
                  <p>
                    Working primarily in oil and encaustic, she builds surfaces through sustained accumulation:
                    layering, scraping, and re-painting until the painting holds its own history. She is interested
                    in the phenomenology of looking — what the eye reaches for, what it resists.
                  </p>
                  <p>
                    Recent exhibitions include <em>Stillpoint</em> at Galleri K, Oslo (2024),
                    <em>Interior Distances</em> at Studio44, Stockholm (2023), and a group show
                    at the Nordic Watercolour Museum (2022). Her work is held in private collections
                    across Scandinavia and the Netherlands.
                  </p>
                </div>

                <div
                  className="mt-12 pt-8 border-t space-y-3"
                  style={{ borderColor: '#C8C4BA' }}
                >
                  {[
                    ['Based in', 'Oslo, Norway'],
                    ['Education', 'Oslo National Academy of the Arts, MFA 2017'],
                    ['Represented by', 'Galleri K, Oslo'],
                    ['Inquiries', 'studio@maralund.no'],
                  ].map(([label, value]) => (
                    <div key={label} className="flex gap-6 text-sm">
                      <span
                        className="w-32 flex-shrink-0"
                        style={{ fontFamily: "'DM Mono', monospace", color: '#6B6860', fontSize: '11px', paddingTop: '2px' }}
                      >
                        {label}
                      </span>
                      <span style={{ color: '#1C1B18' }}>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CONTACT */}
        {activeSection === 'contact' && (
          <section className="px-8 pt-16 pb-24">
            <div className="max-w-xl mx-auto">
              <p
                className="text-xs tracking-widest uppercase mb-12"
                style={{ fontFamily: "'DM Mono', monospace", color: '#6B6860' }}
              >
                Get in Touch
              </p>
              <h2
                className="text-5xl leading-tight mb-12"
                style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 300, fontStyle: 'italic' }}
              >
                Inquiries, commissions,<br />and press.
              </h2>

              {submitted ? (
                <div className="py-16 text-center border" style={{ borderColor: '#C8C4BA' }}>
                  <p
                    className="text-2xl mb-3"
                    style={{ fontFamily: "'Fraunces', Georgia, serif", fontStyle: 'italic', fontWeight: 300 }}
                  >
                    Thank you.
                  </p>
                  <p className="text-sm" style={{ color: '#6B6860' }}>
                    A reply will follow within a few days.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {[
                    { id: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
                    { id: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
                  ].map(({ id, label, type, placeholder }) => (
                    <div key={id}>
                      <label
                        htmlFor={id}
                        className="block text-xs mb-2 tracking-widest uppercase"
                        style={{ fontFamily: "'DM Mono', monospace", color: '#6B6860' }}
                      >
                        {label}
                      </label>
                      <input
                        id={id}
                        type={type}
                        required
                        placeholder={placeholder}
                        value={formState[id as 'name' | 'email']}
                        onChange={(e) => setFormState({ ...formState, [id]: e.target.value })}
                        className="w-full bg-transparent border-b py-2 text-base outline-none transition-colors"
                        style={{
                          borderColor: '#C8C4BA',
                          color: '#1C1B18',
                          fontFamily: "'Inter', system-ui, sans-serif",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = '#8B6F5E')}
                        onBlur={(e) => (e.target.style.borderColor = '#C8C4BA')}
                      />
                    </div>
                  ))}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs mb-2 tracking-widest uppercase"
                      style={{ fontFamily: "'DM Mono', monospace", color: '#6B6860' }}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      placeholder="How can I help you?"
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full bg-transparent border-b py-2 text-base outline-none resize-none transition-colors"
                      style={{
                        borderColor: '#C8C4BA',
                        color: '#1C1B18',
                        fontFamily: "'Inter', system-ui, sans-serif",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = '#8B6F5E')}
                      onBlur={(e) => (e.target.style.borderColor = '#C8C4BA')}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 text-sm tracking-widest uppercase transition-colors"
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      backgroundColor: '#1C1B18',
                      color: '#F4F1EB',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#8B6F5E')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#1C1B18')}
                  >
                    Send Message
                  </button>
                </form>
              )}

              <div className="mt-16 pt-8 border-t" style={{ borderColor: '#C8C4BA' }}>
                <p
                  className="text-xs tracking-widest uppercase mb-4"
                  style={{ fontFamily: "'DM Mono', monospace", color: '#6B6860' }}
                >
                  Direct Contact
                </p>
                <p className="text-sm" style={{ color: '#3A3935' }}>
                  studio@maralund.no<br />
                  Represented by Galleri K, Oslo
                </p>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer
        className="border-t px-8 py-6 flex items-center justify-between"
        style={{ borderColor: '#C8C4BA' }}
      >
        <span
          className="text-xs"
          style={{ fontFamily: "'DM Mono', monospace", color: '#6B6860' }}
        >
          © 2024 Mara Lund
        </span>
        <span
          className="text-xs"
          style={{ fontFamily: "'DM Mono', monospace", color: '#6B6860' }}
        >
          Oslo, Norway
        </span>
      </footer>
    </div>
  )
}
