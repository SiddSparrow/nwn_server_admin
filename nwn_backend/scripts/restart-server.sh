#!/bin/bash
# Reinicia o servidor NWN: para, espera, e sobe novamente

WAIT_SECONDS=${1:-5}

if tmux has-session -t nwn 2>/dev/null; then
  tmux send-keys -t nwn "exit" Enter
  echo "Comando 'exit' enviado. Aguardando ${WAIT_SECONDS}s..."
  sleep "$WAIT_SECONDS"
  tmux kill-session -t nwn 2>/dev/null
fi

tmux new-session -d -s nwn ./run-server.sh
echo "Servidor reiniciado na sessao tmux 'nwn'."
