interface Usuario {
    nome: string,
    email: string,
    address?: string
};

function getUser(): Usuario {
    return {
        nome: 'Adailton',
        email: 'adailton@adailton.com'
    };
}

function setUser(user: Usuario) {
    // ...
}