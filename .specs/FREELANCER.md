## 1. Objetivo

Criar uma página de formulário de perfil de freelancer que permita cadastrar, editar e persistir múltiplos perfis localmente utilizando SQLite, sem uso de APIs externas ou backend.

Toda a lógica de negócio deve estar no frontend.

---

## 2. Escopo

Inclui:

- Criação de perfis de freelancer
- Edição de perfis existentes
- Listagem de perfis
- Persistência local com SQLite
- Gerenciamento de múltiplos perfis

Não inclui:

- Integração com APIs externas
- Backend separado
- Autenticação

---

## 3. Requisitos Funcionais

### 3.1 Criação de Perfil

O sistema deve permitir criar um perfil contendo:

- Skills (lista de strings)
- Experiência (texto livre)

### 3.2 Edição de Perfil

- O usuário deve poder editar qualquer perfil existente
- Alterações devem ser persistidas automaticamente ou via ação explícita (botão salvar)

### 3.3 Listagem de Perfis

- O sistema deve exibir todos os perfis cadastrados
- Cada perfil deve ter opção de:
  - Editar
  - Remover

### 3.4 Exclusão de Perfil

- O usuário deve conseguir remover um perfil
- A remoção deve refletir no banco SQLite

---

## 4. Requisitos Não Funcionais

- Aplicação deve rodar 100% local
- Nenhuma requisição HTTP é permitida
- Persistência deve ser feita com SQLite
- Interface deve ser responsiva
- Dados devem permanecer após reiniciar a aplicação

---

## 5. Estrutura de Dados

### Tabela: freelancers

Campos:

- id (INTEGER, PRIMARY KEY, AUTOINCREMENT)
- skills (TEXT) → armazenar como JSON string
- experience (TEXT)

---

## 6. Regras de Negócio

- Um usuário pode criar múltiplos perfis
- Skills devem ser tratadas como lista
- Não há limite de perfis
- Não há validação obrigatória complexa (ex: mínimo de skills), mas campo não pode ser vazio

---

## 7. Fluxo da Interface

### 7.1 Tela Principal

- Lista de perfis
- Botão: "Criar novo perfil"

### 7.2 Formulário

Campos:

- Input de Skills (com separação por vírgula ou tags)
- Textarea de Experiência

Ações:

- Salvar
- Cancelar

---

## 8. Persistência

- Utilizar SQLite local
- Operações necessárias:
  - INSERT
  - SELECT
  - UPDATE
  - DELETE

---

## 9. Tecnologias Esperadas

- Frontend: Next.js ou Vite
- Banco local: SQLite

---

## 10. Critérios de Aceitação

- Deve ser possível criar múltiplos perfis
- Dados devem persistir após reload
- Deve ser possível editar e excluir perfis
- Nenhuma chamada externa deve existir
- Toda lógica deve estar no frontend

---

## 11. Restrições

- Proibido uso de backend remoto
- Proibido uso de APIs externas
- Proibido autenticação

---

## 12. Prompt para o Agente

Você deve gerar uma página de formulário de perfil de freelancer com base nesta especificação.

Regras obrigatórias:

- Toda lógica deve estar no frontend
- Não utilizar nenhuma API externa
- Persistir dados utilizando SQLite local
- Permitir múltiplos perfis
- Implementar CRUD completo (create, read, update, delete)
- Skills devem ser manipuladas como lista
- Código deve ser organizado e modular

Saída esperada:

- Estrutura de arquivos
- Implementação da página
- Implementação da persistência SQLite
- Componentes necessários
- Lógica completa de CRUD no frontend