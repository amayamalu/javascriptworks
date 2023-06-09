///------OBJECT METHOD-----

// const stud={Name:"Amaya",
//             Class:12,
//             Div:"A",
//             Mark:78,
//             displayMark:function(){return this.Name+" mark in maths"+this.Mark}}
// disp=stud.displayMark()
// console.log(disp);


// const car={Name:"BMW",
//            color:"white",
//            type:"4 wheeler",
//            prize:"40 lacks",
//            EngineStart:function(){
//                 return this.Name+" engine started...."
//            },
//            Braking:function(){
//                 return this.Name+" braking..."
//            }
//         }
//     console.log(car);
//     console.log(car.EngineStart());
//     console.log(car.Braking());

///----SELF INTRO---//

// const person={Name:"Amaya",
//               place:"Vadakara",
//               currently:"python fullstack developer",
//               skills:{skill1:"python",skill2:"html",skill3:"css"},
//               shotGoal:"to be placed in a reputed company",
//               Intro:function(){self=" I am "+ this.Name +" from "+this.place + "cuurently doing"+this.currently + "my skills are "+this.skills +"and my short time goal is "+this.shotGoal
//                                  return self}}
// console.log(person.Intro());
// console.log(person.skills.skill1);
// console.log(person.skills);


//Create an object student , having property marks and it should contain marks of 5 subjects...//
const student={Name:"Aamaya",
               class:12,
               div:"A",
               Marks:{english:45,maths:67,physics:56,chemistry:56},
               Stud:function(){self="  i am "+this.Name
                      return self}}
console.log(student.Stud());
console.log(student.Marks.chemistry);