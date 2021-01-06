import {
  APIGatewayProxyEvent,
  Context,
} from "https://deno.land/x/lambda/mod.ts";
import { deletePlayerByIdModel } from "../../model/deletePlayerById.ts";

export const deletePlayerById = async (
  event: APIGatewayProxyEvent,
  context: Context
) => {
  let response = {};

  if (event.pathParameters) {
    const id = event.pathParameters.id;
    if (id) {
      await deletePlayerByIdModel(id);
    }

    response = {
      statusCode: 200,
      body: JSON.stringify({
        message: "deletePlayerById",
      }),
    };
  }

  return response;
};
