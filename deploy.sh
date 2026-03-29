#!/bin/bash

# Deploy Script - MyClinic App (Frontend only)
# Executado pelo GitHub Actions via SSH

set -e

echo "[$(date)] Deploy started"
echo "Ref: $REF"
echo "Commit: $COMMIT"

# Pull latest image from GHCR
echo "Pulling latest frontend image..."
cd /data/.openclaw/workspace/myclinic-app
docker-compose -f docker-compose.ghcr.yml pull frontend

# Restart service with new image
echo "Restarting frontend service..."
docker-compose -f docker-compose.ghcr.yml up -d frontend --force-recreate

# Cleanup old images
echo "Cleaning up old images..."
docker image prune -af --filter "until=48h" 2>/dev/null || docker image prune -f

echo "[$(date)] Deploy completed successfully!"
echo "Frontend: http://187.77.255.251:8081"
