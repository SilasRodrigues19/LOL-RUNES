import 'dotenv/config';

import { FastifyInstance } from 'fastify';
import fetch from 'node-fetch';

const apiKey = process.env.RIOT_API_KEY;
const region = process.env.REGION;

import runes from '../../runes.json';

export const getRunesRoute = async (app: FastifyInstance) => {
  app.get('/getRunesRoute', async () => {

    try {

      const summonerIdResponse = await fetch(
        'http://localhost:3333/getSummonerId',
        { method: 'GET' }
      );
      const summonerData = await summonerIdResponse.text();
      const summonerId: string = summonerData;
      
      const url = `https://${region}.api.riotgames.com/lol/spectator/v4/active-games/by-summoner/${summonerId}?api_key=${apiKey}`;

      // console.log(url);

      const response = await fetch(url, { method: 'GET' });

      if (!response.ok) {
        switch (response.status) {
          case 400:
            return `[DEBUG] ${await response.text()}`;
          case 401:
          case 403:
            return 'APIKey inválida ou expirada gere uma nova em https://developer.riotgames.com/';
          case 404:
            return 'Use !runas ou !runes após o jogo iniciar';
          case 429:
            return 'Aguarde alguns minutos e use o comando novamente';
          default:
            throw new Error(`Erro desconhecido: ${response.status}`);
        }
      }

      const data = await response.json();

      const participant = data.participants.find(
        (p: {summonerId: string}) => p.summonerId === summonerId
      );

      if (!participant) return `${summonerId} não está na partida`;

      if (data && data.participants) {
        participant.perks.perkIds = participant.perks.perkIds.map((perkId: number) => {
          const perkInfo = runes.find((perk) => perk.id === perkId);
          return perkInfo ? perkInfo.namePt : `Runa Desconhecida`;
        });

        const runesText = `────────────────────────────────
        Runas do ${participant.summonerName} nessa partida:
        ${participant.perks.perkIds.join(
          ' - '
        )} ────────────────────────────────`;

        return runesText;
      }
    } catch (err) {
      throw err; 
    }
  });
};
