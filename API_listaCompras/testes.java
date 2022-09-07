import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class testes {
    public static void main(String[] args) {
        String dataBR = LocalDate.now().format(DateTimeFormatter.ofPattern("dd-MM-yyyy"));

        System.out.println(dataBR);
    }
}

// CREATE TABLE :nomeLista (  +
//         'nomeLista' VARCHAR(40) NOT NULL, +
//         'id_produto' INT NOT NULL AUTO_INCREMENT, +
//         'preco' FLOAT NOT NULL, +
//         'quantidade' INT NOT NULL, +
//         'totalProduto' FLOAT NOT NULL, +
//         CONSTRAINT PK_2 PRIMARY KEY (id_produto));,

// ALTER TABLE :nomeLista
//             ADD CONSTRAINT FK_R1 
//                FOREIGN KEY (:nomeLista) 
//                    REFERENCES todas_listas (nomeLista);


// String teste = "CREATE TABLE testeLista (  nomeLista VARCHAR(40) NOT NULL, id_produto INT NOT NULL AUTO_INCREMENT, preco FLOAT NOT NULL, quantidade INT NOT NULL, totalProduto FLOAT NOT NULL, CONSTRAINT PK_2 PRIMARY KEY (id_produto));";