import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import App from "../pages/index";
import AppProvider from '../provider/AppProvider';

describe('Testa se os elementos aparecem na página', () => {
  it('Renderiza o elemento "Olá seja bem vindo na página"', () => {
    render(<AppProvider><App /></AppProvider>);
    const header1 = screen.getByText('Olá, seja bem-vindo!');
    expect(header1).toBeInTheDocument();
  });
  it('Renderiza os campos "email" e "senha"', () => {
    render(<AppProvider><App /></AppProvider>);
    const email = screen.getByLabelText('E-MAIL');
    const senha = screen.getByLabelText('SENHA');
    expect(email).toBeInTheDocument();
    expect(senha).toBeInTheDocument();
  });
});
describe('Testa se os elementos realizam suas funcionalidades', () => {
  it('Verifica a validação de preenchimento correto do campo email', () => {
    render(<AppProvider><App /></AppProvider>);
    const email = screen.getByLabelText('E-MAIL');
    userEvent.type(email, 'user@mail.com');
    const invalido = screen.queryByText('Digite um email válido;');
    const style = window.getComputedStyle(invalido)
    expect(style.display).toBe('none')
  });
  it('Verifica o erro de preenchimento incorreto do campo email', () => {
    render(<AppProvider><App /></AppProvider>);
    const email = screen.getByLabelText('E-MAIL');
    userEvent.type(email, 'user.name@mail.com');
    const invalido = screen.getByText('Digite um email válido;');
    const style = window.getComputedStyle(invalido)
    expect(style.display).toBe('block')
  });
});