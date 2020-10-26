import { getDynamodb } from "../db/db.ts";

const db = getDynamodb();
const tableName = "Players";

export const getPlayersModel = async () => {
  let result = null;

  try {
    const params = {
      TableName: tableName,
      ProjectionExpression: "id, playerName, points, createdAt, updatedAt",
    };
    result = await db.scan(params);
  } catch (e) {
    console.log("error = ", e);
  }

  return result;
};
