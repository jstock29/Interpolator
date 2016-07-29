$(function () {
    $('#container').highcharts({
        title: {
            text: '',
        },
        xAxis: {
          title: {
              text: ''
          },
        },
        yAxis: {
            title: {
                text: ''
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: ''
        },
        series: [{
            name: 'Interpolation Points',
        }]
    });
});

function GetPoints(x1,y1,x2,y2,x,y){
  var chart = $('#container').highcharts();
  if (chart.series.length){
    chart.series[0].remove();
  }
  chart.addSeries({
      name: 'Interpolation Points',
  });
  var point1=[]
  var point2=[]
  var target=[]

  point1.push(parseFloat(x1))
  point1.push(parseFloat(y1))
  point2.push(parseFloat(x2))
  point2.push(parseFloat(y2))
  target.push(parseFloat(x))
  target.push(parseFloat(y))

  chart.series[0].addPoint(point1)
  chart.series[0].addPoint(target)
  chart.series[0].addPoint(point2)

  chart.redraw()
}

function Reset(){
  var chart = $('#container').highcharts();
  document.getElementById("x1").value= ""
  document.getElementById("y1").value= ""
  document.getElementById("x2").value= ""
  document.getElementById("y2").value= ""
  document.getElementById("x").value= ""
  document.getElementById("y").value= ""
  document.getElementById("result").innerHTML= ""
  if (chart.series.length){
    chart.series[0].remove();
  }
}

function Interpolate() {
  var x1=document.getElementById("x1").value
  var x2=document.getElementById("x2").value
  var y1=document.getElementById("y1").value
  var y2=document.getElementById("y2").value
  var x=document.getElementById("x").value
  var y=document.getElementById("y").value
  if (x=="" && y==""){
    //  Message here
  } else if (x!="" && y!=""){
    //  Message here
  } else if (y == ""){
    y = parseFloat(y1) + parseFloat((x-x1)*((y2-y1)/(x2-x1)));
    y= y.toFixed(3)
    document.getElementById("result").innerHTML= y
    document.getElementById("y").value= y
  } else if (x == ""){
    x=parseFloat(x1)+parseFloat((y-y1)*((x2-x1)/(y2-y1)));
    x=x.toFixed(3)
    document.getElementById("x").value= x
    document.getElementById("result").innerHTML= x
  }
  GetPoints(x1,y1,x2,y2,x,y)
}

function QuadraticInterpolate() {
  var x1=document.getElementById("x1").value
  var x2=document.getElementById("x2").value
  var y1=document.getElementById("y1").value
  var y2=document.getElementById("y2").value
  var x=document.getElementById("x").value
  var y=document.getElementById("y").value
  if (x=="" && y==""){
    //  Message here
  } else if (x!="" && y!=""){
    //  Message here
  } else if (y == ""){
    y = parseFloat(y1) + parseFloat((x-x1)*((y2-y1)/(x2-x1)));
    y= y.toFixed(3)
    document.getElementById("result").innerHTML= y
    document.getElementById("y").value= y
  } else if (x == ""){
    x=parseFloat(x1)+parseFloat((y-y1)*((x2-x1)/(y2-y1)));
    x=x.toFixed(3)
    document.getElementById("x").value= x
    document.getElementById("result").innerHTML= x  }
  GetPoints(x1,y1,x2,y2,x,y)
}
