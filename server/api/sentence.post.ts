import type { H3Event } from "h3";
export default defineEventHandler(async (event: H3Event) => {
  await requireUserSession(event);
  const response = await $fetch("https://v1.hitokoto.cn");

  return {
    code: 200,
    message: "Success",
    data: response,
  };
});
