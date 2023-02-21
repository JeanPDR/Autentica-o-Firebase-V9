import React from 'react';

const SolicitarViagemScreen = (props) => {
  return (
    <div>
      <h2>Solicitar viagem</h2>
      <button onClick={props.onCancelar}>Cancelar</button>
      <button onClick={props.onEnviar}>Enviar solicitação</button>
    </div>
  );
}

export default SolicitarViagemScreen;