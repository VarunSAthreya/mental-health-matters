import { z } from 'zod';
import { createProtectedRouter } from './protected-router';

export const surveyRouter = createProtectedRouter()
    .query('get', {
        input: z.object({
            name: z.string(),
        }),
        async resolve({ ctx, input }) {
            return ctx.prisma.survey.findUnique({
                where: {
                    name: input.name,
                },
            });
        },
    })
    .mutation('create', {
        input: z.object({
            name: z.string(),
            data: z.string(),
        }),
        async resolve({ ctx, input }) {
            const survey = await ctx.prisma.survey.create({
                data: {
                    name: input.name,
                    questions: input.data,
                    results: {},
                },
            });

            return survey;
        },
    })
    .mutation('submit', {
        input: z.object({
            name: z.string(),
            result: z.string(),
        }),
        async resolve({ ctx, input }) {
            const result = ctx.prisma.surveyResults.create({
                data: {
                    Survey: {
                        connect: {
                            name: input.name,
                        },
                    },
                    user: {
                        connect: {
                            id: ctx.session.user.id,
                        },
                    },
                    result: input.result,
                },
            });
            return result;
        },
    });
