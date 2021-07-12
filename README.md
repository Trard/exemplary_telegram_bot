# Exemplary telegram bot

Good example of a telegram bot.

[![CI](https://github.com/Trard/exemplary_telegram_bot/actions/workflows/CI.yml/badge.svg)](https://github.com/Trard/exemplary_telegram_bot/actions/workflows/CI.yml)
[![CD](https://github.com/Trard/exemplary_telegram_bot/actions/workflows/CD.yml/badge.svg)](https://github.com/Trard/exemplary_telegram_bot/actions/workflows/CD.yml)

## Contents
1. [Installation](https://github.com/trard/exemplary_telegram_bot/blob/master/README.md#installation)
    - [Docker](https://github.com/trard/exemplary_telegram_bot/blob/master/README.md#docker)
    - [Github](https://github.com/trard/exemplary_telegram_bot/blob/master/README.md#github)
        1. [Clone](https://github.com/trard/exemplary_telegram_bot/blob/master/README.md#clone)
        2. [Dependencies](https://github.com/trard/exemplary_telegram_bot/blob/master/README.md#dependencies)
2. [Run](https://github.com/trard/exemplary_telegram_bot/blob/master/README.md#run)
    - [NPM](https://github.com/trard/exemplary_telegram_bot/blob/master/README.md#npm-1)
    - [Docker](https://github.com/trard/exemplary_telegram_bot/blob/master/README.md#docker-1)

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