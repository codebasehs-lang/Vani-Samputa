# YouTube API Key Setup Guide

This guide explains how to create and configure a YouTube Data API key for the Live page auto-detection feature.

## 1) Create API Key in Google Cloud

1. Open Google Cloud Console:
   https://console.cloud.google.com/
2. Create a new project (or select an existing one).
3. Go to APIs & Services -> Library.
4. Search for YouTube Data API v3 and click Enable.
5. Go to APIs & Services -> Credentials.
6. Click Create Credentials -> API key.
7. Copy the generated API key.

## 2) Restrict the API Key (Recommended)

1. In APIs & Services -> Credentials, open your API key.
2. Set API restrictions to:
   - Restrict key
   - YouTube Data API v3
3. Set Application restrictions as needed:
   - Server-side/Vercel: typically no referrer restriction (or use IP restriction if your infra has fixed egress IPs)
   - Do not expose this key in frontend code

## 3) Configure in Vercel (Production)

1. Open your Vercel project dashboard.
2. Go to Settings -> Environment Variables.
3. Add:
   - Name: YOUTUBE_API_KEY
   - Value: your generated API key
4. Save and redeploy your project.

## 4) Configure for Local Development

Create a .env.local file in the project root with:

YOUTUBE_API_KEY=YOUR_API_KEY_HERE

Then restart your local dev process.

## 5) Live Config Requirements

In src/config/liveConfig.json, set at least one of:
- channelHandle (example: @HaladharaSwami)
- channelId (starts with UC...)

Make sure autoFetchLive is true.

## 6) Test the API Endpoint

After setting the key and running/deploying:

- By handle:
  /api/youtube-live?channelHandle=HaladharaSwami

- By channel id:
  /api/youtube-live?channelId=UCxxxxxxxxxxxxxxxxxxxxxx

Expected response fields:
- isLive
- videoId
- url
- embedUrl
- channelId

## 7) Common Errors

- Missing YOUTUBE_API_KEY on server
  - Add env var and redeploy/restart.

- YouTube API request failed
  - Confirm YouTube Data API v3 is enabled.
  - Check API key restrictions.

- Could not resolve YouTube channel
  - Verify handle spelling.
  - Try channelId directly.

## Security Notes

- Keep API key only on server side (api/*).
- Never commit secrets to git.
- Rotate key if accidentally exposed.
