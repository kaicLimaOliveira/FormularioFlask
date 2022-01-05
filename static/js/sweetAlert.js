var url_atual = window.location.href.split('?')
if(url_atual.length > 1){

    url_atual = url_atual[1].split('&');
    url_atual.forEach(value =>{
        let valor = value.split('=')
    
        if(valor[0] == 'msg'){
            const valUrlMessage = valor[1]
    
            if(valUrlMessage == 'success'){
                getUrlStatusForm('success', 'Sucesso', 'Formulário enviado com sucesso')
            } else if (valUrlMessage == 'invalid-code') {
                getUrlStatusForm('error', 'Oops...', 'Código inválido...')
            }else if (valUrlMessage == 'error') {
                getUrlStatusForm('error', 'Oops...', 'Erro no envio...')
            }else if(valUrlMessage == 'form-void'){
                getUrlStatusForm('error', 'Oops...', 'Formulario não foi totalmente preenchido')
            }
        }        
    })
}

function getUrlStatusForm(icon, title, text){
    Swal.fire({
        icon: icon,
        title: title,
        text: text
    })
}