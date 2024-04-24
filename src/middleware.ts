export { default } from "next-auth/middleware";

export const config = { matcher: ["/users/:path*"] };

//path apapun setelah /users/ maka semuanya akan diprotect
