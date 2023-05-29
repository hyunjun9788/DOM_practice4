let dropbtn1 = document.querySelector('.dropbtn1');
let dropdownContent1 = document.querySelector('.dropdown-content1');

dropbtn1.addEventListener('click', function() {
    dropdownContent1.style.display = dropdownContent1.style.display === 'block' ? 'none' : 'block';
    dropdownContent2.style.display='none'
});

let dropbtn2 = document.querySelector('.dropbtn2');
 dropdownContent2 = document.querySelector('.dropdown-content2');

dropbtn2.addEventListener('click', function() {
    dropdownContent2.style.display = dropdownContent2.style.display === 'block' ? 'none' : 'block';
    dropdownContent1.style.display='none'
});