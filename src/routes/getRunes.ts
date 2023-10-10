import 'dotenv/config';

import { FastifyInstance } from 'fastify';
import got from 'got';

const apiKey = process.env.RIOT_API_KEY;
const summonerId = process.env.SUMMONER_ID;
const region = process.env.REGION;

const runes = require('../../runes.json');

export const getRunesRoute = async (app: FastifyInstance) => {
  app.get('/getRunesRoute', async () => {
    try {
      const url = `https://${region}.api.riotgames.com/lol/spectator/v4/active-games/by-summoner/${summonerId}?api_key=${apiKey}`;

      console.log(url)

      const response = await got(url);

      const data: any = JSON.parse(response.body);

      const participant = data.participants.find(
        (p) => p.summonerId === summonerId
      );

      if (!participant) return `${summonerId} não está na partida`;

      if (data && data.participants) {
        participant.perks.perkIds = participant.perks.perkIds.map((perkId) => {
          const perkInfo = runes.find((perk) => perk.id === perkId);
          return perkInfo ? perkInfo.name : `Runa Desconhecida`;
        });

        const runesText = `────────────────────────────────
        Runas do ${participant.summonerName} nessa partida:
        ${participant.perks.perkIds.join(
          ' - '
        )} ────────────────────────────────`;

        return runesText;
      }
    } catch (error) {
      
      switch (error.response.statusCode) {
        case 400:
          return `[DEBUG] ${error.response.body}`;
        case 401:
        case 403:
          return 'APIKey inválida ou expirada gere uma nova em https://developer.riotgames.com/'
        case 404:
          return 'Use !runas ou !runes após o jogo iniciar';
        case 429:
          return 'Aguarde alguns minutos e use o comando novamente';
        default:
          throw error;
      }

    }
  });
};
