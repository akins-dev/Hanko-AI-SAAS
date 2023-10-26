FROM --platform=linux/amd64 oven/bun
COPY . .
RUN bun run build