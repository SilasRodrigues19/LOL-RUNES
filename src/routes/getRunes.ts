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

      if (response.statusCode === 404) return 'Use !runas após o jogo iniciar.';

      if (response.statusCode === 429)
        return 'Aguarde alguns minutos e tente novamente.';

      if (response.statusCode === 403)
        return `${response.statusCode} - DEBUG: ${response.statusMessage}`;

      if (response.statusCode === 400)
        return `${response.statusCode} - DEBUG: Region: ${region} SummonerId: ${summonerId}`;

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

        const runesText = `──────────────────────────────── ${participant.perks.perkIds.join(
          ', '
        )} ────────────────────────────────`;

        return runesText;
      }
    } catch (error) {
      throw error;
    }
  });
};
