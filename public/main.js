// run `node index.js` in the terminal

console.info('Buku Tamu');

// function isi buku tamu
const isi_buku_tamu = () => {
  let tbody = document.getElementById('tbody');
  // input data kamu
  let nama_lengkap = prompt('Masukan Nama Lengkap : ');
  let alamat = prompt('Masukan Alamat : ');
  let keterangan = prompt('Masukan Keterangan : ');

  // console.log(nama_lengkap, alamat, keterangan);

  // dapatkan total dari child tbody
  let totalData = tbody.childElementCount;

  // string to html
  tbody.innerHTML += `
  
  <tr>
    <td>${totalData + 1}</td>
    <td>${nama_lengkap}</td>
    <td>${alamat}</td>
    <td style="text-align: center">${keterangan}</td>
  </tr> 
  `;
};
