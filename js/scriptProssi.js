const levelsLeft = document.querySelectorAll('.skills .skills__level--painted');
let displayLevelLeft = document.querySelector('.skills .skills__display-level');

displayLevelLeft.innerHTML = '<em class="text--marked">' + levelsLeft[levelsLeft.length - 1].getAttribute('data-value') + '</em>'; 

const levelsRight = document.querySelectorAll('.skill-level--painted');
let displayLevelRight = document.querySelector('.skill-display-level');

displayLevelRight.innerHTML = '<em class="text--marked">' + levelsRight[levelsRight.length - 1].getAttribute('data-value') + '</em>'; 