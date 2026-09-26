import { useState } from 'react'

type PortfolioItem = {
  title: string
  subtitle: string
  detail: string
}

const portfolio: Record<'photography' | 'ai', PortfolioItem[]> = {
  photography: [
    {
      title: 'Boudoir z mocnym charakterem',
      subtitle: 'Sesja kobieca w kreatywnym, zmysłowym klimacie.',
      detail: 'Odważne ujęcia, stylizacja i światło budujące portretową narrację.',
    },
    {
      title: 'Portret kobiecy w stylu editorial',
      subtitle: 'Projekt z kobiecą estetyką i oryginalnym pomysłem.',
      detail: 'Sesja, która ma wyglądać dobrze i przyciągać uwagę marki lub agencji.',
    },
    {
      title: 'Dokumentacja koncertowa',
      subtitle: 'Reportaż z wydarzeń muzycznych i sceny.',
      detail: 'Dynamiczne zdjęcia koncertowe pokazujące emocje, światło sceniczne i atmosferę występu.',
    },
  ],
  ai: [
    {
      title: 'Landszafty AI',
      subtitle: 'AI z neonowymi pejzażami i betonowymi strukturami.',
      detail: 'Lokalne GPU, custom promptowanie i wizualizacje gotowe do prezentacji.',
    },
    {
      title: 'Hybdrydowe systemy wizualne',
      subtitle: 'ComfyUI jako narzędzie tworzenia wideo i obrazu.',
      detail: 'Systemy węzłów, motion i generatywne klatki w spójnym procesie.',
    },
    {
      title: 'Silnik szkiców treści',
      subtitle: 'Koncepcje do social i prezentacji.',
      detail: 'Szybka dokumentacja projektów, prompty i materiały gotowe do wysyłki.',
    },
  ],
}

const tabs = [
  { key: 'photography', label: 'Fotografia' },
  { key: 'ai', label: 'Treści i AI' },
] as const

type TabKey = (typeof tabs)[number]['key']

const PortfolioTabs = () => {
  const [active, setActive] = useState<TabKey>('photography')

  return null
}

export default PortfolioTabs
