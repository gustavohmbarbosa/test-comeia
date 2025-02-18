# Test Comela Project

Um projeto básico em Node.js com TypeScript para construção de uma API REST utilizando Express e Mongoose.

## Pré-requisitos

- Node.js (v18+)
- npm (v9+)
- MongoDB (ou URL de conexão remota)

## Instalação

1. Configure seu .env
   ```bash
   cp .env.example .env
   ```
2. Instale as dependências e crie o servidor
   ```bash
   npm i
   npm run dev
   ```

## Explicação da Estrutura

1. **`config/`**  
   - Contém configurações globais (ex: conexão com banco de dados).

2. **`controllers/`**  
   - Responsável por receber requisições HTTP e enviar respostas.

3. **`dtos/`**  
   - Define objetos para validação e transferência de dados entre camadas.

4. **`models/`**  
   - Representa a estrutura dos dados armazenados no MongoDB.

5. **`repositories/`**  
   - Isola operações de banco de dados (implementação do padrão Repository).

6. **`routes/`**  
   - Mapeia endpoints da API para seus respectivos controllers.

7. **`services/`**  
   - Contém regras de negócio e lógica complexa:
   - `task.service.ts`: Implementação principal  
   - `task.service.factory.ts`: Padrão Factory para flexibilidade  
   - `index.ts`: Centraliza exports para uso em outras camadas

## Fluxo Típico
`Rota → Controller → Service → Repository → Modelo (Mongoose) → Banco de Dados`

*Padrões utilizados:* MVC, Repository Pattern, DTOs e Injeção de Dependência.