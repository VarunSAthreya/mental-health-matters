// src/server/router/index.ts
import superjson from 'superjson';
import { appointmentRouter } from './appointment';
import { createRouter } from './context';

import { paymentRouter } from './payment';
import { surveyRouter } from './survey';
import { userRouter } from './user';

export const appRouter = createRouter()
    .transformer(superjson)
    .merge('user.', userRouter)
    .merge('payment.', paymentRouter)
    .merge('appointment.', appointmentRouter)
    .merge('survey.', surveyRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
