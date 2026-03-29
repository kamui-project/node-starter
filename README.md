# Node Starter

An Express sample application for [Kamui Platform](https://kamui-platform.com)

Please refer to the [documentation for Node app](https://docs.kamui-platform.com/gui/apps/node.html).

## Local Development

```bash
npm install
npm run migrate
npm run start
```

Open http://localhost:8000 in your browser.

## Deploy to Kamui Platform

### Dashboard Settings

| Setting | Value |
|---------|-------|
| Setup Command | `npm install` |
| Pre-deploy Command | `npm run migrate` |
| Start Command | `npm run start` |
| Health Check Path | `/health` |

### Environment Variables

`PORT` is automatically set when you deploy app. <br>
`DATABASE_URL` is automatically set when you link a database to your app.

## Links

- [Kamui Platform](https://kamui-platform.com/)
- [Documentation](https://docs.kamui-platform.com/)
