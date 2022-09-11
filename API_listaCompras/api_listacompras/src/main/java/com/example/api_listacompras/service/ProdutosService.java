package com.example.api_listacompras.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;

import com.example.api_listacompras.model.Produtos;
import com.example.api_listacompras.repository.ProdutosRepository;

@Service 
@Transactional
public class ProdutosService {
    
    @Autowired
    private ProdutosRepository produtosRepository;
    
    // GetAll Listas
    public List<String> getAllNomesListas(){
        return produtosRepository.findAllNomesListas();
    }
    // GetAllProdutos da Lista
    public List<Produtos> getAllByNomeLista (String nomeLista){
        return produtosRepository.findAllByNomeLista(nomeLista);
    }

    // GetById
    public Produtos getListaProdutos(Integer id){
        return produtosRepository.findById(id).get();
    }

    // Post
    public void saveListaProdutos(Produtos novaLista){
        novaLista.setData(LocalDate.now());
        produtosRepository.save(novaLista);
    }

    public void saveAllListaProdutos(List<Produtos> novaLista){
        for (Produtos produto : novaLista) {
            saveListaProdutos(produto);
        }
    }
    // Put

    public void updateListaProdutos(String nomeLista, List<Produtos> listaAtualizada){
        
        produtosRepository.deleteByNomeLista(nomeLista);
        System.out.println(listaAtualizada);
        saveAllListaProdutos(listaAtualizada);

    }

    // Delete
    public void deleteListaProdutos(Integer nomeLista){
        produtosRepository.deleteById(nomeLista);
    }

    public void deleteByNomeLista(String nomeLista){
        produtosRepository.deleteByNomeLista(nomeLista);

    }

    
}
