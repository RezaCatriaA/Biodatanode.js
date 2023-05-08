const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html',
  });
  res.write('nama: reza <br/> Tempat Lahir: Bogor <br/> tanggal lahir: 8 agustus 1998 <br/> alamat : jl.neptunus no.30');
  res.end();
});

server.listen(3000, () => {
  console.log('berhasil');
});
