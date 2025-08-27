// Dropdown toggle
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('dropdownToggle');
  const menu = document.getElementById('dropdownMenu');

  toggle.addEventListener('click', function () {
    menu.classList.toggle('show');
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', function (e) {
    if (!toggle.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.remove('show');
    }
  });
});

// Counter logic
function changeValue(type, delta) {
  event.preventDefault();
  const min = { room: 1, adult: 1, child: 0 };
  const max = { room: 10, adult: 10, child: 10 };
  const countId = type + 'Count';
  let count = parseInt(document.getElementById(countId).textContent, 10);
  count += delta;
  if (count < min[type]) count = min[type];
  if (count > max[type]) count = max[type];
  document.getElementById(countId).textContent = count;
}

function applySelection() {
  event.preventDefault();
  const room = document.getElementById('roomCount').textContent;
  const adult = document.getElementById('adultCount').textContent;
  const child = document.getElementById('childCount').textContent;
  document.getElementById('dropdownToggle').textContent = `👤 ${adult} Adult / ${child} Child / ${room} Room`;
  document.getElementById('dropdownMenu').classList.remove('show');
}