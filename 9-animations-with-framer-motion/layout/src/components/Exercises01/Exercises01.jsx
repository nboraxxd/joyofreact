import { motion } from 'framer-motion'
import styles from '@/components/Exercises01/Exercises01.module.css'

export default function Toggle({ value, onChange, ...delegated }) {
  const SPRING = { type: 'spring', stiffness: 500, damping: 35 }

  return (
    <button
      style={{ justifyContent: value ? 'end' : 'start' }}
      type="button"
      role="switch"
      aria-checked={value}
      className={styles.wrapper}
      onClick={() => onChange(!value)}
      {...delegated}
    >
      <motion.span layout transition={SPRING} className={styles.ball} />
    </button>
  )
}
