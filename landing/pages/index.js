import Head from 'next/head'
import Image from 'next/image'
import Main from '../components/Main'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Main />
    </div>
  )
}
