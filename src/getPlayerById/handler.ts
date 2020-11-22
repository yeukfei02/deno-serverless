import { APIGatewayProxyEvent } from "https://deno.land/x/lambda/mod.ts";
import { getPlayerByIdModel } from "../../model/getPlayerById.ts";

export const getPlayerById = async (event: APIGatewayProxyEvent) => {
  let response = {};

  let player = null;
  if (event.pathParameters) {
    const id = event.pathParameters.id;
    if (id) {
      player = await getPlayerByIdModel(id);
    }

    response = {
      statusCode: 200,
      body: JSON.stringify({
        message: "getPlayerById",
        player: player.Item,
      }),
    };
  }

  return response;
};
