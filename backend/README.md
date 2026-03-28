# MyClinic Odonto - Backend (NestJS)

## Descrição

Backend API da aplicação MyClinic Odonto, construído com NestJS e MongoDB.

## Tecnologias

- **Framework**: NestJS 10.x
- **Database**: MongoDB (via Mongoose)
- **TypeScript**: Full type safety
- **REST API**: OpenAPI/Swagger

## Rotas Planejadas

### Health Check
- `GET /health` - Status do serviço

### Services (Serviços)
- `GET /services` - Listar todos os serviços
- `GET /services/:id` - Obter serviço por ID
- `POST /services` - Criar novo serviço
- `PUT /services/:id` - Atualizar serviço
- `DELETE /services/:id` - Deletar serviço

### Appointments (Agendamentos)
- `GET /appointments` - Listar agendamentos
- `GET /appointments/:id` - Obter agendamento
- `POST /appointments` - Criar agendamento
- `PUT /appointments/:id` - Atualizar agendamento
- `DELETE /appointments/:id` - Cancelar agendamento

### Professionals (Profissionais)
- `GET /professionals` - Listar profissionais
- `GET /professionals/:id` - Obter profissional

### Contact (Contato)
- `POST /contact` - Enviar mensagem de contato

## Database Schema

### Services
```typescript
{
  title: string;
  description: string;
  icon: string;
  order: number;
  active: boolean;
}
```

### Professionals
```typescript
{
  name: string;
  specialty: string;
  instagram: string;
  image: string;
  active: boolean;
}
```

### Appointments
```typescript
{
  name: string;
  email: string;
  phone: string;
  serviceId: string;
  preferredDate: Date;
  message?: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: Date;
}
```

### Contact
```typescript
{
  name: string;
  email: string;
  phone: string;
  message: string;
  createdAt: Date;
}
```

## Desenvolvimento

```bash
# Com Docker
docker-compose up myclinic-nest

# Local
npm install
npm run start:dev
```

API disponível em: http://localhost:4000

## MongoDB Connection

- **Host**: localhost (ou myclinic-mongo no Docker)
- **Port**: 27017
- **Database**: myclinic
- **Connection String**: `mongodb://localhost:27017/myclinic`

## Swagger Documentation

Acesse em: http://localhost:4000/api (quando implementado)

## Segurança

- Implementar autenticação JWT (futuro)
- Validar entrada com DTOs
- Rate limiting
- CORS configurado para frontend
