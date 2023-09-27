import {
    S3,
    S3ClientConfig,
    PutObjectCommand,
    DeleteObjectCommand,
  } from "@aws-sdk/client-s3";
  
  export async function S3Post(image: File, destination: string) {
    const s3Config: S3ClientConfig = {
      region: process.env.BUCKET_REGION,
      credentials: {
        accessKeyId: process.env.BUCKET_ACCESS_KEY!,
        secretAccessKey: process.env.BUCKET_SECRET_ACCESS_KEY!,
      },
    };
    const s3 = new S3(s3Config);
  
    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);
  
    const key = `${destination}/${Date.now()}-${image.name}`;
    const params = {
      Bucket: process.env.BUCKET_NAME,
      Key: key,
      Body: buffer,
      ContentType: image.type,
    };
  
    const command = new PutObjectCommand(params);
    try {
      await s3.send(command);
  
      const url = `https://${process.env.BUCKET_NAME}.s3.${process.env.BUCKET_REGION}.amazonaws.com/${key}`;
      return url;
    } catch (error) {
      console.error("Gagal mengunggah file ke S3:", error);
      throw error;
    }
  }
  
  export async function S3Delete(url: string) {
    const s3Config: S3ClientConfig = {
      region: process.env.BUCKET_REGION,
      credentials: {
        accessKeyId: process.env.BUCKET_ACCESS_KEY!,
        secretAccessKey: process.env.BUCKET_SECRET_ACCESS_KEY!,
      },
    };
    const s3 = new S3(s3Config);
  
    const link = new URL(url);
    const objectKey = decodeURIComponent(link.pathname.slice(1));
  
    const params = {
      Bucket: process.env.BUCKET_NAME,
      Key: objectKey,
    };
  
    const command = new DeleteObjectCommand(params);
  
    try {
      await s3.send(command);
    } catch (error) {
      console.error("Gagal meghapus file ke S3:", error);
      throw error;
    }
  }