window.addEventListener("load", function() {
    const form = document.getElementById('message-form');
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
        method: 'POST',
        body: data,
      })
      .then(() => {
        form.style.display = "none";
        document.querySelector('.form').textContent = "Your message sent successfully, Thank You!";
      })
    });
  });