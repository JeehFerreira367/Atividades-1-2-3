let nome =(prompt(`Digite seu nome ,`));{
    confirm("Este e seu nome " + nome + "?");
    
    }
    let idade = Number(prompt(`Digite sua idade`));{
        confirm(" Voce tem " + idade + " anos,");
    
    }
    if (idade >= 25 && idade <=60) {
console.log ("sua idade foi aprovada .");
    }
    
    
    else{
        console.log("sua Idade foi reprovada . ")
    }
    let salario = Number(prompt("Digite seu salario ."));{
        confirm("Seu salario é " + salario + "?");

    }
    if (salario>=2000 ){
        console.log("Seu salario foi aprovado .")

    }

    else{
        console.log("Seu salrio foi aprovado .");
    }
    console.log("Voce " + nome + ", com o salario de " + salario + ",pode  pedir emprestimo no maximo de " +(salario*10))