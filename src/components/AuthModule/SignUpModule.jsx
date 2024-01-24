import "./AuthModule.css";

export default function SignUpModule() {
  return (
    <>
      <div className="authmodule-container">
        <form>
          <label htmlFor="email">Email</label>

          <input
            type="email"
            id="email-signup"
            name="email"
            placeholder="Votre email"
            required
          />

          <label htmlFor="password">Mot de passe</label>

          <input
            type="password"
            id="password-signup"
            name="password"
            placeholder="Votre mot de passe"
            autoComplete="on"
            required
          />

          <label htmlFor="passwordConfirm">Confirmer votre mot de passe</label>

          <input
            type="password"
            id="passwordConfirm-signup"
            name="passwordConfirm"
            placeholder="Confirmer votre mot de passe"
            autoComplete="on"
            required
          />

          <div className="validations">{/* <p>{validations}</p> */}</div>

          <button type="submit">S'inscrire</button>
        </form>
      </div>
    </>
  );
}
