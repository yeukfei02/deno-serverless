import {
  DynamoDBClient,
  createClient,
} from "https://denopkg.com/chiefbiiko/dynamodb/mod.ts";

const dynamodb: DynamoDBClient = createClient();

export const getDynamodb = () => {
  return dynamodb;
};
