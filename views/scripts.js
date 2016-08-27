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

// function Populate(){
//   if (document.getElementsByName("type").value== "lin"){
//     document.getElementById("quad_label").remove();
//     document.getElementById("quadx").remove();
//     document.getElementById("quady").remove();
//   } else if (document.getElementById("type"=="quad").value){
//
//     var x = document.createElement("input");
//     x.type = "text";
//     x.setAttribute("id", "quadx");
//     var lx = document.createTextNode("X Value");
//     x.appendChild(lx);
//     document.getElementById("quadrow").appendChild(x);
//
//     var y = document.createElement("input");
//     y.type = "text";
//     y.setAttribute("id", "quady");
//
//     var ly = document.createTextNode("X Value");
//     y.appendChild(ly);
//     document.getElementById("quadrow").appendChild(y);
//
//     var p = document.createElement("P");
//     p.setAttribute("id", "quad_label");
//     var l = document.createTextNode("Point 3");
//     p.appendChild(x);
//     p.appendChild(y);
//     document.getElementById("quadrow").appendChild(p);
//   }
// }

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

function Interpolate(){
  // if (document.getElementById("lin").value)
  LinearInterpolate()
  // } else if (document.getElementById("quad").value){
  //   QuadraticInterpolate()
  // }
}
function LinearInterpolate() {
  var x1=document.getElementById("x1").value
  var x2=document.getElementById("x2").value
  var y1=document.getElementById("y1").value
  var y2=document.getElementById("y2").value
  var x=document.getElementById("x").value
  var y=document.getElementById("y").value
  if (x1=="" || y1=="" || x2=="" || y2==""){
    alert("Enter a values for both known points.");
    return
  } else if (x=="" && y==""){
    alert("Enter a value for the target x or y point.");
    return
  } else if (x1==x2){
    alert("Can not interpolate between identical X-values. The result is infinity.");
    return
  } else if (x!="" && y!=""){
    alert("Only enter a value for the X or Y target value, not both.");
    return
  } else if (y == ""){
    y = parseFloat(y1) + parseFloat((x-x1)*((y2-y1)/(x2-x1)));
    y= y.toFixed(3)
    document.getElementById("result").innerHTML= y
    // document.getElementById("y").value= y
  } else if (x == ""){
    x=parseFloat(x1)+parseFloat((y-y1)*((x2-x1)/(y2-y1)));
    x=x.toFixed(3)
    // document.getElementById("x").value= x
    document.getElementById("result").innerHTML= x
  }
  GetPoints(x1,y1,x2,y2,x,y)
}

// function QuadraticInterpolate() {
//   var x1=document.getElementById("x1").value
//   var x2=document.getElementById("x2").value
//   var y1=document.getElementById("y1").value
//   var y2=document.getElementById("y2").value
//   var x3=document.getElementById("x3").value
//   var y3=document.getElementById("y3").value
//   var x=document.getElementById("x").value
//   var y=document.getElementById("y").value
//   if (x1=="" || y1=="" || x2=="" || y2=="" || y3="" ||x3=""){
//     alert("Enter a values for both known points.");
//     return
//   } else if (x=="" && y==""){
//     alert("Enter a value for the target x or y point.");
//     return
//   } else if (x!="" && y!=""){
//     alert("Only enter a value for the X or Y target value, not both.");
//     return
//   } else if (y == ""){
//     y=parseFloat(y1*(((x-x2)*(x-x3))/((x1-x2)*(x1-x3))))+parseFloat(y2*(((x-x1)*(x-x3))/((x2-x1)*(x2-x3))))+parseFloat(y3*(((x-x1)*(x-x3))/((x3-x1)*(x3-x2))));
//     y= y.toFixed(3)
//     document.getElementById("result").innerHTML= y
//     // document.getElementById("y").value= y
//   } else if (x == ""){
//     x=parseFloat(x1*(((y-y2)*(y-y3))/((y1-y2)*(y1-y3))))+parseFloat(x2*(((y-y1)*(y-y3))/((y2-y1)*(y2-y3))))+parseFloat(x3*(((y-y1)*(y-y3))/((y3-y1)*(y3-y2))));
//     x=x.toFixed(3)
//     // document.getElementById("x").value= x
//     document.getElementById("result").innerHTML= x  }
//   GetPoints(x1,y1,x2,y2,x,y)
// }
