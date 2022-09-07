package com.example.api_listacompras.model;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.TemporalType;
import javax.persistence.Temporal;

// Model: Define a estrutura de uma entidade(no caso tabela)
// Cada Atributo da class sera um coluna

@Entity // Entidade de um banco de dados
@Table(name = "TodasListas") // Indica o nome da tabela
public class Produtos {
   
    private int id_lista;
    private String nomeLista;
    private float preco;
    private int quantidade;
    private float total;
    @Temporal(TemporalType.DATE)
    private LocalDate data;
    
    @Id // Chave primaria 
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Auto_Increment
    public int getId_lista() {
        return id_lista;
    }
    public void setId_lista(int id_lista) {
        this.id_lista = id_lista;
    }
    
    public String getNomeLista() {
        return nomeLista;
    }
    public void setNomeLista(String nomeLista) {
        this.nomeLista = nomeLista;
    }
    public float getPreco() {
        return preco;
    }
    public void setPreco(float preco) {
        this.preco = preco;
    }
    public int getQuantidade() {
        return quantidade;
    }
    public void setQuantidade(int quantidade) {
        this.quantidade = quantidade;
    }
    public float getTotal() {
        return total;
    }
    public void setTotal(float total) {
        this.total = total;
    }
  

    public LocalDate getData() {
        return data;
    }
    public void setData(LocalDate data) {
        this.data = data;
    }
  
    @Override
    public String toString() {
        return "ListaProdutos [data=" + data + ", id_lista=" + id_lista + ", nomeLista=" + nomeLista + ", preco="
                + preco + ", quantidade=" + quantidade + ", total=" + total + "]";
    }
}
