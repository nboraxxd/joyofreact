import { useId, useState } from 'react'
import { motion } from 'framer-motion'

export default function Navigation() {
  const [hoveredNavItem, setHoveredNavItem] = useState(null)
  const id = useId()

  return (
    <nav onMouseLeave={() => setHoveredNavItem(null)}>
      <ul>
        {LINKS.map(({ slug, label, href, bg }) => (
          <li key={slug} style={{ zIndex: hoveredNavItem === slug ? 1 : 2 }}>
            {hoveredNavItem === slug && (
              <motion.div
                layoutId={id}
                initial={{ borderRadius: 8 }}
                className="hovered-backdrop"
                style={{ backgroundColor: bg }}
              />
            )}

            <a href={href} onMouseEnter={() => setHoveredNavItem(slug)}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

const LINKS = [
  {
    slug: 'home',
    label: 'Home',
    href: '/',
    bg: 'purple',
  },
  {
    slug: 'usage',
    label: 'Usage',
    href: '/usage',
    bg: 'green',
  },
  {
    slug: 'integrations',
    label: 'Integrations',
    href: '/integrations',
    bg: 'maroon',
  },
]
