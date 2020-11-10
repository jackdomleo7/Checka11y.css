window.onload = function() {
  document.getElementById('copyright').innerHTML = '&copy;' + new Date().getFullYear() + ' Cooltipz.css';
}

function programmaticallyShowTooltip(elementToApplyTooltip) {
  document.getElementById(elementToApplyTooltip).classList.toggle('cooltipz--visible');
}