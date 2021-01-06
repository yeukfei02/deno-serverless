import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from "https://deno.land/x/lambda/mod.ts";
import { getPlayersModel } from "../../model/getPlayers.ts";

export const getPlayers = async (
  event: APIGatewayProxyEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  let response = {};

  const result = await getPlayersModel();

  let playersList: any[] = [];
  if (result) {
    playersList = result.Items;

    response = {
      statusCode: 200,
      body: JSON.stringify({
        message: "getPlayers",
        players: playersList,
      }),
    };
  } else {
    response = {
      statusCode: 200,
      body: JSON.stringify({
        message: "getPlayers",
        players: [],
      }),
    };
  }

  return response;
};
