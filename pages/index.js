import React, { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';

export default function Home({ data }) {

  const robots = data
  const [searchField, setSearchField] = useState('')

  const onSearchChange = (e) => {
    setSearchField(e.target.value)
  }

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase())
  })

  // Need to import sega font for h1 title

  return (
    <div className={styles.container}>
      <Head>
        <title>RoboFriends</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!robots.length ? (<h1>Loading</h1>) : (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
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
