FROM registry.nexproject.ir/dockerhub/library/node:18.19.0-bullseye-slim AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable
COPY . /app
WORKDIR /app

FROM base AS build
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run build

FROM registry.nexproject.ir/dockerhub/library/caddy:2.7.6-alpine
COPY --from=build /app/dist /usr/share/caddy
COPY docker/Caddyfile /etc/caddy/Caddyfile

EXPOSE 80
