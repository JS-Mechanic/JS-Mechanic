var ctx;
var dimension = [
  document.documentElement.clientWidth,
  document.documentElement.clientHeight,
];
var functions = new Array();
functions.push("JS");
functions.push("JavaScript");
functions.push("HTML");
functions.push("CSS");

functions.push("HTML5");
functions.push("CSS3");
functions.push("Web Development");
functions.push("Git");

functions.push("GitHub");
functions.push("GitLab");
functions.push("React");
functions.push("ReactJS");

functions.push("Angular");
functions.push("AngularJS");
functions.push("Vue");
functions.push("VueJS");

functions.push("TypeScript");
functions.push("StackOverFlow");
functions.push("Docker");
functions.push("Front");

functions.push("FrontEnd");
functions.push("FrontEnd Engineer");
functions.push("CodePen");
functions.push("LeetCode");

functions.push("Dribbble");
functions.push("Figma");
functions.push("UI");
functions.push("Algorithms");

functions.push("Data Structures");
functions.push("OSS");
functions.push("Open Source");
functions.push("Chrome");

functions.push("Linux");
functions.push("MX Linux");
functions.push("VS Code");
functions.push("WebStorm");

functions.push("JetBrains");
functions.push("Problem Solving");
functions.push("Remote Development");
functions.push("netlify");

functions.push("Vercel");
functions.push("Self Motivated");
functions.push("Agile");
functions.push("Scrum");

functions.push("Kanban");
functions.push("Rest");
functions.push("RestAPI");
functions.push("Markdown");

functions.push("README");
functions.push("OutLook");
functions.push("ProtonMail");
functions.push("BackEnd");

functions.push("Node");
functions.push("NodeJS");
functions.push("Docker Swarm");
functions.push("kubernetes");

functions.push("Software Architecture");
functions.push("Google Fonts");
functions.push("full_name_hash");
functions.push("Hereismy.site");

functions.push("JSX");
functions.push("DOM");
functions.push("Virtual DOM");
functions.push("FrontEnd Developer");

var brushes = [
  "#16a085",
  "#27ae60",
  "#2980b9",
  "#8e44ad",
  "#2c3e50",
  "#f1c40f",
  "#e67e22",
  "#c0392b",
];
var position = new Array();
var f = 1;

function RandomNumber(first, last) {
  var choices = last - first;
  return Math.floor(Math.random() * choices + first);
}

function RandomPosition(l) {
  for (i = 0; i <= 3600; i += 6) {
    position[i] = RandomNumber(0, dimension[0]);
    position[i + 1] = RandomNumber(0, dimension[1]);
    position[i + 2] = RandomNumber(0, 15);
    position[i + 3] = RandomNumber(0, 44 + l);
    position[i + 4] = RandomNumber(0, 8);
    position[i + 5] = RandomNumber(0, 100) / 100;
  }
}

function DrawClear(x, y) {
  ctx.clearRect(0, 0, x, y);
}

function DrawKernel() {
  DrawClear(dimension[0], dimension[1]);
  for (i = 0; i <= 900; i += 6) {
    ctx.beginPath();
    var r = i % 8;

    ctx.font = ctx.font.replace(/\d+px/, position[i + 2] + 10 + "px");
    ctx.globalAlpha = position[i + 5];
    ctx.strokeStyle = brushes[position[i + 4]].toString();
    ctx.strokeText(functions[position[i + 3]], position[i], position[i + 1]);
    ctx.closePath();
    ctx.stroke();

    position[i + 5] -= RandomNumber(0, 100) / 1000;
    if (position[i + 5] < 0) {
      position[i] = RandomNumber(0, dimension[0]);
      position[i + 1] = RandomNumber(0, dimension[1]);
      position[i + 2] = RandomNumber(0, 15);
      position[i + 3] = RandomNumber(0, 64);
      position[i + 4] = RandomNumber(0, 8);
      position[i + 5] = RandomNumber(0, 100) / 100;
    }
  }
}

function StartBackground() {
  var canvas = document.getElementById("canvas");

  canvas.width = dimension[0];
  canvas.height = dimension[1];
  if (canvas.getContext) {
    ctx = canvas.getContext("2d");
    RandomPosition(20);
    setInterval(DrawKernel, 100);
  }
}

function MonthOfYear(month) {
  switch (month) {
    case 0:
      return "January";
      break;
    case 1:
      return "February";
      break;
    case 2:
      return "March";
      break;
    case 3:
      return "April";
      break;
    case 4:
      return "May";
      break;
    case 5:
      return "June";
      break;
    case 6:
      return "July";
      break;
    case 7:
      return "August";
      break;
    case 8:
      return "September";
      break;
    case 9:
      return "Octorber";
      break;
    case 10:
      return "November";
      break;
    default:
      return "December";
  }
}

function CopyRightTime() {
  var today = new Date();
  var year = today.getFullYear();
  var month = today.getMonth();
  document.write(MonthOfYear(month) + " " + year.toString());
}

function ReCalculateCanvasSize() {
  dimension[0] = document.documentElement.clientWidth;
  dimension[1] = document.documentElement.clientHeight;
  canvas.width = dimension[0];
  canvas.height = dimension[1];
}

window.addEventListener("resize", ReCalculateCanvasSize);

// document.addEventListener(
//   "DOMContentLoaded",
//   function () {
//     swal(
//       "Hey, It's Milad. Welcome to my website, Press OK to enter."
//     );
//   },
//   false
// );
