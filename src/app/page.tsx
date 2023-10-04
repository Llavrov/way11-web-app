import Main from "@/pages/main";
import Cases from "@/pages/main/cases/Cases";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Main />
      <Cases />
    </main>
  )
}
