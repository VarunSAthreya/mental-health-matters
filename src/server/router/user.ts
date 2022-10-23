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
                    },
                    appointments: true,
                },
            });
        },
    });
