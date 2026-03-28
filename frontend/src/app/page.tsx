import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-blue-600">MyClinic Odonto</h1>
            <div className="space-x-4">
              <Link href="/about" className="text-gray-700 hover:text-blue-600">Sobre</Link>
              <Link href="/services" className="text-gray-700 hover:text-blue-600">Serviços</Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contato</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Sorrisos que transformam vidas
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Cuidado odontológico de excelência com atendimento personalizado
          </p>
          <div className="space-y-4">
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Agendar Consulta
            </Link>
            <p className="text-sm text-gray-500">
              Localizado em Campinas, SP
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🦷</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Tratamentos Personalizados</h3>
            <p className="text-gray-600">
              Cada paciente é único. Criamos planos de tratamento adaptados às suas necessidades.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">⭐</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Equipe Especializada</h3>
            <p className="text-gray-600">
              Profissionais experientes dedicados ao seu bem-estar e saúde bucal.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">💎</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Tecnologia Avançada</h3>
            <p className="text-gray-600">
              Equipamentos modernos para diagnósticos precisos e tratamentos eficientes.
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          <p>&copy; 2024 MyClinic Odonto. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
