function arrayMap() {
      let infor=[
            {
                  id:1,
                  name:'Đức Mạnh',
                  age:20,
                  wage:'$3000'
            },
            {
                  id:2,
                  name:'Đức Mạnh',
                  age:21,
                  wage:'$4000'

            }, 
            {
                  id:3,
                  name:'Đức Mạnh',
                  age:22,
                  wage:'$5000'

            }
      ]
function courseHandler(infor,index) {
      // console.log(infor);
      return{
            id:infor.id,
            name:`${infor.name} pro`,
            age :infor.age +1,
            wage:infor.wage,
            index:index
      }
}
let newInfor=infor.map(courseHandler);
console.log(newInfor);
      
      
}
// arrayMap()
function reduce() {
      let infor=[
            {
                  id:1,
                  name:'Đức Mạnh',
                  age:20,
                  wage:30000000
            },
            {
                  id:2,
                  name:'Đức Mạnh',
                  age:21,
                  wage:40000000

            },
            {
                  id:3,
                  name:'Đức Mạnh',
                  age:22,
                  wage:50000000

            }
      ]
      let  totalWage=0
      for (let infors of infor) {
            totalWage+=infors.wage
      }
      console.log(totalWage);
      
}
function callback() {
//Callback là một hàm sẽ được thực hiện sau khi một hàm khác đã thực hiện xong 
// là  hàm 
// truyền đối số 
// được gọi lại(trong hàn nhận đối số)
      // function myFunction(params) {
      //       if (typeof params=== 'function') {
      //             params('ádnj')
      //       }
      //       params()
            
      // }
      // function myCallback() {
      // }
      // myFunction(myCallback)
      //
      let courses=[
            'js',
            'php',
            'python',
            
      ]
      let html=courses.map(function (course) {
            return
            `<h1>${course}/h1>`
      });
      console.log(html.join(''));
}

function filter() {
      //lọc mạng qua điều kiện tao ra 1 new arry thoa man dk khong loc qua Arry rong
      let course  =[
            {
                  name:'php',
                  coin:800
            },
            {
                  name:'javascrpt',
                  coin:680
            },
            {
                  name:'java',
                  coin:980
            },
            {
                  name:'python',
                  coin:580
            },
            {
                  name:'c++',
                  coin:1280
            }
      ]
      let filterCourse= course.filter(function (course,index,array) {
            return course.coin >900;
            
      })
      console.log(filterCourse);
}

function some() {
      // some : tìm tối thiều kq theeo đk và trả về true false

      let course  =[
            {
                  name:'php',
                  coin:800,
                  isFinish:'true'
            },
            {
                  name:'javascrpt',
                  coin:680,
                  isFinish:'true'
            },
            {
                  name:'java',
                  coin:980,
                  isFinish:'false'
            },
            {
                  name:'python',
                  coin:580,
                  infinish:'true'
            },
            {
                  name:'c++',
                  coin:1280,
                  isFinish:'false'


            }
      ];

      let result= course.some(function (course,index,array) {
            return course.isFinish ==='true'
            
      })
      console.log(result);
}
function every() {
      // every : kiểm tra tất cả đk khi đúng tất cả dk trả về true k trả về false
}
function tachPhanTuGiongNhau() {
      let array=['a','b','c','a','a','b']
      console.log([...(new Set(array))]); // giai set thanh array
}

function Dom() {
      // 1 Document
      // 2 attribute
      // 3 Text
      // node 
      document.write('hello')
}
Dom()