$body = $('body');

$body.addClass('loading');

function getDataUsers(url, callback) {
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        callback(xhr.response);
      }
    }
  };
  xhr.open('get', url);
  xhr.send();
}

setTimeout(function () {
  getDataUsers('https://jsonplaceholder.typicode.com/users', (result) => {
    const data = JSON.parse(result);

    //variabel untuk menampung tabel yang akan digenerasikan
    buatTabel = '';
    data.forEach((e) => {
      buatTabel += `<tr>
        <td>${e.id}</td>
        <td>${e.name}</td>
        <td>${e.username}</td>
        <td>${e.email}</td>
        <td>${e.address.street}, ${e.address.suite}, ${e.address.city}</td>
        <td>${e.company.name}</td>
        <tr/>`;
    });

    $body.removeClass('loading');

    //mencetak tabel
    document.getElementsByTagName('table')[0].innerHTML += buatTabel;
  });
}, 1000);
