#!/bin/sh

# Start the app with PM2 in development mode
pm2 start npm --name "app" -- run start:dev

# Keep the container running and tail logs
pm2 logs --lines 1000 --timestamp --nostream  # Display recent logs
pm2 logs --timestamp --raw                    # Stream new logs in foreground