import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home({ data }) {

  const robots = []
  console.log(data);

  return (
    <div className={styles.container}>
      <Head>
        <title>RoboFriends</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!robots.length ? (<h1>Loading</h1>) : (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
        </div>
      )}
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()

  // console.log(res);

  return {
    props: { data }
  }
}
