#!/bin/bash
# Inicia o servidor NWN em uma nova sessao tmux

if tmux has-session -t nwn 2>/dev/null; then
  echo "Sessao tmux 'nwn' ja existe. Servidor pode ja estar rodando."
  exit 1
fi

tmux new-session -d -s nwn ./run-server.sh
echo "Servidor iniciado na sessao tmux 'nwn'."
