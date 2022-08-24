/* eslint no-console: 0 */
interface ActiveUser {
  authorized: boolean
  login?: string
  password?: string
}
let activeUser: ActiveUser = {
  authorized: false,
}

const credentials: ActiveUser[] = []

const register = (username: string, password: string): void => {
  try {
    if (username.length < 5) {
      throw new Error('Ваш логин слишком короткий')
    }
    if (password.length < 6) {
      throw new Error('Ваш пароль слишком короткий')
    }
    if (activeUser.authorized) {
      throw new Error(`Вы уже вошли в аккаунт под именем ${activeUser.login}`)
    }
    activeUser = {
      authorized: true,
      login: username,
      password,
    }
    credentials.push(activeUser)

    console.log('Пользователь зарегистрирован')
  } catch (error) {
    let errorMessage: string = 'Ошибка при регистрации'
    if (error instanceof Error) {
      errorMessage = `Ошибка при регистрации: ${error.message}`
    }
    console.log(errorMessage)
  }
}

const login = (username: string, password: string): void => {
  try {
    if (activeUser.authorized) {
      throw new Error(`Вы уже вошли в аккаунт под именем ${activeUser.login}`)
    }

    console.log('Вы успешно вошли в аккаунт')
    activeUser = {
      authorized: true,
      login: username,
      password,
    }
    credentials.push(activeUser)
  } catch (error) {
    let errorMessage: string = 'Ошибка при входе'
    if (error instanceof Error) {
      errorMessage = `Ошибка при входе: ${error.message}`
    }
    console.log(errorMessage)
  }
}

const whoami = (): void => {
  try {
    if (activeUser.authorized === false) {
      throw new Error('Вы не вошли в аккаунт')
    }

    console.log(`Логин пользователя, который авторизирован в данный момент: ${activeUser.login}`)
  } catch (error) {
    let errorMessage: string = 'Ошибка при получении данных'
    if (error instanceof Error) {
      errorMessage = `Ошибка при получении данных: ${error.message}`
    }
    console.log(errorMessage)
  }
}

const logout = (): void => {
  try {
    if (activeUser.authorized === false) {
      throw new Error('Вы не вошли в аккаунт')
    }

    activeUser = {
      authorized: false,
    }
    console.log('Вы успешно вышли из аккаунта')
  } catch (error) {
    let errorMessage: string = 'Ошибка при выходе из аккаунта:'
    if (error instanceof Error) {
      errorMessage = `Ошибка при выходе из аккаунта: ${error.message}`
    }
    console.log(errorMessage)
  }
}

register('Николай', '123')
register('Николай', '123456')
login('Василий', '2022')
logout()
whoami()
login('Василий', '2022')
logout()
logout()
console.log(credentials[0])
console.log(credentials[1])
