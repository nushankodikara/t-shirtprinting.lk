FROM oven/bun:latest AS builder

WORKDIR /app

COPY package.json ./
COPY bun.lockb ./
COPY src ./

RUN bun install

COPY . .

RUN bun run build

FROM oven/bun:latest AS deployer

WORKDIR /app

COPY --from=builder /app/build .

EXPOSE 3000

CMD ["bun", "start"]