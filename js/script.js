$(document).ready(function() {
  // Отримуємо всі елементи списку
  var items = $(".card");
  var btn = $(".btn-success");

  // Отримуємо елементи скритого блоку та вихідного контейнера
  var hiddenBlock = $("#ccs");
  var selectedImage = hiddenBlock.find("#img");
  var selectedTitle = hiddenBlock.find("#title");
  var output = $(".modal-body");

  // Функція для обробки кліку на елемент
  function handleClick(event) {
    // Отримуємо посилання на натиснутий елемент
    var clickedElement = $(event.currentTarget);
    
    // Отримуємо дані з натиснутого елементу
    var clickedImage = clickedElement.find("img").attr("src");
    var clickedTitle = clickedElement.find("h5").text();

    // Створюємо копію скритого блоку
    var clone = hiddenBlock.clone(true);
    
    // Вставляємо дані у копію скритого блоку
    clone.find(".selectedImage").attr("src", clickedImage);
    clone.find(".selectedTitle").text(clickedTitle);
    
    // Додаємо копію до вихідного контейнера
    output.append(clone);
    
    // Показуємо скритий блок
    hiddenBlock.css("display", "block");
  }

  // Додаємо обробник кліку до кожного елементу
  items.on("click", handleClick);
});