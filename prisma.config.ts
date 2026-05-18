import { defineConfig, env } from "@prisma/config";
export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    url: "postgresql://neondb_owner:npg_Xmh7j6NOIGFP@ep-little-water-aoal8w8y-pooler.c-2.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
  },
});
