import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {

  const robots = []

  return (
    <div className={styles.container}>
      <Head>
        <title>RoboFriends</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!robots.length ? (<h1>Loading</h1>) : (
        <div>
          <h1>RoboFriends</h1>
        </div>
      )}


    </div>
  )
}
