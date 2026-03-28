# MyClinic Odonto

<p align="center">
  <img src="https://img.icons8.com/color/96/tooth.png" alt="MyClinic Odonto Logo" width="80" />
</p>

<p align="center">
  <strong>Transforme seu sorriso em um dia</strong>
</p>

<p align="center">
  Sistema completo de gestão para clínicas odontológicas com arquitetura moderna e escalável
</p>

---

## ✨ Visão Geral

**MyClinic Odonto** é uma plataforma SaaS (Software as a Service) projetada para modernizar a gestão de clínicas odontológicas, oferecendo controle total sobre:

- **Agendamentos** - Gerenciamento inteligente de consultas com notificações automáticas
- **Prontuário Digital** - Histórico completo de pacientes de forma segura e acessível
- **Financeiro** - Controle de pagamentos, convênios e faturamento
- **Estoque** - Gestão de materiais e equipamentos odontológicos
- **Dashboard** - Analytics em tempo real para tomada de decisões

---

## 🚀 Stack Tecnológica

Construído com as melhores práticas do mercado:

```
┌─────────────────────────────────────────────────────────┐
│                    FRONTEND                              │
│  Next.js 14 + TypeScript + TailwindCSS                   │
│  ─────────────────────────────────────────────────────   │
│  • React Server Components                               │
│  • App Router (novo roteamento)                         │
│  • Otimização automática de imagens                      │
│  • CSS-in-JS com Tailwind                                │
└─────────────────────────────────────────────────────────┘
                         ↕
┌─────────────────────────────────────────────────────────┐
│                    BACKEND                               │
│  NestJS + TypeScript                                     │
│  ─────────────────────────────────────────────────────   │
│  • Arquitetura modular                                   │
│  • Injeção de dependência                                │
│  • GraphQL ou REST (flexível)                            │
│  • WebSockets para tempo real                            │
└─────────────────────────────────────────────────────────┘
                         ↕
┌─────────────────────────────────────────────────────────┐
│                  DATABASE                                │
│  MongoDB 7                                               │
│  ─────────────────────────────────────────────────────   │
│  • Schema flexível (NoSQL)                               │
│  • Escalabilidade horizontal                             │
│  • Alta performance em queries complexas                 │
│  • Índices geoespaciais                                  │
└─────────────────────────────────────────────────────────┘
```

### Por que esta stack?

| Tecnologia | Benefício |
|------------|-----------|
| **Next.js** | SEO amigável, renderização híbrida, excelente performance |
| **NestJS** | Estrutura organizada, fácil manutenção, tipo Angular no backend |
| **MongoDB** | Flexibilidade para dados médicos, evolução contínua do schema |

---

## 🛠️ Arquitetura

### Docker-First Design

Toda a aplicação roda em containers Docker, garantindo:

- ✅ **Consistência** - Mesmo ambiente em dev, staging e produção
- ✅ **Isolamento** - Sem conflitos de dependências
- ✅ **Escalabilidade** - Fácil orquestração com Kubernetes no futuro
- ✅ **Segurança** - Mínima superfície de ataque

```
┌─────────────────────────────────────────────────────────┐
│                   DOCKER COMPOSE                         │
│                                                         │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │   Frontend   │  │   Backend    │  │  MongoDB     │  │
│  │   (Next.js)  │  │   (NestJS)   │  │   (Database) │  │
│  │   Port:8080  │  │   Port:3001  │  │   Port:27017 │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
│         │                 │                 │            │
│         └─────────────────┴─────────────────┘            │
│                         ↓                                │
│              ┌──────────────────────┐                   │
│              │  myclinic-network    │                   │
│              │  (Bridge Network)    │                   │
│              └──────────────────────┘                   │
└─────────────────────────────────────────────────────────┘
```

---

## 📦 Instalação Rápida

### Pré-requisitos

- Docker 29.3.1+
- Docker Compose 5.1.1+

### Subir os serviços

```bash
# Clone o repositório
git clone git@github.com:CSFDuarte/myclinic-app.git
cd myclinic-app

# Suba todos os containers
docker-compose up -d

# Verifique os logs
docker-compose logs -f
```

### Acessar a aplicação

| Serviço | URL Local | URL Produção |
|---------|-----------|--------------|
| **Frontend** | http://localhost:8080 | http://187.77.255.251:8080 |
| **Backend API** | http://localhost:3001 | http://187.77.255.251:3001 |
| **MongoDB** | mongodb://admin:myclinic123@localhost:27017 | mongodb://admin:myclinic123@localhost:27017 |

---

## 📁 Estrutura do Projeto

```
myclinic-app/
├── 📂 frontend/                 # Next.js Application
│   ├── src/
│   │   ├── app/                 # App Router (Next.js 14)
│   │   │   ├── page.tsx         # Homepage
│   │   │   ├── layout.tsx       # Root layout
│   │   │   └── globals.css      # Estilos globais
│   │   ├── components/          # Componentes React reutilizáveis
│   │   │   ├── ui/              # UI components (shadcn/ui)
│   │   │   └── layout/          # Layout components
│   │   └── lib/                 # Utilitários e configs
│   ├── public/                  # Assets estáticos
│   ├── package.json
│   ├── tsconfig.json
│   ├── tailwind.config.ts
│   └── next.config.js           # Config com output: standalone
│
├── 📂 backend/                  # NestJS Application
│   ├── src/
│   │   ├── main.ts              # Entry point
│   │   ├── app.module.ts        # Root module
│   │   ├── app.controller.ts    # Example controller
│   │   └── app.service.ts       # Example service
│   ├── package.json
│   ├── tsconfig.json
│   └── nest-cli.json
│
├── 📄 docker-compose.yml        # Orquestração dos containers
├── 📄 .gitignore
└── 📄 README.md                 # Este arquivo
```

---

## 🔧 Configurações

### Variáveis de Ambiente

**Backend (.env):**
```env
NODE_ENV=production
PORT=3001
MONGODB_URI=mongodb://admin:myclinic123@mongodb:27017/myclinic?authSource=admin
```

**Frontend (.env.local):**
```env
NODE_ENV=production
NEXT_PUBLIC_API_URL=http://187.77.255.251:3001
```

---

## 🚀 Deploy

### Produção (VPS Hostinger)

- **IP Público:** 187.77.255.251
- **Proxy Reverso:** Traefik (portas 80/443)
- **SSL:** Let's Encrypt automático via Traefik

### Processo de Deploy

```bash
# 1. Commit e push
git add .
git commit -m "feat: nova funcionalidade"
git push origin main

# 2. Pull no servidor
ssh root@187.77.255.251
cd /data/.openclaw/workspace/myclinic-app
git pull origin main

# 3. Rebuild e restart
docker-compose down
docker-compose up -d --build
```

---

## 🎨 Roadmap

### ✅ MVP (v1.0) - Em Desenvolvimento

- [x] Setup do projeto (Next.js + NestJS + MongoDB)
- [x] Configuração Docker Compose
- [x] Deploy em produção
- [ ] Sistema de autenticação
- [ ] Dashboard principal
- [ ] CRUD de pacientes

### 🚧 v1.1 - Q2 2026

- [ ] Agendamento de consultas
- [ ] Calendário interativo
- [ ] Notificações por email/WhatsApp
- [ ] Prontuário digital básico

### 🔮 v2.0 - Q4 2026

- [ ] Módulo financeiro
- [ ] Controle de convênios
- [ ] Gestão de estoque
- [ ] Relatórios avançados
- [ ] App mobile para pacientes

---

## 🤝 Contribuindo

Este é um projeto privado. Para contribuir:

1. Fork o repositório
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Add feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

---

## 📄 Licença

© 2026 MyClinic Odonto. Todos os direitos reservados.

---

## 📞 Contato

- **Desenvolvedor:** Caique Duarte
- **Email:** [contato@myclinicodonto.com.br](mailto:contato@myclinicodonto.com.br)
- **Repositório:** https://github.com/CSFDuarte/myclinic-app

---

<p align="center">
  <strong>Feito com 💙 para transformar a odontologia no Brasil</strong>
</p>
