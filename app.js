const Koa = require('koa')
const app = new Koa();

app.use(async (ctx, next) => {
    console.log('-> 1: run 1st middleware') // 1.
    await next()
    console.log(`<- 5: back to 1st middleware\n`)
})
app.use(async (ctx, next) => {
    console.log('\t-> 2: run 2nd middleware') // 2
    await next()
    console.log(`\t<- 4: back to 2nd middleware`)

})

app.use(async ctx => {
    console.log(`\t\t3: respond to request for ${ctx.URL.href}`) // 3
    ctx.body = 'Hello World';
});

app.listen(3000, () => console.log(`Listening: http://localhost:3000`));