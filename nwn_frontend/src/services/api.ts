import axios from 'axios';
import { Char } from '../types/Char';

const api = axios.create({
  baseURL: (process.env.REACT_APP_API_URL || 'http://localhost:3000') + '/api',
});

export function fetchOnlinePlayers(): Promise<Char[]> {
  return api.get<Char[]>('/chars/online/1').then((res) => res.data);
}

export function login(username: string, password: string): Promise<{ access_token: string }> {
  return api.post<{ access_token: string }>('/auth/login', { username, password }).then((res) => res.data);
}

export function serverAction(action: 'start' | 'stop' | 'restart', token: string): Promise<unknown> {
  return api
    .post(`/server/${action}`, {}, { headers: { Authorization: `Bearer ${token}` } })
    .then((res) => res.data);
}

export interface AdminPlayer {
  account_name: string;
  serial_key: string;
}

export interface AdminCharacter {
  file: string;
  name: string;
}

export function fetchAdminPlayers(token: string): Promise<AdminPlayer[]> {
  return api
    .get<AdminPlayer[]>('/admin/players', { headers: { Authorization: `Bearer ${token}` } })
    .then((res) => res.data);
}

export function fetchAdminPlayerCharacters(
  serialKey: string,
  token: string,
): Promise<AdminCharacter[]> {
  return api
    .get<AdminCharacter[]>(`/admin/players/${encodeURIComponent(serialKey)}/characters`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => res.data);
}
