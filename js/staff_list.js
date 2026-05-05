
document.addEventListener('DOMContentLoaded',function(){
  const staff_list = [
    {
     id: '1', 
     department: '主管部門', 
     job: '執行長', 
     name: '林庭郁', 
     email: 'wendy@gmail.com', 
     phone: '0987654321', 
     birthday: '1997/04/13',
    },
    {
     id: '2', 
     department: '前端部門', 
     job: '前端工程師', 
     name: '鄭丞恩', 
     email: 'dandy@gmail.com', 
     phone: '0987654321', 
     birthday: '2001/11/03',
    },
    {
     id: '3', 
     department: '後端部門', 
     job: '後端工程師', 
     name: '洪誠佑', 
     email: 'wendy@gmail.com', 
     phone: '0987654321', 
     birthday: '1997/04/13',
    },
    {
     id: '4', 
     department: '前端部門', 
     job: '技術主管', 
     name: '林榆凱', 
     email: 'wendy@gmail.com', 
     phone: '0987654321', 
     birthday: '1997/04/13',
    },
    {
     id: '5', 
     department: '後端部門', 
     job: '後端工程師', 
     name: '黃品瑜', 
     email: 'wendy@gmail.com', 
     phone: '0987654321', 
     birthday: '1997/04/13',
    },
  ];

  // 要放進tbody裡面
  const staff_table = document.querySelector('.staff_table tbody');

  staff_list.forEach(function(item){
    const content = `
        <tr class="list_item">
          <td><a href="../html/edit_staff.html">${item.id}</a></td>
          <td><a href="../html/edit_staff.html">${item.department}</a></td>
          <td><a href="../html/edit_staff.html">${item.job}</a></td>
          <td><a href="../html/edit_staff.html">${item.name}</a></td>
          <td><a href="../html/edit_staff.html">${item.email}</a></td>
          <td><a href="../html/edit_staff.html">${item.phone}</a></td>
          <td><a href="../html/edit_staff.html">${item.birthday}</a></td>
          <td>
            <div class="tool">
              <i class="fa-solid fa-pen"></i>
              <i class="fa-regular fa-trash-can"></i>
            </div>
          </td>
        </tr>
      `
    staff_table.insertAdjacentHTML('beforeend',content);
  })
})    

// 計算資料數量
document.addEventListener('DOMContentLoaded',function(){
  const total_list = document.querySelector('.total_list');
  const list_item = document.querySelectorAll('tbody .list_item');
  const total = list_item.length;

  total_list.innerText = total;
})