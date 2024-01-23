import "./AuthModule.css";

export default function SignUpModule() {
  return (
    <>
      <div className="authmodule-container">
        <label htmlFor="email">Email</label>

        <input
          type="email"
          id="email"
          name="email"
          placeholder="Votre email"
          required
        />

        <label htmlFor="password">Mot de passe</label>

        <input
          type="password"
          id="password"
          name="password"
          placeholder="Votre mot de passe"
          required
        />

        <label htmlFor="passwordConfirm">Confirmer votre mot de passe</label>

        <input
          type="password"
          id="passwordConfirm"
          name="passwordConfirm"
          placeholder="Confirmer votre mot de passe"
          required
        />

        <button type="submit">S'inscrire</button>
      </div>
    </>
  );
}
