import { useCallback, useState } from 'react';
import { login } from 'services/auth.service';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = useCallback((event) => {
    setFormData((previous) => ({
      ...previous,
      [event.target.name]: event.target.value,
    }));
  }, []);

  const handleSubmit = useCallback(
    async (event, { username, password }) => {
      event.preventDefault();
      try {
        setLoading(true);
        await login(username, password);
        setLoading(false);
        navigate('/private1');
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    },
    [navigate],
  );

  return (
    <form onSubmit={(event) => handleSubmit(event, formData)}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="username">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <button disabled={loading}>{loading ? 'Loading…' : 'Submit'}</button>
    </form>
  );
}
