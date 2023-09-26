

(function () {
const header = document.querySelector('h1');
header.style.color = 'red';
document.querySelector('button').addEventListener('click', function () {
header.style.color = 'blue';
});
})();