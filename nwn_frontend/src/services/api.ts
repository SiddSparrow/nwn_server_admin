import axios from 'axios';
import { Char } from '../types/Char';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3000',
});

export function fetchOnlinePlayers(): Promise<Char[]> {
  return api.get<Char[]>('/chars/online/1').then((res) => res.data);
}
