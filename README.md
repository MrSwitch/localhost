# localhost

Static file server which returns files regardless of the header method - unlike popular others.


## Embed within a NodeJS script
```bash
npm install localhost --save-dev
```
```javascript
require('localhost')('./').listen(port);
```

## Run as an executable
`localhost [directory] [-p portNumber|8080]`

```bash
npm install -g localhost
cd ./www/
localhost
```
