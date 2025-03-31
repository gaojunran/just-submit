import { S3Client } from "@aws-sdk/client-s3";

export const s3Client = new S3Client({
  endpoint: import.meta.env.VITE_S3_ENDPOINT,
  region: import.meta.env.VITE_S3_REGION,
  credentials: {
    accessKeyId: import.meta.env.VITE_S3_ACCESS_KEY,
    secretAccessKey: import.meta.env.VITE_S3_SECRET_KEY,
  },
  requestChecksumCalculation: "WHEN_REQUIRED",
});
