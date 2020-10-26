import { getDynamodb } from "../db/db.ts";

const db = getDynamodb();
const tableName = "Players";

export const updatePlayerByIdModel = async (id: string, updatePlayer: any) => {
  try {
    const params = {
      TableName: tableName,
      Key: {
        id: id,
      },
      UpdateExpression:
        "set #column1 = :value1, #column2 = :value2, #column3 = :value3",
      ExpressionAttributeNames: {
        "#column1": "playerName",
        "#column2": "points",
        "#column3": "updatedAt",
      },
      ExpressionAttributeValues: {
        ":value1": updatePlayer.playerName,
        ":value2": updatePlayer.points,
        ":value3": updatePlayer.updatedAt,
      },
    };
    await db.updateItem(params);
  } catch (e) {
    console.log("error = ", e);
  }
};
