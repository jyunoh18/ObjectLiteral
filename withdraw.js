var question1 = prompt("How much money do you have?");
var question2 = prompt("withdraw?")

var bankAccount={};

//waiting for data//
bankAccount["name"]="Jyunghyun";
bankAccount["balance"]=question1;
bankAccount["balance"]-=question2;



window.alert(bankAccount.balance);
