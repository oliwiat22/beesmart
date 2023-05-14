import "./loginPage.css";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

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
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar />
                </LocalizationProvider>
              <button type="submit" className="button">
                Zaloguj się
              </button>
              <a href="RegisterPage.jsx" className="button" id="register-button">
                Nie mam jeszcze konta
              </a>
            </div>
          </form>
        </>
      );
}