class AnaliseNotas {
    constructor(dadosAtleta) {
        // Armazenando os dados dos atletas
        this.dadosAtleta = dadosAtleta

        // Armazenando os nomes dos atletas
        this.nomes = dadosAtleta.map(
            function(atleta) {
                return atleta.nome
            }
        );

        // Armazenando as notas dos atletas
        this.notas = dadosAtleta.map(
            function(atleta) {
                return atleta.notas
            }
        );

        // Calculando e armazenando as médias dos atletas
        this.medias = dadosAtleta.map(
            function(atleta) {
                return atleta.notas
            }
        ).map(
            function(notas) {
                return (notas.sort(
                    function(a, b) {
                        return a - b
                    }
                ).slice(1, 4).reduce(
                    function(somaNotas, notaAtual) {
                        return somaNotas + notaAtual
                    }, 0
                ) / 3);
            }
        )
    }

    // Mostra todos os dados coletados, porém formatados
    exibirTodosOsDados() {
        console.log(this.dadosAtleta)
    }

    // Mostra os nomes na tela
    exibirNomes() {
        console.log(`Nomes dos atletas: ${
            this.nomes.reduce(
                function(textoNomes, nomes) {
                  if (textoNomes === "") {
                      return `${nomes}`
                  } else {
                      return `${textoNomes}, ${nomes}`
                  }
                }, ""
            )
        }`);
    }

    // Mostra as notas na tela
    exibirNotas() {
        console.log(`Notas dos atletas: ${
            this.notas.reduce(
                function(textoNotas, notas) {
                  if (textoNotas === "") {
                      return `${notas}`
                  } else {
                      return `${textoNotas}, ${notas}`
                  }
                }, ""
            )
        }`);
    }

    // Mostra as médias na tela
    exibirMedias() {
        console.log(`Medias das notas válidas: ${
            this.medias.reduce(
                function(textoMedias, medias) {
                  if (textoMedias === "") {
                      return `${medias}`
                  } else {
                      return `${textoMedias}, ${medias}`
                  }
                }, ""
            )
        }`);
    }

    // Mostra todos os dados coletados, porém formatados
    exibirTodosOsDadosFormatados() {
        console.log("Exibindo todos os dados coletados...")
        for (let i = 0; i < this.dadosAtleta.length; i++) {
            console.log(`Atleta: ${this.nomes[i]}`)
            console.log(`Notas Obtidas: ${this.notas[i]}`)
            console.log(`Média Válida: ${this.medias[i]}`)
        }
    }
}


// Estrutura de dados recebida pelo constructor
let atletas = [
    {
        nome: "Cesar Abascal",
        notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
        nome: "Fernando Puntel",
        notas:  [8, 10, 10, 7, 9.33]
    },
    {
        nome: "Daiane Jelinsky",
        notas: [7, 10, 9.5, 9.5, 8]
    },
    {
        nome: "Bruno Castro",
        notas: [10, 10, 10, 9, 9.5]
    }
];


// Criando uma instância da classe AnaliseNotas
let analise = new AnaliseNotas(atletas);

// Exibindo os resultados
analise.exibirNomes();
analise.exibirNotas();
analise.exibirTodosOsDados();
analise.exibirTodosOsDadosFormatados();
