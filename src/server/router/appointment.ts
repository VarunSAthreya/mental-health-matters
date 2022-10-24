import { z } from 'zod';
import { createProtectedRouter } from './protected-router';

export const appointmentRouter = createProtectedRouter().mutation('create', {
    input: z.object({
        date: z.date(),
        time: z.string(),
    }),
    async resolve({ ctx, input }) {
        const appointment = await ctx.prisma.appointment.create({
            data: {
                date: input.date,
                time: input.time,
                url: '',
                user: {
                    connect: {
                        id: ctx.session?.user?.id,
                    },
                },
            },
        });

        return appointment;
    },
});
