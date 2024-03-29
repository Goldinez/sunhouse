// Ajustar abaixo para mostrar apenas uma vez - via cookie - e sumir depois do primeiro login - por sessão no caso

// Valida se o usuario esta logado, se ESTIVER, ele faz algo
// nesse bloco do if, colocar a acao de trocar os elementos html que se referem ao usuario logado e ao usuario deslogado

document.addEventListener('DOMContentLoaded', function () {
    userLoginArea();
});

//document.addEventListener("DOMContentLoaded", function () {
    //setTimeout(function () {
        //userLoginArea();
    //}, 2000); // 2 segundos
//});

//function userLoginArea() {
    //if (typeof dataLayer !== 'undefined') {

        // Itera sobre as entradas no dataLayer
        //for (var i = 0; i < dataLayer.length; i++) {

            // Verifica se a entrada "visitorLoginState" existe e possui o valor true
            //if (dataLayer[i].visitorLoginState === true) {
                //document.getElementById('login__notLogged').style.display = 'none';
                //document.getElementById('login__loggedIn').style.display = 'block';

                //var loginNotLogged = document.querySelectorAll('.login-notLogged');
                //var loginNotLogged = document.querySelectorAll('.login-loggedIn');

                //loginNotLogged.forEach(function(loginNotLogged_alvo) {
                    //loginNotLogged_alvo.style.display = 'none';
                //});

                //loginNotLogged.forEach(function(loginLoggedIn_alvo) {
                    //loginLoggedIn_alvo.style.display = 'block';
                //});

                // Inicialize o popover no botão
                //$('#logged_in').popover();

                // Mostre o popover
                //$('#logged_in').popover('show');

                // Oculte o popover após 5 segundos
                //setTimeout(function () {
                    //$('#logged_in').popover('hide');
                //}, 5000);

                //console.log("TRUE. Esta logado");

                // Se desejar interromper a iteração após encontrar a primeira ocorrência, usar o break
                //break;
            //} else { // else apenas para teste e depuracao
                //console.log('FALSE. Não esta logado');
            //}
        //}
    //}
//}


// New 11.03.2024:
function userLoginArea() {
    if (typeof dataLayer !== 'undefined') {
        var isLoggedIn = false; // Adicione uma variável para controlar o estado de login

        // Itera sobre as entradas no dataLayer
        for (var i = 0; i < dataLayer.length; i++) {
            // Verifica se a entrada "visitorLoginState" existe e possui o valor true
            if (dataLayer[i].visitorLoginState === true) {
                // ... Se a condição for atendida ...
                isLoggedIn = true; // Atualiza o estado de login
                break; // Se desejar interromper a iteração após encontrar a primeira ocorrência, usar o break
            }
        }

        if (isLoggedIn) {
            var loginNotLogged = document.querySelectorAll('.login-notLogged');
            var loginLoggedIn = document.querySelectorAll('.login-loggedIn');

            loginNotLogged.forEach(function(loginNotLogged_alvo) {
                loginNotLogged_alvo.style.display = 'none';
            });

            loginLoggedIn.forEach(function(loginLoggedIn_alvo) {
                loginLoggedIn_alvo.style.display = 'block';
            });
            
            // Inicia o popover
            // Teoricamente iniciando pelo sunhouse-custom.js ::
            // $('#logged_in').popover();

            // Executa o popover
            $('#logged_in').popover('show');
            
            setTimeout(function () {
                $('#logged_in').popover('hide');
            }, 5000);

            console.log("TRUE. Esta logado");
        } else {
            // else apenas para teste e depuracao
            console.log('FALSE. Não está logado');
        }
    }
}