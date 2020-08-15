# Koa onion middleware

This is ilustrate the flow of `Koa Middleware`

```bash
-> 1: run 1st middleware
	-> 2: run 2nd middleware
		3: respond to request for http://localhost:3000/
	<- 4: back to 2nd middleware
<- 5: back to 1st middleware

-> 1: run 1st middleware
	-> 2: run 2nd middleware
		3: respond to request for http://localhost:3000/favicon.ico
	<- 4: back to 2nd middleware
<- 5: back to 1st middleware
```
