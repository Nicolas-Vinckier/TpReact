import "./AuthModule.css";

export default function SignInModule() {
  return (
    <>
      <div className="authmodule-container">
        <form>
          <label htmlFor="email">Email</label>

          <input
            type="email"
            id="email-signin"
            name="email"
            placeholder="Votre email"
            required
          />

          <label htmlFor="password">Mot de passe</label>

          <input
            type="password"
            id="password-signin"
            name="password"
            placeholder="Votre mot de passe"
            autoComplete="on"
            required
          />

          <button type="submit">Se connecter</button>
        </form>
      </div>
    </>
  );
}
