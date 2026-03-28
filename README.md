# MyClinic Odonto - Full Stack Application

Aplicação full stack para a clínica odontológica MyClinic Odonto, replicando a identidade visual do site WordPress existente com tecnologias modernas.

## Stack Tecnológica

- **Frontend**: Next.js 14.2 (React)
- **Backend**: NestJS 10.x
- **Database**: MongoDB 7
- **Styling**: Tailwind CSS
- **TypeScript**: Full type safety
- **Containerization**: Docker Compose

## Estrutura do Projeto

```
myclinic-app/
├── frontend/          # Next.js frontend
│   ├── app/          # App router
│   ├── components/   # React components
│   └── public/       # Static assets
├── backend/          # NestJS backend
│   └── src/          # Source code
├── docker-compose.yml # Orchestration
└── README.md         # This file
```

## Identidade Visual

Cores principais:
- **Primary**: #0066CC (Azul)
- **Secondary**: #FFFFFF (Branco)
- **Accent**: #4CAF50 (Verde)
- **Background**: #F9F9F9 (Off-white)
- **Text**: #333333 (Cinza escuro)

## Como Executar

### Pré-requisitos
- Docker e Docker Compose instalados

### Iniciar todos os serviços
```bash
cd myclinic-app
docker-compose up -d
```

### Acessar os serviços
- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:4000
- **MongoDB**: mongodb://localhost:27017/myclinic

### Parar os serviços
```bash
docker-compose down
```

### Reiniciar um serviço específico
```bash
docker-compose restart myclinic-next
docker-compose restart myclinic-nest
```

## Desenvolvimento Local

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
```bash
cd backend
npm install
npm run start:dev
```

## API Endpoints

### Health Check
- `GET http://localhost:4000/health` - Status do serviço

### Services (planejado)
- `GET /services` - Listar serviços
- `POST /services` - Criar serviço

### Appointments (planejado)
- `GET /appointments` - Listar agendamentos
- `POST /appointments` - Criar agendamento

### Contact (planejado)
- `POST /contact` - Enviar mensagem

## Informações de Contato

- **Instagram**: @myclinicodonto
- **WhatsApp**: (19) 99938-2566
- **Endereço**: Rua José Guatemosin Nogueira, 26 — Cambuí, Campinas, SP — CEP 13025-120
- **Beacons**: https://beacons.ai/myclinicodonto

## Profissionais

- Dr. Adnan de Sousa Freitas (@dr_adnanfreitas)
- Dra. Polyana Cantuária (@dra.polyanacantuaria)

## Próximos Passos

- [x] Criar estrutura Docker Compose
- [x] Configurar frontend Next.js
- [x] Configurar backend NestJS
- [x] Criar seções principais (Hero, About, Services, Benefits, Testimonials)
- [ ] Implementar endpoints da API
- [ ] Integrar frontend com backend
- [ ] Adicionar formatação de agendamento
- [ ] Testar responsividade em todos os dispositivos
- [ ] Deploy em produção

## Licença

Privado - MyClinic Odonto
