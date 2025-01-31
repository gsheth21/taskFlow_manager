#!/bin/sh

pm2 start npm --name "frontend" -- run start -- --host 0.0.0.0 --port 4200 --poll 1000

pm2 logs --lines 1000 --timestamp --nostream
pm2 logs --timestamp --raw