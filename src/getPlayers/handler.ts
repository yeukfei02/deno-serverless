import { APIGatewayProxyEvent } from "https://deno.land/x/lambda/mod.ts";
import { getPlayersModel } from "../../model/getPlayers.ts";

export const getPlayers = async (event: APIGatewayProxyEvent) => {
  let response = {};

  const result = await getPlayersModel();

  let playersList: any[] = [];
  if (result) {
    for (let index = 0; index < result.length; index++) {
      const item = result[index];
      const items = item.Items;
      playersList.push(items);
    }

    response = {
      statusCode: 200,
      body: JSON.stringify({
        message: "getPlayers",
        players: playersList,
      }),
    };
  }

  return response;
};
