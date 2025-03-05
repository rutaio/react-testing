import { useState } from 'react';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = () => {
    if (email === 'user@gmail.com' && password === '1234') {
      setMessage('Prisijungete sekmingai!');
    } else {
      setMessage('Neteisingi duomenys!');
    }
  };

  return (
    <div>
      <h1>Login Form</h1>
      {/* idarbinti inputai, seka ka zmogus irasys: */}
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {/* jei message yra tuscias stringas (reiskia - false), tada atvaizduok tuscia stringa: */}
      {message && <p>{message}</p>}
    </div>
  );
};
