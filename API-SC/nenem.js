import { question } from "readline-sync";

function main(){

    //ENTRADA
    const aluno = question("DIGITE SEU NOME: ")

    const redacao = Number(question("\nNOTA DE REDACAO: "))//não entra na fórmula
    const peso_redacao = Number(question("DIGITE O PESO DE REDACAO: "))

    const acertos_linguagens = Number(question("\nQUESTOES ACERTADAS DE LINGUAGENS: "))
    const peso_linguagens = Number(question("DIGITE O PESO DE LINGUAGENS: "))

    const acertos_matematica = Number(question("\nQUESTOES ACERTADAS DE MATEMATICA: "))
    const peso_matematica = Number(question("DIGITE O PESO DE MATEMATICA: "))

    const acertos_humanas = Number(question("\nQUESTOES ACERTADAS DE HUMANAS: "))
    const peso_humanas= Number(question("DIGITE O PESO DE HUMANAS: "))

    const acertos_natureza = Number(question("\nQUESTOES ACERTADAS DE NATUREZA: "))
    const peso_natureza = Number(question("DIGITE O PESO DE NATUREZA: "))


    //PROCESSAMENTO
    const nota_linguagens = calcular_nota(acertos_linguagens)
    const nota_matematica = calcular_nota(acertos_matematica)
    const nota_humanas = calcular_nota(acertos_humanas)
    const nota_natureza = calcular_nota(acertos_natureza)

    const media_simples = calcular_media_simples(redacao, nota_linguagens, nota_matematica, nota_humanas, nota_natureza)
    const media_ponderada = calcular_media_ponderada(redacao, peso_redacao, nota_linguagens, peso_linguagens, nota_matematica, peso_matematica, nota_humanas, peso_humanas, nota_natureza, peso_natureza)
    const classificacao = imprimir_classificacao(media_ponderada)
    const observacao = imprimir_observacao(classificacao)

    //SAÍDA
    console.log(`\n***** SERIGATE NENEM *****`)
    console.log(`ALUNO        : ${aluno}`)
    console.log(`------------ NOTAS ---------------`)
    console.log(`REDAÇÃO      : ${redacao} (peso: ${peso_redacao})`)
    console.log(`LINGUAGENS   : ${nota_linguagens.toFixed(2)} (peso: ${peso_linguagens})`)
    console.log(`MATEMATICA   : ${nota_matematica.toFixed(2)} (peso: ${peso_matematica})`)
    console.log(`HUMANAS      : ${nota_humanas.toFixed(2)} (peso: ${peso_humanas})`)
    console.log(`NATUREZA     : ${nota_natureza.toFixed(2)} (peso: ${peso_natureza})`)
    console.log(`------------- MEDIA ---------------`)
    console.log(`\nMEDIA SIMPLES: ${media_simples.toFixed(2)}`)
    console.log(`\n>>>>> RESULTADO <<<<<`)
    console.log(`MEDIA PONDERADA: ${Math.floor(media_ponderada)}`)
    console.log(`CLASSIFICAÇÃO: ${classificacao}`)
    console.log(`OBSERVAÇÃO: ${observacao}`)
    console.log(`------------------------------`)
}
//FIM DA MAIN


//FUNÇÕES
function calcular_nota(acertos){
    return ((acertos / 45) * 1000)
}


function calcular_media_simples(red, ling, mat, hum, nat){
    return (red + ling + mat + hum + nat) / 5
}


function calcular_media_ponderada(red, peso_red, ling, peso_ling, mat, peso_mat, hum, peso_hum, nat, peso_nat){
    return ((red * peso_red) + (ling * peso_ling) + (mat * peso_mat) + (hum * peso_hum) + (nat * peso_nat)) / (peso_red + peso_ling + peso_mat + peso_hum + peso_nat)
}


function imprimir_classificacao(media_ponderada){
    //fail fast
    if(media_ponderada < 0){
        return false
    }if(media_ponderada < 450){
        return 'INSUFICIENTE'
    }else if(media_ponderada < 650){
        return 'SUFICIENTE'
    }else if(media_ponderada < 750){
        return 'MUITO BOM'
    }else if(media_ponderada <= 1000){
        return 'EXCELENTE'
    }else{
        return 'NOTA FINAL INVÁLIDA'
    }
}

function imprimir_observacao(classificacao){
    if(classificacao === 'INSUFICIENTE'){
        return 'Impedido de ir para a Universidade. Deverá fazer mais um ano de ensino de reforço'
    }else if(classificacao === 'SUFICIENTE'){
        return 'Poderá conseguir uma vaga. Porém, em Curso/Universidade com baixa procura (nota de corte baixa).'
    }else if(classificacao === 'MUITO BOM'){
        return 'Poderá pleitear vaga em bons Cursos/Universidades (nota de corte alta).'
    }else if(classificacao === 'EXCELENTE'){
        return 'Poderá escolher qualquer curso em qualquer universidade de Serigate.'
    }else{
        return false
    }
}

main()