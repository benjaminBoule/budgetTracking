"use client"
import TransactionForm from '@/components/TransactionForm'
import TransactionList from '@/components/TransactionList'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Budget Tracking App</title>
        <meta name='description' content='Budget Tracking App' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <TransactionForm />
        <TransactionList />
      </main>
    </div>
  )
}
