const https = require('https');

function ajax(src, callback) {
    https.get(src, (res) => {
        let data = '';
        
        res.on('data', (chunk) => {
            data += chunk;
        });
        
        res.on('end', () => {
            const response = JSON.parse(data);
            callback(response);
        });
    }).on('error', (err) => {
        console.log('Error: ' + err.message);
    });
}

function render(data) {
    data.forEach(function(product) {
        console.log(product.name);
        console.log('Price: ' + product.price);
    });
}

ajax(
    'https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products',
    function(response) {
        render(response);
    }
);
