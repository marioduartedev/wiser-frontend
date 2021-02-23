import { useContext } from 'react';
import AppContext from '../context/AppContext';
import Form from 'react-bootstrap/Form';
import { ValidEmail } from '../styles/Divs';

export default function LoginForm() {
  const { setLogin, login, validation, setValidation } = useContext(AppContext);

  const verifyEmail = (email) => {
    const emailFormat = /^[a-z0-9]+@[a-z0-9]+\.[a-z]+$/.test(email);
    if(emailFormat) {
      setValidation(true);
    } else {
      setValidation(false);
    }
  }

  const onChange = (event) => {
    const { id, value } = event.target;
    setLogin({ ...login, [id]: value });
    if(id === 'email') verifyEmail(value);    
  }

  return (
    <Form>
      <Form.Group>
        <Form.Label htmlFor="email">E-MAIL</Form.Label>
        <Form.Control
          type="email"
          value={login.email}
          onChange={onChange}
          id="email"
          style= { 
            validation
            ? { border: "1px solid #989FDB" }
            : { border: "1px solid #FF377F" } 
          }
        />
        <ValidEmail valid={validation}>Digite um email válido;</ValidEmail>
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="senha">SENHA</Form.Label>
        <Form.Control
          type="password"
          value={login.senha}
          onChange={onChange}
          id="senha"
        />
      </Form.Group>
    </Form>
  )
}
