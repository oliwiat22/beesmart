import "./loginPage.css";

export const LoginPage = () => {
    return (
        <>
          <h1>Cześć!</h1>
          <form>
            <label htmlFor="username">Nazwa użytkownika:</label>
            <input type="text" id="username" name="username" required />
    
            <label htmlFor="password">Hasło:</label>
            <input type="password" id="password" name="password" required />
    
            <div>
              <button type="submit" className="button">
                Zaloguj się
              </button>
              <a href="/register" className="button" id="register-button">
                Nie mam jeszcze konta
              </a>
            </div>
          </form>
        </>
      );
}