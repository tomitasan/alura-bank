export default function ehMaiorDeIdade(campo) {
    const dataNascimento = new Date(campo.value);
    // console.log(dataNascimento);
    // validadeIdade(dataNascimento);

    // console.log("Maior de 18?: " + validadeIdade(dataNascimento));

    if (!validadeIdade(dataNascimento)) {
        campo.setCustomValidity('O usuário não é maior de idade');
    }
}

function validadeIdade(data) {
    const dataAtual = new Date();
    const dataMai18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

    return dataAtual >= dataMai18;
}