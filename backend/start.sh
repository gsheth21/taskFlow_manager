#!/bin/sh

pm2 start npm --name "app" -- run start:dev

pm2 logs --lines 1000 --timestamp --nostream
pm2 logs --timestamp --raw