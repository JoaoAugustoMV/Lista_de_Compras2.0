package com.example.api_listacompras.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.api_listacompras.model.Produtos;
import com.example.api_listacompras.repository.ProdutosRepository;

@Service 
@Transactional
public class ProdutosService {
    
    @Autowired
    private ProdutosRepository listaProdutosRepository;
    
    // GetAll Listas
    public List<String> getAllNomesListas(){
        return listaProdutosRepository.findAllNomesListas();
    }
    // GetAllProdutos da Lista
    public List<Produtos> getAllByNomeLista (String nomeLista){
        return listaProdutosRepository.findAllByNomeLista(nomeLista);
    }

    // GetById
    public Produtos getListaProdutos(Integer id){
        return listaProdutosRepository.findById(id).get();
    }

    // Post
    public void saveListaProdutos(Produtos novaLista){
        novaLista.setData(LocalDate.now());
        listaProdutosRepository.save(novaLista);
    }

    public void saveAllListaProdutos(List<Produtos> novaLista){
        for (Produtos produto : novaLista) {
            saveListaProdutos(produto);
        }
    }
    // Put
    public void updateListaProdutos(Produtos lista){
        Produtos listaAtualizada = this.getListaProdutos(lista.getId_lista());

        listaAtualizada.setQuantidade(lista.getQuantidade());
        listaAtualizada.setTotal(lista.getTotal());
        listaAtualizada.setData(lista.getData());

        this.saveListaProdutos(listaAtualizada);
    }

    // Delete
    public void deleteListaProdutos(Integer nomeLista){
        listaProdutosRepository.deleteById(nomeLista);
    }
}
