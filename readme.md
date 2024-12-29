# Animalec

## Link Github:
https://github.com/luispeixotoUA/MiniProj3

## Implementação do Backend
O backend deste projeto foi melhorado com operações CRUD completas para Patrocinadores e Especialistas. A implementação inclui:

### Gestão de Patrocinadores
- **Estrutura do Modelo:**
  - nome: String
  - animal: String
  - categoria: String (ex: "Doação Recorrente", "Patrocínio Corporativo")
  - quota: String (ex: "Corporativo", "Individual", "Especial")
  - descrição: String
  - ativo: Boolean

- **Endpoints:**
  - GET `/sponsors` - Listar todos os patrocinadores
  - POST `/sponsors` - Criar novo patrocinador
  - GET `/sponsors/:id` - Obter patrocinador específico
  - PUT `/sponsors/:id` - Atualizar patrocinador
  - DELETE `/sponsors/:id` - Remover patrocinador
  - PUT `/sponsors/:id/activate` - Ativar patrocinador
  - PUT `/sponsors/:id/deactivate` - Desativar patrocinador

### Gestão de Especialistas
- **Estrutura do Modelo:**
  - nome: String
  - profissão: String
  - especialidade: String
  - descrição: String
  - ativo: Boolean

- **Endpoints:**
  - GET `/specialists` - Listar todos os especialistas
  - POST `/specialists` - Criar novo especialista
  - GET `/specialists/:id` - Obter especialista específico
  - PUT `/specialists/:id` - Atualizar especialista
  - DELETE `/specialists/:id` - Remover especialista
  - PUT `/specialists/:id/activate` - Ativar especialista
  - PUT `/specialists/:id/deactivate` - Desativar especialista


