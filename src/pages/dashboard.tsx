import { Head } from "@/components/Head"
import { Header } from "@/components/Header"
import type { FC } from "react"

const Dashboard: FC = () => {

  return (
    <>
      <Head title="Панель управления" />
      <Header />
      <h1>Dashboard</h1>
    </>
  )
}

export default Dashboard