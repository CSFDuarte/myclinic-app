# MyClinic Odonto

Aplicação web para clínica odontológica com Next.js, NestJS e MongoDB.

## 🏗️ Arquitetura

- **Frontend:** Next.js 14 (React + TypeScript + TailwindCSS)
- **Backend:** NestJS (TypeScript)
- **Database:** MongoDB 7

## 🚀 Como rodar

### Com Docker Compose (Recomendado)

```bash
docker-compose up -d
```

### Acessar

- Frontend: http://localhost:8080
- Backend API: http://localhost:3001
- MongoDB: mongodb://admin:myclinic123@localhost:27017

## 📁 Estrutura

```
myclinic-app/
├── frontend/          # Next.js App
├── backend/           # NestJS API
├── docker-compose.yml # Orquestração
└── README.md
```

## 🔧 Variáveis de Ambiente

### Backend
- `NODE_ENV`: production
- `PORT`: 3001
- `MONGODB_URI`: MongoDB connection string

### Frontend
- `NODE_ENV`: production
- `NEXT_PUBLIC_API_URL`: Backend API URL
