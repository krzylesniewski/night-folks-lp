import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/Night_Folks_Ost.svg"
          alt="Night Folks Logo"
          width={800}
          height={800}
          priority
        />
      </div>

    </main>
  )
}
