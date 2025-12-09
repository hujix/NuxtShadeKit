import type { H3Event } from "h3";

export default defineEventHandler(async (_event: H3Event) => {
  const data = await $fetch("https://v1.hitokoto.cn");

  // 使用统一响应函数
  return success(data);
});
