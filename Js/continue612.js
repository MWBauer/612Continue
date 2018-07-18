var value = randomNumber(100);

function randomNumber(maxNumber) { 
  return Math.floor(Math.random() * Math.floor(maxNumber)); 
}

document.writeln("Random number is " + value<br/>);

for (var count = 1; count <= 100; ++count) {
  if (count == value)
    continue;
  document.writeln("Count is: " + count + "<br/>");
}

document.writeln("Use continue to skip printing count " + value);