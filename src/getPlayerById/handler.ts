import { APIGatewayProxyEvent } from "https://deno.land/x/lambda/mod.ts";
import { getPlayerByIdModel } from "../../model/getPlayerById.ts";

export const getPlayerById = async (event: APIGatewayProxyEvent) => {
  let response = {};

  let player = {};
  if (event.pathParameters) {
    const id = event.pathParameters.id;
    if (id) {
      const result = await getPlayerByIdModel(id);
      if (result) {
        player = result.Item;
      }
    }

    response = {
      statusCode: 200,
      body: JSON.stringify({
        message: "getPlayerById",
        player: player,
      }),
    };
  }

  return response;
};
