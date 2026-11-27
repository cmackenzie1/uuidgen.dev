name := "uuidgen-dev"

default:
    @just --list

fmt:
    pnpm biome format --write .

lint:
    pnpm biome lint --write .

build:
    pnpm --filter app build

deploy:
    pnpm --filter app deploy
