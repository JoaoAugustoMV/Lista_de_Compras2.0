package com.example.api_listacompras.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.api_listacompras.model.Produtos;

// JpaRepository: interface que possui metodos CRUD
// É possivel realizar algumas queries atraves da Annotation @
public interface ProdutosRepository extends JpaRepository<Produtos, Integer>{
      // @Query( nativeQuery = true, value = "SELECT * FROM todas_listas WHERE nome_lista = :nomeLista")
    // List<Produto> findAllByNomeLista(@Param("nomeLista") String nomeLista);

    @Query( nativeQuery = true, value = "SELECT * FROM todas_listas WHERE nome_lista = :nomeLista")
    List<Produtos> findAllByNomeLista(@Param("nomeLista") String nomeLista);
}
