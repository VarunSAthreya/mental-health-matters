# [Mental Health Matters](https://mental-health-matters.vercel.app/)

Mental Health Matters is a web application that is used to help people reach out to medical professionals and get help for their mental health issues. It is a platform that allows people to book an appointment with them and take rottenly checkups. It also allows people to get help from the professionals and get the best treatment for their mental health issues, based on their symptoms and survey data.

## Tech Stack

### Frontend

- [Next.js](https://nextjs.org/)
- [Chakra UI](https://chakra-ui.com/)
- [TypeScript](https://www.typescriptlang.org/)

### Backend

- [tRPC](https://trpc.io/)
- [Prisma](https://www.prisma.io/)
- [TypeScript](https://www.typescriptlang.org/)

### Database

- [PostgreSQL](https://www.postgresql.org/)

### Authentication

- [NextAuth.js](https://next-auth.js.org/)

## Prerequisites

- [Node.js](https://nodejs.org/en/)
- [PNPM](https://pnpm.io/)
- [PostgreSQL](https://www.postgresql.org/)

## Installation

1. Clone the repository

```bash
git clone https://github.com/VarunSAthreya/mental-health-matters.git
```

2. Install dependencies

```bash
pnpm install
```

3. Create a `.env` file in the root directory and add the following environment variables, or copy the contents of `.env.example` to `.env`

```bash
# Database
DATABASE_URL=postgres://<username>:<password>@localhost:5432/<database_name>
# Next Auth
NEXTAUTH_SECRET=<secret>
NEXTAUTH_URL=<URL>

# Next Auth Discord and Github Provider
DISCORD_CLIENT_ID=<client_id>
DISCORD_CLIENT_SECRET=<client_secret>

GITHUB_CLIENT_ID=<client_id>
GITHUB_CLIENT_SECRET=<client_secret>

# Razorpay
NEXT_PUBLIC_RAZORPAY_KEY_ID=<key_id>
NEXT_PUBLIC_RAZORPAY_KEY_SECRET=<key_secret>
```

4. Run the development server

```bash
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

6. Build the application

```bash
pnpm build
```
