//Varje API ändpunkt har var sin get funktion
app.get('/produktlista/:sida', (req, nyRes) => {
    const requestUrl = url.parse(url.format({
        protocol: 'http',
        hostname: 'webbred2.utb.hb.se',
        pathname: '/~dgu/rest_api/product/read_paging.php',
        query: {
            page: req.params.sida,
        },
    }));
    request(requestUrl, {
        json: true
    }, (err, res, body) => {
        if (err) {
            return console.log(err);
        }
        nyRes.send(body);
        console.log(body);
    });

});




app.get('/produkt', (req, res) => {
    request('http://webbred2.utb.hb.se/~dgu/rest_api/product/read.php', {
        json: true
    }, (err, res, body) => {
        if (err) {
            return console.log(err);
        }
        for (let i = 0; i < body.records.length; i++) {
            console.log(body.records[i].name + '. ' + 'Description: ' + body.records[i].description);

        }
        //Skriver ut alla variabler ur varje objekt i JSON

    });
});
app.get('/kategorier', (req, res) => {
    request('http://webbred2.utb.hb.se/~dgu/rest_api/category/read.php ', {
        json: true
    }, (err, res, body) => {
        if (err) {
            return console.log(err);
        }
        for (let i = 0; i < body.records.length; i++) {
            console.log(body.records[i].name + ' ' + body.records[i].description);

        }
    });
});
app.listen(8080);