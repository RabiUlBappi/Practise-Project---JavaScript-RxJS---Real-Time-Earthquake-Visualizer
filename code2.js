function makeRow(props) {
var row = document.createElement('tr');
row.id = props.net + props.code;
var date = new Date(props.time);
var time = date.toString();
[props.place, props.mag, time].forEach(function(text) {
var cell = document.createElement('td');
cell.textContent = text;
row.appendChild(cell);
});
return row;
}

var table = document.getElementById('quakes_info');
quakes
.pluck('properties')
.map(makeRow)
.subscribe(function(row) { table.appendChild(row); });