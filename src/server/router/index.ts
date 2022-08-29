// src/server/router/index.ts
import superjson from 'superjson';
import { createRouter } from './context';

import { exampleRouter } from './example';
import { protectedExampleRouter } from './protected-example-router';
import { userRouter } from './user';

export const appRouter = createRouter()
    .transformer(superjson)
    .merge('example.', exampleRouter)
    .merge('user.', userRouter)
    .merge('question.', protectedExampleRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
