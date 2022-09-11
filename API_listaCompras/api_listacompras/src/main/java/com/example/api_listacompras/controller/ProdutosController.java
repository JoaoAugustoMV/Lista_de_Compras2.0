package com.example.api_listacompras.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.api_listacompras.model.Produtos;
import com.example.api_listacompras.service.ProdutosService;

@CrossOrigin
@RestController // Classe para controlar e realizar de fato os metodos http e os endpoints
@RequestMapping("api/listas")
public class ProdutosController {
    
    @Autowired // Injeção de Dependencia
    ProdutosService produtosService;

     // Retorna os nomes lista unicos, ou seja cada lista(apenas o nome)
    @GetMapping("")
    public List<String> getAllNomesListas(){
        return produtosService.getAllNomesListas();
    }

    // Retorna a lista desejada
    @GetMapping("/{nomeLista}")
    public List<Produtos> getAllByNomeLista(@PathVariable String nomeLista){
        System.out.println("GET");
        return produtosService.getAllByNomeLista(nomeLista);
    }

    // Publica nova lista
    @PostMapping("/{nomeLista}")
    public void postprodutos(@PathVariable String nomeLista,
    @RequestBody List<Produtos> novaLista){
        produtosService.saveAllListaProdutos(novaLista);
    }

    @PutMapping("/{nomeLista}")
    public void putLista(@PathVariable String nomeLista, @RequestBody List<Produtos> listaAtulizada){
        produtosService.updateListaProdutos(nomeLista, listaAtulizada);
    }

    // Para o navegador
    @RequestMapping(value="/{nomeLista}", method = RequestMethod.OPTIONS)
    public ResponseEntity<String> respostaOptions(){
        System.out.println("OPCAO");
        return new ResponseEntity<>("Deu certo", HttpStatus.OK);
    } 

    @DeleteMapping("/{nomeLista}")
    public void deletarLista(@PathVariable String nomeLista){
        produtosService.deleteByNomeLista(nomeLista);

        // return ("A lista " + nomeLista + " foi apagada");
    }
    
    
}
