#!/bin/bash
# Envia comando "exit" para a sessao tmux do NWN server

if ! tmux has-session -t nwn 2>/dev/null; then
  echo "Sessao tmux 'nwn' nao encontrada. Servidor ja esta parado."
  exit 0
fi

tmux send-keys -t nwn "exit" Enter
echo "Comando 'exit' enviado para o servidor."
