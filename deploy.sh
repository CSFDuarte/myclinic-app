#!/bin/sh
echo "[$(date)] Deploy started"
cd /docker/apps/myclinic-app || exit 1

echo "Ref: $(git rev-parse --short HEAD 2>/dev/null || echo 'unknown')"
echo "Commit: $(git log -1 --oneline 2>/dev/null || echo 'unknown')"

echo "Pulling latest frontend image..."
docker compose -f docker-compose.ghcr.yml pull frontend || exit 1

echo "Restarting frontend container..."
docker compose -f docker-compose.ghcr.yml up -d --force-recreate frontend || exit 1

echo "Cleaning up old images..."
docker image prune -f

echo "[$(date)] Deploy completed"
