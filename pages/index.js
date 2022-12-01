import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>PokeDex</title>
        <meta name="description" content="PokeDex" />
        <link rel="icon" href="/pokebola-go.png" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to my Poke<span>Dex</span>
        </h1>

        <p className={styles.description}>
          The API used in this project is {' '}
          <a className={styles.api} href="https://pokeapi.co" target='_blank'>PokeApi</a>
        </p>

        <div className={styles.grid}>
          <a href="/" className={styles.card}>
            <h2>Home</h2>
            <p>Here you see all the pages of this project.</p>
          </a>

          <a href="/pokemons" className={styles.card}>
            <h2>Pokemons</h2>
            <p>Here you see all the pokemons.</p>
          </a>

          {/* <a href="https://github.com/vercel/next.js/tree/canary/examples" className={styles.card}>
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer" className={styles.card}>
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a> */}
        </div>
      </main>
    </div>
  )
}
