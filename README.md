# Weather API & Frontend Setup

This repository contains the **Weather API** and the **Frontend** to display weather information. Below are the instructions to run both services and integrate with Redis.

## Prerequisites

- Docker
- Node.js (with `yarn` installed)
- Make sure to leave the ports 3000 (api), 6379 (redis) and 5173 (front) available. We will need it.

### 1. Running the API and Redis

Follow the steps below to run the **API** and **Redis** locally.

First, in the root folder (fugu), run the commands.

```bash
cd weather-api/
```

```bash
docker-compose up -d
```

```bash
yarn
```

```bash
yarn start:dev
```

This way, you will have both your API and Redis running locally.

### 2. Running the frontend

Follow the steps below to run your **react app** locally.

First, go back to the root folder. In the root folder (fugu), run the commands.

```bash
cd weather-front/
```

```bash
yarn
```

```bash
yarn dev
```

This way, you will have both your frontend and backend running locally. Enjoy it.
