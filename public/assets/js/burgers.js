// listen for form submission
$('#burger-form').on('submit', function(event){
  event.preventDefault();

  // collect burger data as an object
  const burgerData = {
    burger_name: $('[name=burger-name]')
      .val()
      .trim()
  };

  $.ajax({
    url: '/api/burgers',
    method: 'POST',
    data: burgerData
  })
  .then(response => {
    console.log(response);
    location.reload(); // dounble check what this does
  });
});

$('.devourBurger').on('click', function() {
  // get id of burger to devour
  const burgerId = $(this).attr('data-burgerid');

  $.ajax({
    url: `/api/burgers/${burgerId}`,
    method: 'PUT',
    data: {
      devoured: 1
    }
  })
  .then(response => {
    console.log(response);
    location.reload();
  });
});

$('.unDevourBurger').on('click', function() {
  // get id of burger to undevour
  const burgerId = $(this).attr('data-burgerid');

  $.ajax({
    url: `/api/burgers/${burgerId}`,
    method: 'PUT',
    data: {
      devoured: 0
    }
  })
  .then(response => {
    console.log(response);
    location.reload();
  });
});

$('.deleteBurger').on('click', function(){
  //get burger id
  const burgerId = $(this).attr('data-burgerid');
  console.log(burgerId);

  //delete burger
  $.ajax({
    url: `/api/burgers/${burgerId}`,
    method: 'DELETE'
  })
  .then(response => {
    console.log(response);
    location.reload();
  });
});