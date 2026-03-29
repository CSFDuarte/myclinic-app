#!/bin/bash

# Deploy Webhook Script
# Recebe requests do GitHub Actions e faz deploy das imagens

cd /data/.openclaw/workspace/myclinic-app

echo "[$(date)] Deploy triggered via webhook"

# Pull latest images from GHCR
echo "Pulling images..."
docker compose -f docker-compose.ghcr.yml pull

# Restart services with new images
echo "Restarting services..."
docker compose -f docker-compose.ghcr.yml up -d --force-recreate

# Cleanup old images
echo "Cleaning up old images..."
docker image prune -af --filter "until=24h"

echo "[$(date)] Deploy completed!"
