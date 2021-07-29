# Exemplary telegram bot

Good example of a telegram bot.

[![CI](https://github.com/Trard/exemplary_telegram_bot/actions/workflows/CI.yml/badge.svg)](https://github.com/Trard/exemplary_telegram_bot/actions/workflows/CI.yml)
[![CD](https://github.com/Trard/exemplary_telegram_bot/actions/workflows/CD.yml/badge.svg)](https://github.com/Trard/exemplary_telegram_bot/actions/workflows/CD.yml)

## Contents
1. [Installation](#installation)
    - [Docker](#docker)
    - [Github](#github)
        1. [Clone](#clone)
        2. [Dependencies](#dependencies)
2. [Run](#run)
    - [NPM](#npm-1)
    - [Docker](#docker-1)

## Installation

### Docker
```shell
docker pull trard/exemplary_telegram_bot
```

### Github

#### Clone
```shell
git clone https://github.com/Trard/exemplary_telegram_bot.git
```

#### Install Dependencies
```shell
npm i --only=prod
```

## Run

### NPM
```shell
npm run start
```

### Docker
```shell
docker run trard/exemplary_telegram_bot
```
