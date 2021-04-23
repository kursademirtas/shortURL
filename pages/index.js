import Head from 'next/head'
import { Form } from '../component/Form'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Short Your Url</title>
        <link rel="icon" href="/favicon.ico" />
        <meta http-equiv="refresh" content="5; URL=https://www.bitdegree.org/" />
      </Head>
      <img className={styles.image} src='https://image.freepik.com/free-vector/design-inspiration-concept-illustration_114360-3957.jpg' alt=""/> 
      <Form></Form>
    </div>
  )
}


