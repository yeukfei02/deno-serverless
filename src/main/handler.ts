import {
  APIGatewayProxyEvent,
  Context,
} from "https://deno.land/x/lambda/mod.ts";

export const main = async (event: APIGatewayProxyEvent, context: Context) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "deno-serverless api",
    }),
  };
  return response;
};
