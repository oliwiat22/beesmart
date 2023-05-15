import './registerPage.css';

export const RegisterPage = () => {
  return (
    <>
      <h1>Dołącz do naszej społeczności!</h1>
      <form>
        <label htmlFor="name">Imię i nazwisko:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="username">Nazwa użytkownika:</label>
        <input type="text" id="username" name="username" required />

        <label htmlFor="email">E-mail:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="password">Hasło:</label>
        <input type="password" id="password" name="password" required />

        <label htmlFor="confirm-password">Potwierdź hasło:</label>
        <input type="password" id="confirm-password" name="confirm-password" required />

        
        <button type="submit" className="button">
        <a href="/">
          Zarejestruj się
          </a>
        </button>
      </form>
    </>
  );
};
