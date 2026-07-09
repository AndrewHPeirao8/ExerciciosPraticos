function cadastrar() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    let existe = usuarios.find(u => u.email === email);
    if (existe) {
        alert("Email já cadastrado, faça o login!");
        return;
    }

    usuarios.push({ nome, email, senha });
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    alert("Usuario cadastrado");
    window.location.href = "index.html";

}

function login() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    let usuario = usuarios.find
        (u => u.email === email && u.senha === senha);

    if (existe) {
        localStorage.setItem("usuarioLogado") = JSON.stringify(usuario);
        alert("Login realizado com sucesso!");
        window.location.href = "home.html";
    }

    else {
        alert("Email ou senha incorretos!");
    }

}

function logout() {
    localStorage.removeItem("usuarioLogado");
    alert("Logout realizado com sucesso!");
    window.location.href = "index.html";
}
if (window.location.pathname.includes("home.html")) {
    let usuario = JSON.parse(localStorage.getItem("usuarioLogado"));
    if (!usuario) {
        alert("Você precisa estar logado para acessar esta página!");
        window.location.href = "index.html";
    }
    else {
        document.getElementById("usuario").innerHTML = usuario.nome;
        document.getElementById("email").innerHTML = usuario.email;
    }
}