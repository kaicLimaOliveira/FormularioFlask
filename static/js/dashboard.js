document.getElementById('valueSelect').addEventListener('change', () => {
    if (document.getElementById('valueSelect').value == 'nao') {
        document.getElementById('isActiveOrNo').style.display = 'none';
    } else {
        document.getElementById('isActiveOrNo').style.display = 'block';
    }
})

let myModal = new bootstrap.Modal(document.getElementById("modalAlert"), {});

//Valida os campos vazios
const btnSubmit = document.getElementById('btnSubmit').addEventListener('click', (event) => {

    event.preventDefault() //valida o botão submit HTML e não envia sem fazer a logica if
    if (document.getElementById('inputSocialReason').value == '' ||
        document.getElementById('inputName').value == '' ||
        document.getElementById('cnpj') == '' ||
        document.getElementById('inputTel') == '' ||
        document.getElementById('inputEmail').value == '' ||
        document.getElementById('inputLink').value == '' ||
        document.getElementById('inputCode').value == '' ||
        flagInput.value == ''
    ) {
        document.getElementById('titleModal').innerHTML = 'Formulário preenchido incorretamente'
        document.getElementById('modalBody').innerHTML = 'Você deve preencher todos os campos'
        myModal.show()
    } else {
        document.getElementById("formGroup").submit()
    }
})

const flagInput = document.getElementById('flagInput')
flagInput.addEventListener('change', () => {
    if (flagInput.files[0] != undefined) {
        if (flagInput.files[0].type.split('/')[0] != 'image') {
            document.getElementById('titleModal').innerHTML = 'Arquivo incompatível'
            document.getElementById('modalBody').innerHTML = 'O arquivo deve ser do tipo imagem'
            myModal.show();
            flagInput.value = ''
        }
        if ((flagInput.files[0].size / 1000 / 1000).toFixed(3) >= 5) {
            document.getElementById('titleModal').innerHTML = 'Arquivo incompatível'
            document.getElementById('modalBody').innerHTML = 'A imagem não pode ser maior que 5MB'
            myModal.show();
            flagInput.value = ''
        }
    }
})

const buttonExit = document.getElementById('buttonExit')
buttonExit.addEventListener('click', () => {
    myModal.hide() //Hide - esconde o botão
})

const cnpj = document.getElementById('cnpj')
cnpj.addEventListener('keyup', () => {
    cnpj.value = cnpj.value.replace(/\D/g, '')
    if (cnpj.value.length >= 13) {
        const cnpj_format = cnpj.value.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5")
        cnpj.value = cnpj_format
    }

})

const tel = document.getElementById('inputTel')
tel.addEventListener('keyup', () => {
    tel.value = tel.value.replace(/\D/g, '')
    if (tel.value.length >= 11) {
        const telFormat = tel.value.replace(/^(\d{4})(\d{3})(\d{4})/, "$1 $2 $3 ")
        tel.value = telFormat
    }
})

function validateEmail() {
    let email = document.getElementById('inputEmail')
    let errorEmail = document.getElementById('errorEmail')

    if (!email.checkValidity()) {
        errorEmail.innerHTML = 'Email invalido'
    }
}

function resetEmail() {
    let errorEmail = document.getElementById('errorEmail')

    if (errorEmail.innerHTML = 'Email invalido') {
        errorEmail.innerHTML = ''
    }
}

const sendRequest = async () => {
    const valueCode = document.getElementById('inputCode').value
    const response = await fetch("/verify-code", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 'code': valueCode })
    })

    const res = Object.entries(await response.json()).forEach(([key, value]) => {
        if (value == 'fulfilled') {
            document.getElementById('titleModal').innerHTML = 'Número já foi registrado'
            document.getElementById('modalBody').innerHTML = 'O número digitado já existe, por favor,  digite outro'
            myModal.show();
        }
    })
}

