class Greeting {
  greet():void {
    let hours:number = new Date().getHours();
    if (hours >= 5 && hours < 12)
      console.log("Good Morning, World!")
    else if (hours >= 12 && hours < 18)
      console.log("Good Afternoon, World!")
    else if (hours >= 18 || hours < 5)
      console.log("Good Evening, World!")
  }
}

var message:Greeting = new Greeting();
message.greet();
