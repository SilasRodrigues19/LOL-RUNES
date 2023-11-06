import { FastifyInstance, RouteShorthandOptions } from 'fastify';
import fetch from 'node-fetch';
import 'dotenv/config';

const apiKey = process.env.RIOT_API_KEY;
const summonerName = process.env.SUMMONER_NAME;
const regionCode = process.env.REGION;

interface SummonerData {
  id: string;
  accountId: string;
  puuid: string;
  name: string;
  profileIconId: number;
  revisionDate: number;
  summonerLevel: number;
}

export async function getSummonerId(app: FastifyInstance) {
  const opts: RouteShorthandOptions = {
    schema: {
      response: {
        200: {
          type: 'object',
          properties: {
            id: { type: 'string' },
          },
        },
      },
    },
  };

  app.get('/getSummonerId', opts, async (_, reply) => {
    try {
      const response = await fetch(
        `https://${regionCode}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${apiKey}`,
        { method: 'GET' }
      );

      const data = (await response.json()) as SummonerData;

      reply.send(data.id);
    } catch (err) {
      reply.code(500).send({ error: err.message });
    }
  });
}
