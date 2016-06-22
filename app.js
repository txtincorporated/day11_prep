var p = document.querySelector('p');

function setRouteMappings() {
  page.base('/');

  page('', index);
  page('about', about);
  page('contact', contact);
  page('contact/:contactName', contact);
  page('Nathan', Nathan);
  page('Fashnizzle', Fashnizzle);
  page('Fashnizzle', Fashizzle);
  page('*', notfound); // catch-all

  page();
}

// function index() { p.textContent = 'viewing index (home)'; }
function index() {$('p').text('viewing index (home)');}
function about() {$('p').text('viewing about');}
function contact(ctx) {
  $('p').text('viewing contact ' + (ctx.params.contactName || ''));
}
function Nathan() {$('p').text('viewing Nathan');}
function Fashnizzle() {$('p').text('viewing Fashnizzle');}
function Fashizzle() {$('p').text('viewing Fashizzle');}
function notfound() {
  $('p').html('<h3>OMG!</h3><p>The page at "'
              + location.hostname + location.pathname + location.search
              + '" can\'t be found (like a bridge over troubled water, ya\' know)!</p>'
              + '<img src="lost.jpg"></img>');
}

setRouteMappings();
