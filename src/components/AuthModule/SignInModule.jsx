export default function SignInModule() {
  return (
    <>
      <div>
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
