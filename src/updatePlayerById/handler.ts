import { APIGatewayProxyEvent } from "https://deno.land/x/lambda/mod.ts";
import { updatePlayerByIdModel } from "../../model/updatePlayerById.ts";

export const updatePlayerById = async (event: APIGatewayProxyEvent) => {
  let response = {};

  if (event.pathParameters) {
    const id = event.pathParameters.id;

    const eventBodyStr = event.body as string;
    const body = JSON.parse(eventBodyStr);

    if (id && body) {
      const updatePlayer = {
        id: id,
        playerName: body.playerName,
        points: body.points,
        updatedAt: new Date().getTime(),
      };
      await updatePlayerByIdModel(id, updatePlayer);
    }

    response = {
      statusCode: 200,
      body: JSON.stringify({
        message: "updatePlayerById",
      }),
    };
  }

  return response;
};
