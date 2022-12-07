import { z } from 'zod';
import { createProtectedRouter } from './protected-router';

export const userRouter = createProtectedRouter()
    .query('details', {
        async resolve({ ctx }) {
            return ctx.prisma.user.findUnique({
                where: {
                    id: ctx.session?.user?.id,
                },
            });
        },
    })
    .query('allDetails', {
        async resolve({ ctx }) {
            return ctx.prisma.user.findUnique({
                where: {
                    id: ctx.session?.user?.id,
                },
                include: {
                    payments: {
                        orderBy: {
                            createdAt: 'desc',
                        },
                    },
                    SurveyResults: {
                        where: {
                            userId: ctx.session?.user?.id,
                        },
                        orderBy: {
                            createdAt: 'desc',
                        },
                        include: {
                            Survey: true,
                        },
                    },
                    appointments: true,
                },
            });
        },
    })
    .mutation('edit', {
        input: z.object({
            age: z.number(),
            gender: z.enum(['M', 'F']),
        }),

        async resolve({ ctx, input }) {
            return ctx.prisma.user.update({
                where: {
                    id: ctx.session?.user?.id,
                },
                data: {
                    age: input.age,
                    gender: input.gender,
                },
            });
        },
    });
