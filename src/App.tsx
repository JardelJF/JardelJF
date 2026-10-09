import React, { useState } from 'react';
import logo from './assets/uploads/1791587594161-0-logo.jpg';
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Shield,
  Briefcase,
  Wrench,
  Cog,
  FlaskConical,
  TrendingUp,
  Layers,
  CheckCircle2,
  Building2,
  Truck,
  Factory,
  FileText,
  Send,
  PhoneCall,
  MapPin,
  Mail,
  Check,
  AlertCircle
} from 'lucide-react';

type Page =
  | 'inicio'
  | 'quem-somos'
  | 'consultoria'
  | 'servicos-industriais'
  | 'equipamentos'
  | 'produtos-quimicos'
  | 'mentoria'
  | 'representacoes'
  | 'solucoes-integradas'
  | 'oportunidades'
  | 'contato'
  | 'privacidade';

export function App() {
  const [currentPage, setCurrentPage] = useState<Page>('inicio');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);

  // Formulário de contato
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    cargo: '',
    email: '',
    telefone: '',
    cidadeEstado: '',
    areaInteresse: 'Consultoria',
    descricao: '',
    preferenciaContato: 'E-mail',
    consentimento: false
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    setSolutionsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nome || !formData.empresa || !formData.email || !formData.telefone || !formData.descricao) {
      setFormError('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
    if (!formData.consentimento) {
      setFormError('Você deve concordar com a Política de Privacidade para enviar.');
      return;
    }
    setFormError('');
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      {/* Top Banner / Info Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <span className="flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 text-amber-500" /> AT Consultoria, Representações e Serviços — Excelência B2B e Soluções Integradas
          </span>
          <div className="flex items-center gap-4">
            <button onClick={() => handleNavigate('contato')} className="hover:text-white transition">
              Fale com o Comercial
            </button>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavigate('inicio')}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <img src={logo} alt="AT Consultoria Logo" className="h-12 w-auto object-contain" />
            <div>
              <span className="block font-bold text-slate-900 text-lg leading-tight group-hover:text-blue-900 transition">
                AT CONSULTORIA
              </span>
              <span className="block text-[10px] uppercase tracking-wider text-slate-500 font-medium">
                Representações e Serviços
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <button
              onClick={() => handleNavigate('inicio')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition ${
                currentPage === 'inicio' ? 'text-blue-900 bg-blue-50' : 'text-slate-600 hover:text-blue-900 hover:bg-slate-50'
              }`}
            >
              Início
            </button>
            <button
              onClick={() => handleNavigate('quem-somos')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition ${
                currentPage === 'quem-somos' ? 'text-blue-900 bg-blue-50' : 'text-slate-600 hover:text-blue-900 hover:bg-slate-50'
              }`}
            >
              Quem Somos
            </button>

            {/* Solutions Dropdown */}
            <div className="relative" onMouseLeave={() => setSolutionsDropdownOpen(false)}>
              <button
                onMouseEnter={() => setSolutionsDropdownOpen(true)}
                onClick={() => setSolutionsDropdownOpen(!solutionsDropdownOpen)}
                className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition ${
                  ['consultoria', 'servicos-industriais', 'equipamentos', 'produtos-quimicos', 'mentoria', 'representacoes', 'solucoes-integradas'].includes(currentPage)
                    ? 'text-blue-900 bg-blue-50'
                    : 'text-slate-600 hover:text-blue-900 hover:bg-slate-50'
                }`}
              >
                Soluções <ChevronDown className="w-4 h-4" />
              </button>

              {solutionsDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-lg shadow-xl border border-slate-100 py-2 z-50">
                  <button
                    onClick={() => handleNavigate('solucoes-integradas')}
                    className="w-full text-left px-4 py-2.5 text-sm font-semibold text-slate-900 hover:bg-blue-50 hover:text-blue-900 flex items-center gap-2 border-b border-slate-100"
                  >
                    <Layers className="w-4 h-4 text-amber-500" /> Portfólio de Soluções Integradas
                  </button>
                  <button
                    onClick={() => handleNavigate('consultoria')}
                    className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-900 flex items-center gap-2"
                  >
                    <Briefcase className="w-4 h-4 text-blue-900" /> AT Consultoria
                  </button>
                  <button
                    onClick={() => handleNavigate('servicos-industriais')}
                    className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-900 flex items-center gap-2"
                  >
                    <Wrench className="w-4 h-4 text-blue-900" /> AT Serviços
                  </button>
                  <button
                    onClick={() => handleNavigate('equipamentos')}
                    className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-900 flex items-center gap-2"
                  >
                    <Cog className="w-4 h-4 text-blue-900" /> AT Equipamentos
                  </button>
                  <button
                    onClick={() => handleNavigate('produtos-quimicos')}
                    className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-900 flex items-center gap-2"
                  >
                    <FlaskConical className="w-4 h-4 text-blue-900" /> AT Química
                  </button>
                  <button
                    onClick={() => handleNavigate('mentoria')}
                    className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-900 flex items-center gap-2"
                  >
                    <TrendingUp className="w-4 h-4 text-blue-900" /> AT Mentoria
                  </button>
                  <button
                    onClick={() => handleNavigate('representacoes')}
                    className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-900 flex items-center gap-2"
                  >
                    <Shield className="w-4 h-4 text-blue-900" /> AT Representações
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavigate('oportunidades')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition ${
                currentPage === 'oportunidades' ? 'text-blue-900 bg-blue-50' : 'text-slate-600 hover:text-blue-900 hover:bg-slate-50'
              }`}
            >
              Oportunidades
            </button>
            <button
              onClick={() => handleNavigate('contato')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition ${
                currentPage === 'contato' ? 'text-blue-900 bg-blue-50' : 'text-slate-600 hover:text-blue-900 hover:bg-slate-50'
              }`}
            >
              Contato
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => handleNavigate('contato')}
              className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transition flex items-center gap-2 text-sm"
            >
              Solicitar uma Proposta <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-blue-900 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2 shadow-xl">
            <button
              onClick={() => handleNavigate('inicio')}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-900"
            >
              Início
            </button>
            <button
              onClick={() => handleNavigate('quem-somos')}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-900"
            >
              Quem Somos
            </button>
            <div className="border-t border-slate-100 pt-2 pb-1">
              <span className="px-3 text-xs font-bold uppercase tracking-wider text-slate-400">Soluções AT</span>
              <button
                onClick={() => handleNavigate('solucoes-integradas')}
                className="block w-full text-left px-3 py-2 mt-1 rounded-md text-sm font-semibold text-blue-900 bg-blue-50"
              >
                Portfólio de Soluções Integradas
              </button>
              <button
                onClick={() => handleNavigate('consultoria')}
                className="block w-full text-left px-3 py-1.5 rounded-md text-sm text-slate-600 hover:text-blue-900"
              >
                • AT Consultoria
              </button>
              <button
                onClick={() => handleNavigate('servicos-industriais')}
                className="block w-full text-left px-3 py-1.5 rounded-md text-sm text-slate-600 hover:text-blue-900"
              >
                • AT Serviços
              </button>
              <button
                onClick={() => handleNavigate('equipamentos')}
                className="block w-full text-left px-3 py-1.5 rounded-md text-sm text-slate-600 hover:text-blue-900"
              >
                • AT Equipamentos
              </button>
              <button
                onClick={() => handleNavigate('produtos-quimicos')}
                className="block w-full text-left px-3 py-1.5 rounded-md text-sm text-slate-600 hover:text-blue-900"
              >
                • AT Química
              </button>
              <button
                onClick={() => handleNavigate('mentoria')}
                className="block w-full text-left px-3 py-1.5 rounded-md text-sm text-slate-600 hover:text-blue-900"
              >
                • AT Mentoria
              </button>
              <button
                onClick={() => handleNavigate('representacoes')}
                className="block w-full text-left px-3 py-1.5 rounded-md text-sm text-slate-600 hover:text-blue-900"
              >
                • AT Representações
              </button>
            </div>
            <button
              onClick={() => handleNavigate('oportunidades')}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-900"
            >
              Oportunidades
            </button>
            <button
              onClick={() => handleNavigate('contato')}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-900"
            >
              Contato
            </button>
            <div className="pt-4">
              <button
                onClick={() => handleNavigate('contato')}
                className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-4 py-3 rounded-lg shadow text-center"
              >
                Solicitar uma Proposta
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* ================= PÁGINA INICIAL ================= */}
        {currentPage === 'inicio' && (
          <div>
            {/* Seção 2 — Apresentação Principal */}
            <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 text-white py-24 lg:py-32 overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-3xl">
                  <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 text-amber-400 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-6">
                    <Shield className="w-4 h-4 text-amber-500" /> Soluções Estratégicas para o Mercado Empresarial
                  </div>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
                    Inteligência, soluções e serviços para <span className="text-amber-500">impulsionar seus negócios.</span>
                  </h1>
                  <p className="text-lg sm:text-xl text-slate-300 mb-10 leading-relaxed">
                    A AT Consultoria, Representações e Serviços conecta empresas a oportunidades, soluções técnicas, equipamentos, produtos e serviços especializados, com foco em eficiência, desenvolvimento comercial e parcerias de longo prazo.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={() => handleNavigate('solucoes-integradas')}
                      className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition flex items-center justify-center gap-2 text-base"
                    >
                      Conheça nossas soluções <ArrowRight className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleNavigate('contato')}
                      className="border-2 border-slate-400 hover:border-white text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl transition flex items-center justify-center gap-2 text-base"
                    >
                      Solicite uma proposta
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Seção 3 — Apresentação Institucional */}
            <section className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <span className="text-amber-600 font-bold uppercase tracking-wider text-sm">Quem Somos & Posicionamento</span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 mb-6">
                      Mais do que fornecedores, parceiros de negócios.
                    </h2>
                    <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                      A AT reúne diferentes frentes de atuação para atender com excelência a necessidades de empresas industriais, transportadoras, gestores de frotas e clientes corporativos que buscam solidez e resultados práticos.
                    </p>
                    <blockquote className="border-l-4 border-amber-500 pl-4 py-2 italic text-slate-700 bg-slate-50 rounded-r-lg mb-8 font-medium">
                      "Conectamos estratégia, soluções e execução para gerar resultados e construir parcerias de sucesso."
                    </blockquote>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-bold text-slate-900">Consultoria e Gestão</h4>
                          <p className="text-sm text-slate-600">Viabilidade e projetos técnicos.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-bold text-slate-900">Serviços Industriais</h4>
                          <p className="text-sm text-slate-600">Instalação, manutenção e tanques.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-900 rounded-2xl p-8 lg:p-12 text-white shadow-2xl relative overflow-hidden">
                    <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
                    <h3 className="text-2xl font-bold mb-4 text-amber-400">Nossos Pilares de Atuação</h3>
                    <p className="text-slate-300 mb-8 text-sm leading-relaxed">
                      Compreendemos as necessidades específicas de cada cliente para identificar oportunidades, apresentar soluções adequadas e construir relacionamentos duradouros.
                    </p>
                    <div className="space-y-4">
                      <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                        <h4 className="font-bold text-white text-base mb-1">1. Consultoria e Desenvolvimento de Negócios</h4>
                        <p className="text-xs text-slate-400">Direcionamento estratégico, viabilidade de empreendimentos e suporte regulatório.</p>
                      </div>
                      <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                        <h4 className="font-bold text-white text-base mb-1">2. Soluções Técnicas, Equipamentos e Serviços</h4>
                        <p className="text-xs text-slate-400">Bombas, filtragem de alta eficiência, manutenções e apoio operacional especializado.</p>
                      </div>
                      <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                        <h4 className="font-bold text-white text-base mb-1">3. Representação Comercial e Fornecimento</h4>
                        <p className="text-xs text-slate-400">Comercialização de peças, produtos químicos industriais e fomento a parcerias B2B.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Seção 4 — Portfólio de Soluções Integradas */}
            <section className="py-20 bg-slate-100">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <span className="text-amber-600 font-bold uppercase tracking-wider text-sm">Portfólio Completo</span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 mb-4">
                    Soluções Integradas para sua Empresa
                  </h2>
                  <p className="text-slate-600 text-base sm:text-lg">
                    Explore nossas seis áreas de negócio estruturadas para atender com precisão e competência às demandas do seu segmento.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Cartão 1 */}
                  <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-8 flex flex-col justify-between border border-slate-200 group">
                    <div>
                      <div className="w-14 h-14 bg-blue-50 text-blue-900 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-900 group-hover:text-white transition">
                        <Briefcase className="w-7 h-7" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Gestão e Estratégia</span>
                      <h3 className="text-xl font-bold text-slate-900 mt-1 mb-3">AT Consultoria</h3>
                      <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                        Viabilidade de negócios, documentações, licenciamentos, treinamentos especializados e projetos técnicos.
                      </p>
                    </div>
                    <button
                      onClick={() => handleNavigate('consultoria')}
                      className="flex items-center gap-2 text-sm font-bold text-blue-900 group-hover:text-amber-600 transition"
                    >
                      Conheça esta solução <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Cartão 2 */}
                  <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-8 flex flex-col justify-between border border-slate-200 group">
                    <div>
                      <div className="w-14 h-14 bg-blue-50 text-blue-900 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-900 group-hover:text-white transition">
                        <Wrench className="w-7 h-7" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Operação e Manutenção</span>
                      <h3 className="text-xl font-bold text-slate-900 mt-1 mb-3">AT Serviços</h3>
                      <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                        Instalações industriais, manutenções preventivas e corretivas, limpeza de tanques e recuperação de diesel contaminado.
                      </p>
                    </div>
                    <button
                      onClick={() => handleNavigate('servicos-industriais')}
                      className="flex items-center gap-2 text-sm font-bold text-blue-900 group-hover:text-amber-600 transition"
                    >
                      Conheça esta solução <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Cartão 3 */}
                  <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-8 flex flex-col justify-between border border-slate-200 group">
                    <div>
                      <div className="w-14 h-14 bg-blue-50 text-blue-900 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-900 group-hover:text-white transition">
                        <Cog className="w-7 h-7" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Tecnologia e Maquinário</span>
                      <h3 className="text-xl font-bold text-slate-900 mt-1 mb-3">AT Equipamentos</h3>
                      <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                        Bombas industriais, filtros de alta eficiência, máquinas e equipamentos, periféricos e acessórios técnicos.
                      </p>
                    </div>
                    <button
                      onClick={() => handleNavigate('equipamentos')}
                      className="flex items-center gap-2 text-sm font-bold text-blue-900 group-hover:text-amber-600 transition"
                    >
                      Conheça esta solução <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Cartão 4 */}
                  <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-8 flex flex-col justify-between border border-slate-200 group">
                    <div>
                      <div className="w-14 h-14 bg-blue-50 text-blue-900 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-900 group-hover:text-white transition">
                        <FlaskConical className="w-7 h-7" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Produtos Especiais</span>
                      <h3 className="text-xl font-bold text-slate-900 mt-1 mb-3">AT Química</h3>
                      <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                        Produtos especializados para limpeza industrial e uma linha completa de produtos químicos automotivos.
                      </p>
                    </div>
                    <button
                      onClick={() => handleNavigate('produtos-quimicos')}
                      className="flex items-center gap-2 text-sm font-bold text-blue-900 group-hover:text-amber-600 transition"
                    >
                      Conheça esta solução <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Cartão 5 */}
                  <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-8 flex flex-col justify-between border border-slate-200 group">
                    <div>
                      <div className="w-14 h-14 bg-blue-50 text-blue-900 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-900 group-hover:text-white transition">
                        <TrendingUp className="w-7 h-7" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Desenvolvimento Comercial</span>
                      <h3 className="text-xl font-bold text-slate-900 mt-1 mb-3">AT Mentoria</h3>
                      <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                        Mentoria especializada em vendas e expansão comercial para equipes e gestores B2B.
                      </p>
                    </div>
                    <button
                      onClick={() => handleNavigate('mentoria')}
                      className="flex items-center gap-2 text-sm font-bold text-blue-900 group-hover:text-amber-600 transition"
                    >
                      Conheça esta solução <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Cartão 6 */}
                  <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-8 flex flex-col justify-between border border-slate-200 group">
                    <div>
                      <div className="w-14 h-14 bg-blue-50 text-blue-900 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-900 group-hover:text-white transition">
                        <Shield className="w-7 h-7" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Fornecimento e Peças</span>
                      <h3 className="text-xl font-bold text-slate-900 mt-1 mb-3">AT Representações</h3>
                      <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                        Representação e comercialização confiável de peças e suprimentos para o mercado corporativo.
                      </p>
                    </div>
                    <button
                      onClick={() => handleNavigate('representacoes')}
                      className="flex items-center gap-2 text-sm font-bold text-blue-900 group-hover:text-amber-600 transition"
                    >
                      Conheça esta solução <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="mt-12 text-center">
                  <button
                    onClick={() => handleNavigate('solucoes-integradas')}
                    className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-950 text-white font-semibold px-8 py-3.5 rounded-xl shadow transition"
                  >
                    <Layers className="w-5 h-5 text-amber-400" /> Ver Portfólio de Soluções Integradas Completo
                  </button>
                </div>
              </div>
            </section>

            {/* Seção 5 — Por que escolher a AT? */}
            <section className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <span className="text-amber-600 font-bold uppercase tracking-wider text-sm">Nossos Diferenciais</span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 mb-4">
                    Por que escolher a AT?
                  </h2>
                  <p className="text-slate-600 text-base sm:text-lg">
                    Princípios de atuação que garantem segurança, eficiência e solidez em cada parceria comercial.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-slate-50 border border-slate-200/80 p-8 rounded-2xl">
                    <div className="w-12 h-12 bg-amber-500/10 text-amber-600 rounded-xl flex items-center justify-center font-bold text-lg mb-6">
                      01
                    </div>
                    <h3 className="font-bold text-slate-900 text-lg mb-3">Portfólio diversificado de soluções</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Capacidade de atender múltiplas necessidades da empresa em um único parceiro estratégico.
                    </p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200/80 p-8 rounded-2xl">
                    <div className="w-12 h-12 bg-amber-500/10 text-amber-600 rounded-xl flex items-center justify-center font-bold text-lg mb-6">
                      02
                    </div>
                    <h3 className="font-bold text-slate-900 text-lg mb-3">Atendimento orientado ao cliente</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Compreensão profunda das demandas corporativas para entregar o direcionamento mais adequado.
                    </p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200/80 p-8 rounded-2xl">
                    <div className="w-12 h-12 bg-amber-500/10 text-amber-600 rounded-xl flex items-center justify-center font-bold text-lg mb-6">
                      03
                    </div>
                    <h3 className="font-bold text-slate-900 text-lg mb-3">Integração estratégia e serviços</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Sinergia perfeita entre consultoria empresarial, fornecimento de equipamentos e serviços técnicos.
                    </p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200/80 p-8 rounded-2xl">
                    <div className="w-12 h-12 bg-amber-500/10 text-amber-600 rounded-xl flex items-center justify-center font-bold text-lg mb-6">
                      04
                    </div>
                    <h3 className="font-bold text-slate-900 text-lg mb-3">Busca por eficiência operacional</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Foco em otimizar processos, reduzir perdas e elevar a produtividade das operações dos clientes.
                    </p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200/80 p-8 rounded-2xl">
                    <div className="w-12 h-12 bg-amber-500/10 text-amber-600 rounded-xl flex items-center justify-center font-bold text-lg mb-6">
                      05
                    </div>
                    <h3 className="font-bold text-slate-900 text-lg mb-3">Relacionamento comercial próximo</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Atendimento dedicado, transparente e focado em construir relações de confiança mútua.
                    </p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200/80 p-8 rounded-2xl">
                    <div className="w-12 h-12 bg-amber-500/10 text-amber-600 rounded-xl flex items-center justify-center font-bold text-lg mb-6">
                      06
                    </div>
                    <h3 className="font-bold text-slate-900 text-lg mb-3">Compromisso com parcerias</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Construção de parcerias de longo prazo sustentadas em resultados sólidos e ética comercial.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Seção 6 — Setores Atendidos */}
            <section className="py-20 bg-slate-900 text-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <span className="text-amber-400 font-bold uppercase tracking-wider text-sm">Mercado Atendido</span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 mb-4">
                    Setores atendidos com excelência
                  </h2>
                  <p className="text-slate-300 text-base sm:text-lg">
                    Atendemos empresas que exigem alto padrão de desempenho, equipamentos robustos e suporte especializado.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col items-center text-center">
                    <Factory className="w-12 h-12 text-amber-400 mb-4" />
                    <h3 className="font-bold text-lg mb-2">Indústrias</h3>
                    <p className="text-xs text-slate-400">Demandas de instalações, manutenção, produtos químicos e projetos industriais.</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col items-center text-center">
                    <Truck className="w-12 h-12 text-amber-400 mb-4" />
                    <h3 className="font-bold text-lg mb-2">Transportadoras</h3>
                    <p className="text-xs text-slate-400">Soluções para frotas, limpeza de tanques, diesel e aditivos automotivos.</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col items-center text-center">
                    <Building2 className="w-12 h-12 text-amber-400 mb-4" />
                    <h3 className="font-bold text-lg mb-2">Gestores de Frotas & Infraestrutura</h3>
                    <p className="text-xs text-slate-400">Equipamentos de alta performance e suporte técnico contínuo.</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col items-center text-center">
                    <Layers className="w-12 h-12 text-amber-400 mb-4" />
                    <h3 className="font-bold text-lg mb-2">Operações Especializadas</h3>
                    <p className="text-xs text-slate-400">Empresas que necessitam de produtos técnicos, consultoria e representação.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Seção 7 — Oportunidades Estratégicas */}
            <section className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <span className="text-amber-600 font-bold uppercase tracking-wider text-sm">Visão de Mercado</span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 mb-6">
                      Oportunidades estratégicas e novos projetos
                    </h2>
                    <p className="text-slate-600 text-base mb-6 leading-relaxed">
                      A AT acompanha ativamente as tendências e demandas do mercado para viabilizar projetos comerciais de alto impacto em múltiplos setores.
                    </p>
                    <p className="text-slate-600 text-base mb-8 leading-relaxed">
                      Apresentamos frentes e oportunidades em avaliação para clientes e parceiros interessados em novos investimentos e parcerias comerciais.
                    </p>
                    <button
                      onClick={() => handleNavigate('oportunidades')}
                      className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-950 text-white font-semibold px-6 py-3 rounded-xl transition"
                    >
                      Ver todas as oportunidades <ArrowRight className="w-4 h-4 text-amber-400" />
                    </button>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl space-y-4">
                    <h3 className="font-bold text-slate-900 text-lg mb-2">Destaques em Avaliação:</h3>
                    <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200/60">
                      <Check className="w-5 h-5 text-amber-500 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">Usinas de Etanol e Açúcar</h4>
                        <p className="text-xs text-slate-600">Comercialização e projetos para o setor sucroenergético.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200/60">
                      <Check className="w-5 h-5 text-amber-500 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">Setor de Laranja e Agronegócio</h4>
                        <p className="text-xs text-slate-600">Oportunidades associadas à produção e cadeia de valor.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200/60">
                      <Check className="w-5 h-5 text-amber-500 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">ARLA 32, Alimentos e Bebidas</h4>
                        <p className="text-xs text-slate-400 font-medium">
                          Projetos comerciais para ARLA 32, água, refrigerantes, gelo e soluções de empilhamento.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Seção 8 — Chamada Comercial */}
            <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-950 text-white text-center">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
                  Vamos encontrar a solução ideal para o seu negócio?
                </h2>
                <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                  Entre em contato com a AT e apresente sua necessidade. Nossa equipe poderá avaliar a demanda e orientar você sobre as soluções disponíveis.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button
                    onClick={() => handleNavigate('contato')}
                    className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-8 py-4 rounded-xl shadow-lg transition text-base"
                  >
                    Solicitar uma Proposta
                  </button>
                  <button
                    onClick={() => handleNavigate('contato')}
                    className="border-2 border-white/40 hover:border-white text-white font-semibold px-8 py-4 rounded-xl transition text-base"
                  >
                    Falar com a AT
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ================= PÁGINA: QUEM SOMOS ================= */}
        {currentPage === 'quem-somos' && (
          <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <span className="text-amber-600 font-bold uppercase tracking-wider text-sm">Institucional</span>
                <h1 className="text-4xl font-extrabold text-slate-900 mt-2 mb-4">Quem Somos</h1>
                <p className="text-lg text-slate-600">
                  Conectando estratégia, soluções e execução para gerar resultados e construir parcerias de sucesso.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Nossa Essência e Atuação</h2>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    A <strong>AT Consultoria, Representações e Serviços</strong> é uma empresa integrada que atua lado a lado com seus clientes para solucionar desafios complexos, fornecer equipamentos de alto padrão, executar serviços técnicos especializados e fomentar o desenvolvimento de novos negócios.
                  </p>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    Nosso compromisso inegociável é compreender profundamente as necessidades operacionais e estratégicas de indústrias, transportadoras e gestores de frotas, apresentando respostas ágeis e eficientes.
                  </p>
                  <blockquote className="border-l-4 border-amber-500 pl-4 py-2 italic text-slate-800 bg-slate-50 font-medium my-6">
                    "Trabalhamos para ser o elo de confiança que une as melhores soluções do mercado aos objetivos de nossos clientes."
                  </blockquote>
                </div>
                <div className="bg-slate-900 text-white p-8 sm:p-10 rounded-2xl shadow-xl">
                  <h3 className="text-xl font-bold text-amber-400 mb-6">Nossos Pilares Fundamentais</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-base text-white mb-1">1. Consultoria e Desenvolvimento de Negócios</h4>
                      <p className="text-sm text-slate-300">Direcionamento estratégico, viabilidade e suporte técnico e regulatório.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-base text-white mb-1">2. Soluções Técnicas, Equipamentos e Serviços</h4>
                      <p className="text-sm text-slate-300">Bombas, sistemas de filtragem, manutenções preventivas e corretivas.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-base text-white mb-1">3. Representação Comercial e Fornecimento</h4>
                      <p className="text-sm text-slate-300">Peças, produtos químicos e parcerias comerciais B2B sólidas.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Valores */}
              <div className="bg-slate-50 rounded-2xl p-8 sm:p-12 border border-slate-200">
                <h2 className="text-2xl font-bold text-slate-900 text-center mb-10">Nossos Princípios e Valores</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-amber-500" /> Ética e Transparência
                    </h3>
                    <p className="text-xs text-slate-600">Relações comerciais pautadas na verdade, integridade e respeito mútuo com clientes e parceiros.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-amber-500" /> Foco em Resultados
                    </h3>
                    <p className="text-xs text-slate-600">Busca constante por eficiência operacional e retorno real para os investimentos dos nossos clientes.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-amber-500" /> Parcerias Duradouras
                    </h3>
                    <p className="text-xs text-slate-600">Acreditamos em relacionamentos de longo prazo construídos através da excelência no atendimento.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= PÁGINA: AT CONSULTORIA ================= */}
        {currentPage === 'consultoria' && (
          <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <span className="text-amber-600 font-bold uppercase tracking-wider text-sm">Área de Negócio</span>
                <h1 className="text-4xl font-extrabold text-slate-900 mt-2 mb-4">AT Consultoria</h1>
                <p className="text-lg text-slate-600">
                  Gestão, Estratégia e Viabilidade de Negócios para Empresas de Alto Desempenho.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Consultoria Especializada</h2>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    A frente de <strong>Consultoria da AT</strong> apoia empresários, diretores e gestores na estruturação de novos projetos, análise de viabilidade técnica e financeira, além de suporte regulatório e documentações essenciais.
                  </p>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Capacitamos equipes através de treinamentos especializados focados em aprimorar processos internos e tomada de decisão estratégica.
                  </p>
                  <button
                    onClick={() => handleNavigate('contato')}
                    className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-3.5 rounded-xl shadow transition"
                  >
                    Solicitar Proposta de Consultoria
                  </button>
                </div>
                <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl">
                  <h3 className="text-xl font-bold text-amber-400 mb-6">Serviços Confirmados:</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Viabilidade de negócios:</strong> Análise completa de projetos, investimentos e retorno operacional.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Documentações e licenciamentos:</strong> Suporte em conformidade regulatória e exigências técnicas.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Treinamentos especializados:</strong> Capacitação de equipes operacionais e comerciais.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Projetos técnicos:</strong> Elaboração e acompanhamento de diretrizes de engenharia e operação.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= PÁGINA: AT SERVIÇOS (INDúSTRIAIS) ================= */}
        {currentPage === 'servicos-industriais' && (
          <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <span className="text-amber-600 font-bold uppercase tracking-wider text-sm">Área de Negócio</span>
                <h1 className="text-4xl font-extrabold text-slate-900 mt-2 mb-4">AT Serviços</h1>
                <p className="text-lg text-slate-600">
                  Operação, Manutenção Preventiva/Corretiva e Limpeza de Tanques Industriais.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Serviços Técnicos Industriais</h2>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    A <strong>AT Serviços</strong> oferece suporte operacional completo para indústrias, transportadoras e frotas, garantindo alta disponibilidade de equipamentos e tanques com segurança rigorosa.
                  </p>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Destacamo-nos pela excelência na limpeza de tanques e na recuperação de diesel contaminado, evitando perdas financeiras e assegurando a qualidade dos combustíveis.
                  </p>
                  <button
                    onClick={() => handleNavigate('contato')}
                    className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-3.5 rounded-xl shadow transition"
                  >
                    Solicitar Proposta de Serviços
                  </button>
                </div>
                <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl">
                  <h3 className="text-xl font-bold text-amber-400 mb-6">Serviços e Soluções Confirmados:</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Instalações industriais:</strong> Montagem e estruturação de sistemas operacionais.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Manutenções preventivas e corretivas:</strong> Conservação de ativos e correção de falhas.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Limpeza de tanques:</strong> Procedimentos especializados para tanques de combustíveis e armazenamento.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Recuperação de diesel contaminado:</strong> Filtragem e remediação para retorno ao uso seguro.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= PÁGINA: AT EQUIPAMENTOS ================= */}
        {currentPage === 'equipamentos' && (
          <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <span className="text-amber-600 font-bold uppercase tracking-wider text-sm">Área de Negócio</span>
                <h1 className="text-4xl font-extrabold text-slate-900 mt-2 mb-4">AT Equipamentos</h1>
                <p className="text-lg text-slate-600">
                  Tecnologia, Maquinário, Bombas Industriais e Sistemas de Alta Eficiência.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Equipamentos e Máquinas de Alto Padrão</h2>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    A <strong>AT Equipamentos</strong> fornece maquinário robusto, bombas industriais e filtros de alta eficiência projetados para suportar as condições mais exigentes do mercado industrial e de transportes.
                  </p>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Oferecemos orientação técnica para que sua empresa selecione exatamente o periférico ou acessório ideal para a sua linha de produção ou frota.
                  </p>
                  <button
                    onClick={() => handleNavigate('contato')}
                    className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-3.5 rounded-xl shadow transition"
                  >
                    Solicitar Proposta de Equipamentos
                  </button>
                </div>
                <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl">
                  <h3 className="text-xl font-bold text-amber-400 mb-6">Produtos e Soluções Confirmados:</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Bombas industriais:</strong> Equipamentos de vazão e recalque para diversas aplicações.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Filtros de alta eficiência:</strong> Sistemas de filtragem para diesel, óleos e fluidos técnicos.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Máquinas e equipamentos:</strong> Maquinário corporativo para o setor industrial e logístico.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Periféricos e acessórios:</strong> Componentes complementares para alta performance.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= PÁGINA: AT QUÍMICA ================= */}
        {currentPage === 'produtos-quimicos' && (
          <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <span className="text-amber-600 font-bold uppercase tracking-wider text-sm">Área de Negócio</span>
                <h1 className="text-4xl font-extrabold text-slate-900 mt-2 mb-4">AT Química</h1>
                <p className="text-lg text-slate-600">
                  Produtos Especiais para Limpeza Industrial e Linha Química Automotiva.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Soluções Químicas Especializadas</h2>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    A <strong>AT Química</strong> desenvolve e fornece compostos químicos de alto rendimento para higienização industrial rigorosa e manutenção automotiva profissional.
                  </p>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Nossos produtos atendem às rigorosas exigências de indústrias e transportadoras que buscam limpeza profunda, segurança química e proteção de ativos.
                  </p>
                  <button
                    onClick={() => handleNavigate('contato')}
                    className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-3.5 rounded-xl shadow transition"
                  >
                    Solicitar Proposta de Produtos Químicos
                  </button>
                </div>
                <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl">
                  <h3 className="text-xl font-bold text-amber-400 mb-6">Linhas de Produtos Confirmadas:</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Produtos para limpeza industrial:</strong> Desengraxantes, detergentes e soluções para pisos e maquinário pesados.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Produtos químicos automotivos:</strong> Aditivos, fluidos e compostos para manutenção de frotas e veículos pesados.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= PÁGINA: AT MENTORIA ================= */}
        {currentPage === 'mentoria' && (
          <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <span className="text-amber-600 font-bold uppercase tracking-wider text-sm">Área de Negócio</span>
                <h1 className="text-4xl font-extrabold text-slate-900 mt-2 mb-4">AT Mentoria</h1>
                <p className="text-lg text-slate-600">
                  Mentoria Comercial Especializada para Equipes e Gestores B2B.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Desenvolvimento Comercial de Alta Performance</h2>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    A <strong>AT Mentoria</strong> capacita equipes de vendas e gestores empresariais a estruturar processos comerciais eficientes, prospecção qualificada e fechamento de negócios B2B com consistência.
                  </p>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Apoiamos sua empresa na construção de uma cultura comercial orientada a resultados e expansão sustentável.
                  </p>
                  <button
                    onClick={() => handleNavigate('contato')}
                    className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-3.5 rounded-xl shadow transition"
                  >
                    Solicitar Proposta de Mentoria
                  </button>
                </div>
                <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl">
                  <h3 className="text-xl font-bold text-amber-400 mb-6">Foco do Serviço:</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Mentoria especializada em vendas:</strong> Treinamento prático de técnicas de negociação B2B.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Gestão de funil e prospecção:</strong> Otimização de rotinas comerciais e conversão.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= PÁGINA: AT REPRESENTAÇÕES ================= */}
        {currentPage === 'representacoes' && (
          <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <span className="text-amber-600 font-bold uppercase tracking-wider text-sm">Área de Negócio</span>
                <h1 className="text-4xl font-extrabold text-slate-900 mt-2 mb-4">AT Representações</h1>
                <p className="text-lg text-slate-600">
                  Representação Comercial, Fornecimento de Peças e Parcerias Autorizadas.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Fornecimento Confiável de Peças e Suprimentos</h2>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    A <strong>AT Representações</strong> atua na comercialização e representação comercial de peças técnicas e componentes essenciais para a operação industrial e de frotas.
                  </p>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Trabalhamos estritamente com marcas autorizadas e relações comerciais confirmadas para garantir procedência e qualidade superior.
                  </p>
                  <button
                    onClick={() => handleNavigate('contato')}
                    className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-3.5 rounded-xl shadow transition"
                  >
                    Consultar Peças e Marcas
                  </button>
                </div>
                <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl">
                  <h3 className="text-xl font-bold text-amber-400 mb-6">Atuação em Representações:</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Representação comercial autorizada:</strong> Intermediação de negócios com garantia de conformidade.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Comercialização de peças:</strong> Suprimentos e componentes para maquinário e frotas.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= PÁGINA: SOLUÇÕES INTEGRADAS ================= */}
        {currentPage === 'solucoes-integradas' && (
          <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <span className="text-amber-600 font-bold uppercase tracking-wider text-sm">Portfólio Completo</span>
                <h1 className="text-4xl font-extrabold text-slate-900 mt-2 mb-4">Soluções Integradas AT</h1>
                <p className="text-lg text-slate-600">
                  Conheça todas as frentes estruturadas da AT Consultoria, Representações e Serviços.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl flex flex-col justify-between">
                  <div>
                    <Briefcase className="w-10 h-10 text-blue-900 mb-4" />
                    <h3 className="text-xl font-bold text-slate-900 mb-2">AT Consultoria</h3>
                    <p className="text-sm text-slate-600 mb-6">Viabilidade de negócios, documentações, licenciamentos, treinamentos e projetos técnicos.</p>
                  </div>
                  <button onClick={() => handleNavigate('consultoria')} className="text-blue-900 font-bold text-sm flex items-center gap-1 hover:text-amber-600">
                    Ver detalhes <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl flex flex-col justify-between">
                  <div>
                    <Wrench className="w-10 h-10 text-blue-900 mb-4" />
                    <h3 className="text-xl font-bold text-slate-900 mb-2">AT Serviços</h3>
                    <p className="text-sm text-slate-600 mb-6">Instalações industriais, manutenções preventivas/corretivas, limpeza de tanques e diesel.</p>
                  </div>
                  <button onClick={() => handleNavigate('servicos-industriais')} className="text-blue-900 font-bold text-sm flex items-center gap-1 hover:text-amber-600">
                    Ver detalhes <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl flex flex-col justify-between">
                  <div>
                    <Cog className="w-10 h-10 text-blue-900 mb-4" />
                    <h3 className="text-xl font-bold text-slate-900 mb-2">AT Equipamentos</h3>
                    <p className="text-sm text-slate-600 mb-6">Bombas industriais, filtros de alta eficiência, máquinas, periféricos e acessórios.</p>
                  </div>
                  <button onClick={() => handleNavigate('equipamentos')} className="text-blue-900 font-bold text-sm flex items-center gap-1 hover:text-amber-600">
                    Ver detalhes <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl flex flex-col justify-between">
                  <div>
                    <FlaskConical className="w-10 h-10 text-blue-900 mb-4" />
                    <h3 className="text-xl font-bold text-slate-900 mb-2">AT Química</h3>
                    <p className="text-sm text-slate-600 mb-6">Produtos especializados para limpeza industrial e linha de produtos químicos automotivos.</p>
                  </div>
                  <button onClick={() => handleNavigate('produtos-quimicos')} className="text-blue-900 font-bold text-sm flex items-center gap-1 hover:text-amber-600">
                    Ver detalhes <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl flex flex-col justify-between">
                  <div>
                    <TrendingUp className="w-10 h-10 text-blue-900 mb-4" />
                    <h3 className="text-xl font-bold text-slate-900 mb-2">AT Mentoria</h3>
                    <p className="text-sm text-slate-600 mb-6">Mentoria especializada em vendas e desenvolvimento comercial para o mercado B2B.</p>
                  </div>
                  <button onClick={() => handleNavigate('mentoria')} className="text-blue-900 font-bold text-sm flex items-center gap-1 hover:text-amber-600">
                    Ver detalhes <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl flex flex-col justify-between">
                  <div>
                    <Shield className="w-10 h-10 text-blue-900 mb-4" />
                    <h3 className="text-xl font-bold text-slate-900 mb-2">AT Representações</h3>
                    <p className="text-sm text-slate-600 mb-6">Representação comercial e comercialização de peças e suprimentos autorizados.</p>
                  </div>
                  <button onClick={() => handleNavigate('representacoes')} className="text-blue-900 font-bold text-sm flex items-center gap-1 hover:text-amber-600">
                    Ver detalhes <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= PÁGINA: OPORTUNIDADES ================= */}
        {currentPage === 'oportunidades' && (
          <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <span className="text-amber-600 font-bold uppercase tracking-wider text-sm">Visão Estratégica</span>
                <h1 className="text-4xl font-extrabold text-slate-900 mt-2 mb-4">Oportunidades de Negócio</h1>
                <p className="text-lg text-slate-600">
                  Projetos, frentes em avaliação e novas oportunidades comerciais monitoradas pela AT.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl">
                  <h3 className="text-lg font-bold text-slate-900 mb-3">Usinas de Etanol e Açúcar</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Comercialização de usinas de etanol e açúcar e projetos estratégicos para o setor sucroenergético.
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl">
                  <h3 className="text-lg font-bold text-slate-900 mb-3">Produção de Laranja</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Oportunidades e frentes comerciais relacionadas à produção e cadeia de valor da laranja.
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl">
                  <h3 className="text-lg font-bold text-slate-900 mb-3">Tecnologia da Informação</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Soluções e oportunidades comerciais voltadas ao setor de tecnologia da informação.
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl">
                  <h3 className="text-lg font-bold text-slate-900 mb-3">ARLA 32 e Setor de Bebidas</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Projetos comerciais para o segmento de ARLA 32, além de água, refrigerantes e gelo.
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl">
                  <h3 className="text-lg font-bold text-slate-900 mb-3">Soluções de Empilhamento</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Fornecimento de porta-paletes e soluções avançadas de armazenamento e empilhamento.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= PÁGINA: CONTATO ================= */}
        {currentPage === 'contato' && (
          <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <span className="text-amber-600 font-bold uppercase tracking-wider text-sm">Fale Conosco</span>
                <h1 className="text-4xl font-extrabold text-slate-900 mt-2 mb-4">Contato e Solicitação de Propostas</h1>
                <p className="text-lg text-slate-600">
                  Apresente sua necessidade. Nossa equipe comercial avaliará sua demanda prontamente.
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-12">
                {/* Info Lateral */}
                <div className="bg-slate-900 text-white p-8 rounded-2xl space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-amber-400 mb-4">Canais Comerciais</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Entre em contato para solicitar propostas, tirar dúvidas sobre nossas soluções ou iniciar uma parceria estratégica.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                      <div>
                        <strong className="block text-sm">E-mail Oficial</strong>
                        <span className="text-xs text-slate-300">contato@atconsultoria.com.br (em configuração)</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                      <div>
                        <strong className="block text-sm">Atuação</strong>
                        <span className="text-xs text-slate-300">Atendimento corporativo e B2B em todo o território nacional.</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Nota: O WhatsApp comercial será ativado assim que o número oficial for confirmado.
                    </p>
                  </div>
                </div>

                {/* Formulário Comercial */}
                <div className="lg:col-span-2 bg-slate-50 border border-slate-200 p-8 sm:p-10 rounded-2xl">
                  {formSubmitted ? (
                    <div className="bg-emerald-50 border border-emerald-200 p-8 rounded-xl text-center space-y-4">
                      <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto" />
                      <h3 className="text-2xl font-bold text-slate-900">Proposta Solicitada com Sucesso!</h3>
                      <p className="text-slate-600 text-sm max-w-md mx-auto">
                        Agradecemos o contato. Sua mensagem foi encaminhada à equipe comercial da AT e retornaremos o mais breve possível.
                      </p>
                      <button
                        onClick={() => setFormSubmitted(false)}
                        className="bg-blue-900 text-white font-semibold px-6 py-2.5 rounded-lg text-sm"
                      >
                        Enviar nova mensagem
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-6">
                      {formError && (
                        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl text-sm flex items-center gap-2">
                          <AlertCircle className="w-5 h-5 flex-shrink-0" /> {formError}
                        </div>
                      )}

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Nome Completo *</label>
                          <input
                            type="text"
                            value={formData.nome}
                            onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                            className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-900 focus:outline-none"
                            placeholder="Seu nome"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Empresa *</label>
                          <input
                            type="text"
                            value={formData.empresa}
                            onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                            className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-900 focus:outline-none"
                            placeholder="Nome da empresa"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Cargo (Opcional)</label>
                          <input
                            type="text"
                            value={formData.cargo}
                            onChange={(e) => setFormData({ ...formData, cargo: e.target.value })}
                            className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-900 focus:outline-none"
                            placeholder="Seu cargo"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">E-mail Profissional *</label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-900 focus:outline-none"
                            placeholder="seu.email@empresa.com"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Telefone / WhatsApp *</label>
                          <input
                            type="text"
                            value={formData.telefone}
                            onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                            className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-900 focus:outline-none"
                            placeholder="(00) 00000-0000"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Cidade e Estado *</label>
                          <input
                            type="text"
                            value={formData.cidadeEstado}
                            onChange={(e) => setFormData({ ...formData, cidadeEstado: e.target.value })}
                            className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-900 focus:outline-none"
                            placeholder="Cidade - UF"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Área de Interesse *</label>
                          <select
                            value={formData.areaInteresse}
                            onChange={(e) => setFormData({ ...formData, areaInteresse: e.target.value })}
                            className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-900 focus:outline-none"
                          >
                            <option value="Consultoria">AT Consultoria</option>
                            <option value="Servicos">AT Serviços (Manutenção e Tanques)</option>
                            <option value="Equipamentos">AT Equipamentos (Bombas e Filtros)</option>
                            <option value="Quimica">AT Química (Limpeza Industrial)</option>
                            <option value="Mentoria">AT Mentoria Comercial</option>
                            <option value="Representacoes">AT Representações (Peças)</option>
                            <option value="Outro">Outro / Soluções Integradas</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Preferência de Contato</label>
                          <select
                            value={formData.preferenciaContato}
                            onChange={(e) => setFormData({ ...formData, preferenciaContato: e.target.value })}
                            className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-900 focus:outline-none"
                          >
                            <option value="E-mail">E-mail</option>
                            <option value="Telefone">Telefone</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Descrição da Necessidade *</label>
                        <textarea
                          rows={4}
                          value={formData.descricao}
                          onChange={(e) => setFormData({ ...formData, descricao: e.target.value })}
                          className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-900 focus:outline-none"
                          placeholder="Descreva detalhadamente sua demanda, projeto ou necessidade..."
                        ></textarea>
                      </div>

                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          id="consentimento"
                          checked={formData.consentimento}
                          onChange={(e) => setFormData({ ...formData, consentimento: e.target.checked })}
                          className="mt-1 w-4 h-4 text-blue-900 border-slate-300 rounded"
                        />
                        <label htmlFor="consentimento" className="text-xs text-slate-600">
                          Concordo em fornecer meus dados para que a AT Consultoria entre em contato com propostas e informações comerciais, conforme a <button type="button" onClick={() => handleNavigate('privacidade')} className="text-blue-900 underline">Política de Privacidade</button>.
                        </label>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-4 rounded-xl shadow-lg transition flex items-center justify-center gap-2"
                      >
                        <Send className="w-5 h-5" /> Enviar Solicitação de Proposta
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= PÁGINA: PRIVACIDADE ================= */}
        {currentPage === 'privacidade' && (
          <div className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
              <h1 className="text-3xl font-extrabold text-slate-900">Política de Privacidade</h1>
              <p className="text-slate-600 text-sm leading-relaxed">
                A <strong>AT Consultoria, Representações e Serviços</strong> respeita a sua privacidade e está comprometida em proteger os dados corporativos e pessoais compartilhados conosco.
              </p>
              <h2 className="text-xl font-bold text-slate-900 pt-4">1. Coleta de Informações</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Coletamos informações fornecidas voluntariamente através de nossos formulários de contato, tais como nome, empresa, e-mail, telefone e descrição de necessidades comerciais.
              </p>
              <h2 className="text-xl font-bold text-slate-900 pt-4">2. Uso dos Dados</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Os dados fornecidos são utilizados exclusivamente para retornar solicitações comerciais, elaborar propostas e construir parcerias estratégicas adequadas ao seu negócio.
              </p>
              <h2 className="text-xl font-bold text-slate-900 pt-4">3. Segurança</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Adotamos medidas técnicas para proteger as informações contra acesso não autorizado ou divulgação indevida.
              </p>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Col 1 */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img src={logo} alt="AT Logo" className="h-10 w-auto bg-white p-1 rounded" />
                <span className="font-bold text-white text-base">AT CONSULTORIA</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Conectamos estratégia, soluções e execução para gerar resultados e construir parcerias de sucesso.
              </p>
            </div>

            {/* Col 2 */}
            <div>
              <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-4">Áreas de Negócio</h4>
              <ul className="space-y-2.5 text-xs">
                <li><button onClick={() => handleNavigate('consultoria')} className="hover:text-white transition">AT Consultoria</button></li>
                <li><button onClick={() => handleNavigate('servicos-industriais')} className="hover:text-white transition">AT Serviços</button></li>
                <li><button onClick={() => handleNavigate('equipamentos')} className="hover:text-white transition">AT Equipamentos</button></li>
                <li><button onClick={() => handleNavigate('produtos-quimicos')} className="hover:text-white transition">AT Química</button></li>
                <li><button onClick={() => handleNavigate('mentoria')} className="hover:text-white transition">AT Mentoria</button></li>
                <li><button onClick={() => handleNavigate('representacoes')} className="hover:text-white transition">AT Representações</button></li>
              </ul>
            </div>

            {/* Col 3 */}
            <div>
              <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-4">Navegação</h4>
              <ul className="space-y-2.5 text-xs">
                <li><button onClick={() => handleNavigate('inicio')} className="hover:text-white transition">Início</button></li>
                <li><button onClick={() => handleNavigate('quem-somos')} className="hover:text-white transition">Quem Somos</button></li>
                <li><button onClick={() => handleNavigate('solucoes-integradas')} className="hover:text-white transition">Portfólio de Soluções Integradas</button></li>
                <li><button onClick={() => handleNavigate('oportunidades')} className="hover:text-white transition">Oportunidades de Negócio</button></li>
                <li><button onClick={() => handleNavigate('contato')} className="hover:text-white transition">Contato e Propostas</button></li>
              </ul>
            </div>

            {/* Col 4 */}
            <div>
              <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-4">Legal & Privacidade</h4>
              <ul className="space-y-2.5 text-xs">
                <li><button onClick={() => handleNavigate('privacidade')} className="hover:text-white transition">Política de Privacidade</button></li>
                <li className="pt-2 text-slate-500 text-[11px]">
                  CNPJ e dados oficiais em fase de confirmação para divulgação.
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs gap-4">
            <p>© {new Date().getFullYear()} AT Consultoria, Representações e Serviços. Todos os direitos reservados.</p>
            <p className="text-slate-500">Plataforma institucional corporativa B2B</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
