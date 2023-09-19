import { question } from "readline-sync";

function main(){
    //ENTRADA
    const milhas = Number(question("QUANTAS MILHAS DESEJA ADQUIRIR: "))//blocos de mil -> condição
    const desconto = Number(question("\nDESCONTO (0 a 80%): "))
    const bonus = Number(question("\nBONUS (0 a 300%): "))


    //PROCESSAMENTO
    const valor_com_desconto = calcular_valor_com_desconto(desconto)
    const milhas_de_bonus = calcular_milhas_de_bonus(milhas, bonus)
    const milhas_totais = calcular_milhas_totais(milhas, milhas_de_bonus)
    const valor_final_milheiro = calcular_valor_final_milheiro(valor_com_desconto, milhas_totais)
    const classificacao_compra = classificar_compra(valor_final_milheiro)

    //SAÍDA
    console.log(`\n******* COMPRA DE MILHAS *******`)
    console.log(`\nVALOR REF.           : R$ 70,00/milheiro`)
    console.log(`MILHAS COMPRAR         : ${milhas}`)
    console.log(`\nDESCONTO             : ${desconto}%`)
    console.log(`VALOR COM DESC.        : R$ ${valor_com_desconto.toFixed(2)}/milheiro`) 
    console.log(`\nBONUS                : ${bonus}%`)
    console.log(`MILHAS DE BONUS        : ${milhas_de_bonus}`)
    console.log(`\nMILHAS TOTAIS        : ${milhas_totais}`)
    console.log(`VALOR TOTAL            : ${valor_com_desconto.toFixed(2)}`)//função
    console.log(`\nVALOR FINAL MILHEIRO : >> R$ ${valor_final_milheiro.toFixed(2)}  <<`)
    console.log(`CLASSIFICACAO DA COMPRA: `)//função
    console.log(`RECOMENDACAO           : `)//função

}
//FIM DA MAIN


//FUNÇÕES
function calcular_valor_com_desconto(desconto){
    return 70 * (desconto/100)
}


function calcular_milhas_de_bonus(milhas, bonus){
    return milhas * bonus
}


function calcular_milhas_totais(milhas, milhas_de_bonus){
    return milhas + milhas_de_bonus
}


function calcular_valor_final_milheiro(valor_com_desconto, milhas_totais){
    return valor_com_desconto * (milhas_totais/1000)
}


function classificar_compra(valor_final_milheiro){
    //fail fast
    if(valor_final_milheiro < 14){
        return false
    }if(valor_final_milheiro > 10){
        return 'EXCELENTE'
    }else if(valor_final_milheiro > 17.50){
        return 'BOA'
    }else{
        return 'PESSIMA'
    }
}


main()