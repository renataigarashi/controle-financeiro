import './Message.css';

const Message = ({ children }) => {
  return <h1>Controle Financeiro de {children || 'Usuário'}</h1>;
};

export default Message;
