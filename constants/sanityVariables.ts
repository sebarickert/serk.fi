const { ENVIRONMENT } = process.env;

// const validateEnvVariable = <T>(value: T | undefined, errorMsg: string): T => {
//   if (value === undefined) {
//     throw new Error(`Missing Environment Variable: ${errorMsg}`);
//   }
//   return value;
// };

export const dataset = ENVIRONMENT ? "development" : "production";
// export const projectId = validateEnvVariable(
//   NEXT_PUBLIC_SANITY_PROJECT_ID,
//   "NEXT_PUBLIC_SANITY_PROJECT_ID",
// );
