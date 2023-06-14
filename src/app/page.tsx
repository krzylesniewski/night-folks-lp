import Image from 'next/image'
import styles from './page.module.css'
import SVG from '../../public/Night_Folks_Ost.svg'

export default function Home() {
  return (
    <main className={styles.main}>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src={SVG}
          alt="Night Folks Logo"
          width={800}
          height={800}
          priority
        />
      </div>

    </main>
  )
}
