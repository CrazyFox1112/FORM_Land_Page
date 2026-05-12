export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8 p-8 bg-[#f5f3ef]">
      <h1 className="font-serif text-4xl text-[#1a1814] text-center">FORM — A/B Research Test</h1>
      <p className="text-[#5c5650] text-center max-w-md">
        Две версии сайта для исследования. Выберите версию для просмотра:
      </p>
      <div className="flex gap-4 flex-wrap justify-center">
        <a 
          href="/form-a.html" 
          className="px-8 py-4 bg-[#1a1814] text-[#f5f3ef] rounded hover:bg-[#8b7355] transition-colors font-medium"
        >
          Версия A (без меток ИИ)
        </a>
        <a 
          href="/form-b.html" 
          className="px-8 py-4 bg-[#1a1814] text-[#f5f3ef] rounded hover:bg-[#8b7355] transition-colors font-medium"
        >
          Версия B (с метками ИИ)
        </a>
      </div>
    </main>
  )
}
