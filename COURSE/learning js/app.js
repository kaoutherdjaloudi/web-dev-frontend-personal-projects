/* var myArray= new Array();
console.log(myArray);
myArray[0]=20;
myArray[1]="hello";
myArray[2]=false;
 var myCar = new Object();
myCar.Maxspeed= 30;
myCar.driver="abeer";
myCar.situation= function(){console.log("driving now");};
console.log(myCar.situation());
var myCar2= {
    driver: "abeer",
    Maxspeed: 70,
    situation: function(speed,time){
        console.log(speed*time);
    },
};
console.log(myCar2);
console.log(myCar2.situation(200,2)); 
console.log(myArray); 
console.log(this);*/
/* var myCar= {
    name: 'abeer',
    speedMax:200,
    logdrive: function(){
        console.log("driver name is "+ this.name);
    }
}
console.log(myCar.logdrive()); */
/* var Car= function(Maxspeed,driver){
    this.Maxspeed= Maxspeed;
    this.driver=driver;
    this.logdrive= function(){
        console.log("driver name is: "+ this.driver);
    };
    this.distance= function(speed,time){
        console.log(speed*time);
    };
} ;
var myCar = new Car(390,'abeer');
var myCar1 = new Car(250,'razan');
var myCar2 = new Car(901,'body');
console.log(myCar);
console.log(myCar1.logdrive());
console.log(myCar2.distance(120,2)); */
/* var myDate= new Date();
console.log(myDate);
var myPastDate= new Date(2001, 9, 18, 10, 30, 10);
var myFuturDate= new Date(2020, 11, 31, 06, 20, 00);
console.log(myPastDate,myFuturDate);
var birthday = new Date(2002, 0, 18, 10, 20, 20);
var birthDay = new Date(2002, 0, 18, 10, 20, 20);
console.log(birthday);
console.log(birthday.getMonth());
console.log(birthday.getFullYear());
console.log(birthday.getUTCDate());
console.log(birthday.getUTCHours());
console.log(birthday.getUTCSeconds());
console.log(birthday.getDay());
console.log(birthday.getTime());
if (birthDay.getTime()===birthday.getTime()){
    console.log("same date !");
}else{console.log("opss ! they are diffrent !");}; */

