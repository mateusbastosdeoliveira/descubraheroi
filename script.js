// Estragou toda a graça

// Saia daqui e retorne a página principal































function verificarHeroi() {
    const input_heroi = document.getElementById("input-heroi").value
    input_heroi.trim()

    if (input_heroi === "capitão pátria") {
        h1 = document.getElementById("heroi1").style.backgroundImage = 'url("homelander.jpeg")'
        document.getElementById("heroi1").style.backgroundSize = "100%"
        document.getElementById("input-heroi").value = ""

        
        const elemento = document.getElementById('heroi1');
        const posicao = elemento.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: posicao, behavior: 'smooth' });

    }

    if (input_heroi === "trem bala") {
        h1 = document.getElementById("heroi2").style.backgroundImage = 'url("trembala.jpeg")'
        document.getElementById("heroi2").style.backgroundSize = "100%"
        document.getElementById("input-heroi").value = ""

        
        const elemento = document.getElementById('heroi2');
        const posicao = elemento.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: posicao, behavior: 'smooth' });

    }

    if (input_heroi === "black noir") {
        h1 = document.getElementById("heroi3").style.backgroundImage = 'url("blacknoir.jpeg")'
        document.getElementById("heroi3").style.backgroundSize = "100%"
        document.getElementById("input-heroi").value = ""

        
        const elemento = document.getElementById('heroi3');
        const posicao = elemento.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: posicao, behavior: 'smooth' });

    }
    if (input_heroi === "billy bruto") {
        h1 = document.getElementById("heroi4").style.backgroundImage = 'url("billy.jpeg")'
        document.getElementById("heroi4").style.backgroundSize = "100%"
        document.getElementById("input-heroi").value = ""


        const elemento = document.getElementById('heroi4');
        const posicao = elemento.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: posicao, behavior: 'smooth' });

    }


}