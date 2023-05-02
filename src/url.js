import { URL } from "url";

const url = new URL("https://www.coba.com/belajar?kelas=nodejs");

console.log(url);
/* output :
URL {
  href: 'https://www.coba.com/belajar?kelas=nodejs',
  origin: 'https://www.coba.com',
  protocol: 'https:',
  username: '',
  password: '',
  host: 'www.coba.com',
  hostname: 'www.coba.com',
  port: '',
  pathname: '/belajar',
  search: '?kelas=nodejs',
  searchParams: URLSearchParams { 'kelas' => 'nodejs' },
  hash: ''
}
*/
