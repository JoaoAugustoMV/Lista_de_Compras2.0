- Estilizar 
    - [ ] Nav
    - [ ] Tabela

- [x] Input de nomeProduto, valorProduto e quantidadeProduto
    - valorProduto e quantidadeProduto serão valores variaveis
- [x] Total Final
    - Atualizar total final a cada alteração

- [ ] Subir lista para o servidor
    - [x] Receber um JSON com os produtos da lista
    - [ ] Criar um tabela para cada lista
        - [ ] Criar Tabela com o nome passado no SalvarListaComponent
        - [ ] Preencher tabela criada com o json
        - POST: http://localhost:8080/{nomeLIsta} 
            - Adiciona na tabela TodasListas com id(AutoIncrement) e o nomeLista com chave primaria da tabela Lista{nomeLista}
                - tabela Lista{nomeLista}: Criar esta tabela automaticamente depois do post
                - Inserir o body do post na tabela Lista{nomeLista}
        - GET: http://localhost:8080/{nomeLIsta}: Retorna os dados da tabela Lista{nomeLista}
    - [ ] Guardar varias listar no servidor

- [ ] Criar uma pagina que mostre todas lista
    - [ ] Filtrar as listas
    - [ ] modificar
    - [ ] deletar 