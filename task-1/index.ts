let activeUser: {
    authorized: boolean;
    login?: string;
    password?: string;
} = {
    authorized: false
};

let credentials:object[] = [];

function register(username:string, password:string):object {
    try {
        if (username.length < 5){
            throw new Error("Ваш логин слишком короткий");
        }; 
        if (password.length < 6) {
            throw new Error("Ваш пароль слишком короткий");
        };
        if(activeUser.authorized) {
            throw new Error("Вы уже вошли в аккаунт под именем " + activeUser.login);
        };

        console.log("Пользователь зарегистрирован");
        activeUser = {
            authorized: true,
            login: username,
            password: password
        };
        credentials.push(activeUser);
    } catch(e) {
        console.log("Ошибка при регистрации: " + e.message);
    };

    return activeUser;
};

function login(username:string, password:string):object {
    try {
        if(activeUser.authorized) {
            throw new Error("Вы уже вошли в аккаунт под именем " + activeUser.login);
        };

        console.log("Вы успешно вошли в аккаунт");
        activeUser = {
            authorized: true,
            login: username,
            password: password
        };
        credentials.push(activeUser);
    } catch(e) {
        console.log("Ошибка при входе: " + e.message);
    };

    return activeUser;
};

function whoami():void {
    try {
        if(activeUser.authorized == false) {
            throw new Error("Вы не вошли в аккаунт");
        };

        console.log("Логин пользователя, который авторизирован в данный момент: " + activeUser.login);
    } catch(e) {
        console.log("Ошибка при получении данных: " + e.message);
    };
};

function logout():object {
    try {
        if(activeUser.authorized == false) {
            throw new Error("Вы не вошли в аккаунт");
        };

        console.log("Вы успешно вышли из аккаунта");
    } catch(e) {
        console.log("Ошибка при выходе из аккаунта: " + e.message);
    }; 
    
    return activeUser = {
        authorized: false
    };
};



