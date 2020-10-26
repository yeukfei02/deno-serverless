import { APIGatewayProxyEvent } from "https://deno.land/x/lambda/mod.ts";
import { deletePlayerByIdModel } from "../../model/deletePlayerById.ts";

export const deletePlayerById = async (event: APIGatewayProxyEvent) => {
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
