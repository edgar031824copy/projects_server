import moongose from "mongoose";

export const connectDb = async () => {
  try {
    const connection = await moongose.connect(process.env.DATABASE_URL!);

    console.log(
      `database connected successfully in ${connection.connection.host}`,
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("An unknown error occurred.");
    }
    process.exit(1);
  }
};
