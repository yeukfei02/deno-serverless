import { APIGatewayProxyEvent } from "https://deno.land/x/lambda/mod.ts";
import { uuid } from "https://deno.land/x/uuid/mod.ts";
import { createPlayerModel } from "../../model/createPlayer.ts";

export const createPlayer = async (event: APIGatewayProxyEvent) => {
  let response = {};

  if (event.body) {
    const eventBodyStr = event.body as string;
    const body = JSON.parse(eventBodyStr);
    if (body) {
      const id = uuid();
      const playerName = body.playerName;
      const points = body.points;
      const createdAt = new Date().getTime();
      const updatedAt = new Date().getTime();

      const player = {
        id: id,
        playerName: playerName,
        points: points,
        createdAt: createdAt,
        updatedAt: updatedAt,
      };
      await createPlayerModel(player);

      response = {
        statusCode: 200,
        body: JSON.stringify({
          message: "deno-serverless api",
          id: id,
        }),
      };
    }
  }

  return response;
};
