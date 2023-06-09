var point_table=[
    {team:"GT",matches:14,won:10,loss:4,nrr:0.809,pts:20,lastFive:["w","w","l","w","w"]},
    {team:"CSK",matches:14,won:8,loss:5,nrr:0.652,pts:17,lastFive:["w","w","l","w","l"]},
    {team:"SRH",matches:14,won:4,loss:10,nrr:-0.590,pts:8,lastFive:["l","l","l","l","w"]},
    {team:"DC",matches:14,won:5,loss:9,nrr:-0.80,pts:10,lastFive:["l","w","l","l","w"]},
    {team:"MI",matches:14,won:8,loss:6,nrr:-0.44,pts:16,lastFive:["w","l","w","w","l"]},
    {team:"RCB",matches:14,won:7,loss:7,nrr:+1.39,pts:14,lastFive:["l","w","w","l","l"]},
]

//Q1---Print all team names---

var team_name=point_table.map(t=>t.team)
// console.log(team_name);

//Q2---Sort teams wrt pts---

point_table.sort((t1,t2)=>t2.pts-t1.pts)
// console.log(point_table);

//Q3---Print teams with +ve nrr---

postive_nrr=point_table.filter(t=>t.nrr>0).map(t=>t.team)
// console.log(postive_nrr);

//Q4---Qualifiers---

var qualifiers=point_table.sort((t1,t2)=>t2.pts-t1.pts).slice(0,4).map(t=>t.team)
// console.log(qualifiers);

//Q5---Team names with atleast 5 won---

var won_five=point_table.filter(t=>t.won>=5).map(t=>t.team)
// console.log(won_five);

//Q6---Team with maximum points---

var max_point=point_table.reduce((t1,t2)=>t1.pts>t2.pts?t1:t2).team
// console.log(max_point);

//Q7---

var last_won=point_table.filter(t=>t.lastFive.slice(0,1)=="w").map(t=>t.team)
// console.log(last_won);

//Q8---Is 'kt' playing ipl2023---

var is_playing=point_table.some(t=>t.team=="kt")
// console.log(is_playing);






