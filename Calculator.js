function valueButton(e){
    form.display.value += e.value;
}

function Delete(){
    form.display.value = null;
}

function Calculate(){
    form.display.value = eval(form.display.value)
}
