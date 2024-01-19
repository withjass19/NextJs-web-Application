import Nav from "../../components/Nav";

export default function Home() {
  return (
    <main>
      <Nav/>
      <div className="flex items-center justify-center h-[500px]">
        <h1 className="text-6xl font-semibold">Home Page</h1>
      </div>
    </main>
  )
}