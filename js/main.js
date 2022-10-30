let i;

let sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

i = 0;

let interval = setInterval(() => {

  sleep(1000).then(() => {
    document.getElementById("Titre").style.color = "red";
  });
  sleep(1500).then(() => {
    document.getElementById("Titre").style.color = "darkred";
  });
  sleep(2000).then(() => {
    document.getElementById("Titre").style.color = "red";
  });


  if (i == 3){
    clearInterval(interval);
  };
}, 4500);
