import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from "https://deno.land/x/lambda/mod.ts";
import { getPlayerByIdModel } from "../../model/getPlayerById.ts";

export const getPlayerById = async (
  event: APIGatewayProxyEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  let response = {};

  let player = null;
  if (event.pathParameters) {
    const id = event.pathParameters.id;
    if (id) {
      player = await getPlayerByIdModel(id);
    }

    if (player) {
      if (player.Item) {
        response = {
          statusCode: 200,
          body: JSON.stringify({
            message: "getPlayerById",
            player: player.Item,
          }),
        };
      }
    } else {
      response = {
        statusCode: 200,
        body: JSON.stringify({
          message: "getPlayerById",
          player: {},
        }),
      };
    }
  }

  return response;
};
