import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>App Two</h1>
        <a href={process.env.NEXT_PUBLIC_APP_ONE_HREF}>Visit App One</a>
      </div>
    </div>
  )
}
