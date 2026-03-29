export default function AuthoritySection() {
  return (
    <section className="bg-brand-bgLight py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="section-title">Ciência, cuidado e experiência no centro do seu tratamento</h2>
          <p className="text-brand-muted mt-4 max-w-3xl mx-auto">
            Nossa equipe combina atendimento humanizado com foco técnico em Implantodontia, Invisalign e Estética
            do Sorriso para entregar previsibilidade e segurança em cada etapa.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-4 mb-14">
          <div className="bg-brand-bg border border-brand-border rounded-2xl p-5 text-center">
            <p className="text-3xl font-serif text-brand-cream">15+</p>
            <p className="text-brand-muted text-sm mt-1">Anos de experiência clínica</p>
          </div>
          <div className="bg-brand-bg border border-brand-border rounded-2xl p-5 text-center">
            <p className="text-3xl font-serif text-brand-cream">8.000+</p>
            <p className="text-brand-muted text-sm mt-1">Pacientes atendidos</p>
          </div>
          <div className="bg-brand-bg border border-brand-border rounded-2xl p-5 text-center">
            <p className="text-3xl font-serif text-brand-cream">2</p>
            <p className="text-brand-muted text-sm mt-1">Unidades de atendimento</p>
          </div>
          <div className="bg-brand-bg border border-brand-border rounded-2xl p-5 text-center">
            <p className="text-3xl font-serif text-brand-cream">4</p>
            <p className="text-brand-muted text-sm mt-1">Especialidades estratégicas</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <article className="bg-brand-bg border border-brand-border rounded-2xl p-6">
            <h3 className="text-xl text-brand-cream font-semibold">Dr. Adnan de Sousa Freitas</h3>
            <p className="text-brand-muted text-sm mt-1">@dr_adnanfreitas</p>
            <p className="text-brand-muted mt-4 text-sm leading-relaxed">
              Co-fundador da MyClinic Odonto, com atuação em transformações de sorriso e reabilitação oral.
              Presença constante em casos clínicos e acompanhamento individual de pacientes.
            </p>
          </article>

          <article className="bg-brand-bg border border-brand-border rounded-2xl p-6">
            <h3 className="text-xl text-brand-cream font-semibold">Dra. Polyana Cantuaria</h3>
            <p className="text-brand-muted text-sm mt-1">@dra.polyanacantuaria</p>
            <p className="text-brand-muted mt-4 text-sm leading-relaxed">
              Co-fundadora da MyClinic Odonto, com foco em orientação educativa e protocolos atuais da
              odontologia estética e ortodontia, incluindo conteúdos sobre durabilidade de implantes.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
