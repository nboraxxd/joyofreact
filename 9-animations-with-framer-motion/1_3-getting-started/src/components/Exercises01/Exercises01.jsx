import { motion } from 'framer-motion'
import styles from '@/components/Exercises01/Exercises01.module.css'

function Toggle({ value, onChange, ...delegated }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={value}
      className={styles.wrapper}
      onClick={() => onChange(!value)}
      {...delegated}
    >
      <motion.span
        className={styles.ball}
        initial={false}
        animate={{ x: value ? '100%' : 0 }}
        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
      />
    </button>
  )
}

export default Toggle
