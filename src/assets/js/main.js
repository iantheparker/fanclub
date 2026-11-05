// === VIDEO PLAY/PAUSE ===
document.querySelectorAll('.video-wrapper').forEach(function(wrapper) {
  var video = wrapper.querySelector('video');
  var btn = wrapper.querySelector('.playpause');
  if (!btn) return; // autoplay videos have no button

  btn.addEventListener('click', function() {
    if (video.paused) {
      video.play();
      btn.classList.add('hide');
    } else {
      video.pause();
      btn.classList.remove('hide');
    }
  });
});

// === NAME PERSONALIZATION ===
(function() {
  var nameEl = document.getElementById('greeting-name');
  if (!nameEl) return;

  function getCookie(name) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? decodeURIComponent(match[2]) : '';
  }

  function setCookie(name, value) {
    var d = new Date();
    d.setFullYear(d.getFullYear() + 1);
    document.cookie = name + '=' + encodeURIComponent(value) + ';expires=' + d.toUTCString() + ';path=/';
  }

  function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

  var entry = window.location.search.replace(/[^\w\s]/gi, ' ').trim();
  var name  = getCookie('greetings') || 'World';

  if (entry) {
    name = entry.split(/\s+/).map(cap).join(' ');
    setCookie('greetings', name);
  }

  nameEl.textContent = name;
})();
