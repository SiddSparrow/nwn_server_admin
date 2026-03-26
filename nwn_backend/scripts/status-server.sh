#!/bin/bash
# Verifica se o servidor NWN esta rodando

if tmux has-session -t nwn 2>/dev/null; then
  echo "online"
else
  echo "offline"
fi
