import "./AuthModule.css";

export default function SignInModule() {
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

        <button type="submit">Se connecter</button>
      </div>
    </>
  );
}
