function createCalendar(ID, year, month) {
  let html = '<tr><th>ПН</th><th>ВТ</th><th>СР</th><th>ЧТ</th><th>ПТ</th><th>СБ</th><th>ВС</th></tr>'
  let temp = '';
  let date = new Date(year, month - 1);
  let firstDay = date.getDay();

  for(let i = 1; i < firstDay; i++) {
    temp += `<td></td>`
  }

  while(date.getMonth() + 1 === month) {
    for (let i = date.getDay(); i < 8 && date.getMonth() + 1 === month; i++) {
      temp += `<td>${date.getDate()}</td>`;
      date.setDate(date.getDate() + 1)
    }

    while(date.getDay() != 1) {
      temp += `<td></td>`
      date.setDate(date.getDate() + 1)
    }

    temp = `<tr>${temp}</tr>`
    html += temp
    temp = ''
  }

  html = `<table>${html}</table>`
  document.getElementById(ID).innerHTML = html
}

createCalendar('calendar', 1994, 12)
