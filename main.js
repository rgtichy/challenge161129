function wrapper(){
  var clickX = 0;
  return function Count(){
    this.report=function(){
      return clickX;
    }
    clickX++;
    console.log("clickX = "+clickX)
    return clickX;
  }
}
function setup(){
  target.innerHTML = `<h5>Start Here.</h5><button onclick='timer()'>Click to Start</button>`;
  // Reset the counter by setting counter back to a new "instance?" of the return value of wrapper().  counter is a global var.
  counter = wrapper();
}
function timer(){
  function report(){
    // since counter is "global" I can increment it here and then subtract 1
    var z = counter()-1;
    console.log(counter)
    console.log(counter.report);
    // console.log(counter.report());
    list +=`<h5>Done! In ${n} seconds, you clicked ${z} times.</h5>`
    target.innerHTML = list + "<br><br><button onclick='setup()'>Click to Re-Start</button>";
  }
  // create the random timer length "n" in seconds
  var n = Math.floor(Math.random()*5+1);
  target.innerHTML = `<h5>Try to click as many times as you can inside ${n} seconds.</h5><button onclick='var localized_garbage = counter()'>Mash It!!</button>`;
  // why (invoke?) "report" instead of "report()"?????
  setTimeout(report,n*1000);
}
// setup global variables
var counter = 0;
var target = document.getElementById('target');
var list =[];
