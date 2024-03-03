



(function () {
  // Your existing code

  // Function to update the totals
  function updateTotals() {
    // Define an array of classes to sum
    const classesToSum = [
      'col_bal_0',
      'col_bal_1',
      'col_bal_2',
      'col_bal_3'
    ];

    // Iterate over each class
    classesToSum.forEach((className) => {
      // Get all elements with the class 'in inset col_bal_0' and the current class
      const elements = document.querySelectorAll(`.in.inset.${className}`);

      // Initialize total sum
      let sum = 0;

      // Iterate over each element
      elements.forEach((element) => {
        // Get the text content of the element and convert it to a number
        const value = Number(element.textContent.replace(/,/g, ''));

        // Add the value to the sum
        sum += value;
      });

      // Get the element with the class 'calculatingT1 inset col_bal_0' and the current class
      const resultElement = document.querySelector(`.calculatingT1.inset.${className}`);

      // Set the text content of the result element to the sum
      resultElement.textContent = sum.toLocaleString();
    });
  }


  function calc3() {
    const prefixesToSum = ['prib[0]', 'prib[1]', 'prib[2]'];
    let sum = 0
    prefixesToSum.forEach((prefix) => {
      let t2110 = document.getElementById(`${prefix}[2110]`);
      let t2120 = document.getElementById(`${prefix}[2120]`);
      let t2330 = document.getElementById(`${prefix}[2330]`);
      let t2340 = document.getElementById(`${prefix}[2340]`);
      let t2350 = document.getElementById(`${prefix}[2350]`);
      let t2410 = document.getElementById(`${prefix}[2410]`);
      sum =
        parseFloat(t2110.textContent.replace(/\s/g, '')) -
        parseFloat(t2120.textContent.replace(/\s/g, '')) -
        parseFloat(t2330.textContent.replace(/\s/g, '')) +
        parseFloat(t2340.textContent.replace(/\s/g, '')) -
        parseFloat(t2350.textContent.replace(/\s/g, '')) -
        parseFloat(t2410.textContent.replace(/\s/g, ''));

      let resultElement = document.getElementById(`${prefix}[2400]`);

      resultElement.textContent = sum.toLocaleString();
    });
  }


  




  // Ensure the updateTotals function is called after the cells are edited
  const cells = document.querySelectorAll('td:not(.first-col):not(.code):not(.title-group):not(.empty):not(.calculatingT1):not(.calculatingT2)');

  cells.forEach((cell) => {
    cell.addEventListener('dblclick', (event) => {
      const input = document.createElement('input');
      input.value = ''; 
      input.type = 'text';
      input.value = cell.innerText;

      input.addEventListener('blur', () => {
        cell.innerText = input.value;
        updateTotals(); // Call updateTotals after editing the cell
        calc3();
      });

      // input.addEventListener('dblclick', () => {
      //   input.value = ''; // Очищаем поле инпут при двойном клике
      // });

      cell.innerText = '';
      cell.appendChild(input);
      input.focus();
    });
  });


  // Initial call to updateTotals
  updateTotals();
  calc3();


  
  
})();


document.addEventListener("DOMContentLoaded", function() {
  const carouselItems = document.querySelectorAll('.carousel-item');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  let currentIndex = 0;

  function goToSlide(index) {
    if (index < 0) {
      index = carouselItems.length - 1;
    } else if (index >= carouselItems.length) {
      index = 0;
    }
    currentIndex = index;
    document.querySelector('.carousel-inner').style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  function goToNextSlide() {
    goToSlide(currentIndex + 1);
  }

  function goToPrevSlide() {
    goToSlide(currentIndex - 1);
  }

  prevBtn.addEventListener('click', goToPrevSlide);
  nextBtn.addEventListener('click', goToNextSlide);

  setInterval(goToNextSlide, 3000); // автоматическая прокрутка каждые 3 секунды
});


function savePage() {
            // Создаем новый HTML-элемент
            var pageContent = document.createElement('html');

            // Создаем новый head
            var head = document.createElement('head');

            // Добавляем meta и title в head
            head.innerHTML = `
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Сохраненная страница</title>
                <style>table {
                width: 100%;
                border-collapse: collapse;
                margin-top: 20px;
              }

              th, td {
                border: 1px solid #dee2e6;
                padding: 8px;
              /*  text-align: center;*/
              }

              th {
                background-color: #343a40;
                color: #ffffff;
              }
                </style>
            `;

            // Добавляем head в новый HTML-элемент
            pageContent.appendChild(head);

            // Создаем новое body
            var body = document.createElement('body');

            // Добавляем название компании в body
            var companyName = document.getElementById('organization-search').value;
            body.innerHTML += '<h1> Название компании: ' + companyName + '</h1>';

            // Добавляем таблицу 1 в body
            var table1 = document.getElementById('table-bal').outerHTML;
            body.innerHTML += table1;

            // Добавляем таблицу 2 в body
            var table2 = document.querySelector('.data-table.prib').outerHTML;
            body.innerHTML += table2;

            // Добавляем body в новый HTML-элемент
            pageContent.appendChild(body);

            // Получаем HTML-код нового элемента
            var htmlContent = pageContent.outerHTML;

            // Создаем элемент <a> для скачивания файла
            var downloadLink = document.createElement("a");
            downloadLink.href = "data:text/html;charset=utf-8," + encodeURIComponent(htmlContent);
            downloadLink.download = "saved_page.html";

            // Добавляем элемент на страницу и кликаем по нему
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
        }

        // Назначаем обработчик события на кнопку
        document.getElementById("save-button").addEventListener("click", savePage);


// // Находим все ячейки с классом "inset" и содержащие тег div с текстом "0"
//   const zeroCells = document.querySelectorAll('.inset div');

//   // Удаляем пустые строки
//   zeroCells.forEach(cell => cell.parentNode.removeChild(cell));