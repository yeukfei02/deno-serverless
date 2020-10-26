import { APIGatewayProxyEvent } from "https://deno.land/x/lambda/mod.ts";

export const main = async (event: APIGatewayProxyEvent) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "deno-serverless api",
    }),
  };
  return response;
};
