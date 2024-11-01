const max2 = (num1, num2) => {
    if (num1 >= num2) {
      return num1;
    } else {
      return num2;
    }
  };
  
  document.body.innerHTML += `<p>${max2(11, 287)}</p>`;
  document.body.innerHTML += `<p>${max2(20, 20)}</p>`;
  document.body.innerHTML += `<p>${max2(-5, 1)}</p>`;