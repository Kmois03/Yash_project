// function togglePlan(element) {
//   document.querySelectorAll('.plan').forEach(plan => {
//     plan.classList.remove('expanded');
//   });

//   const selectedPlan = element.closest('.plan');
//   selectedPlan.classList.add('expanded');
// }

function togglePlan(element) {
  // Collapse all expanded plans
  document.querySelectorAll('.plan.expanded').forEach(plan => {
    plan.classList.remove('expanded');
  });

  // Expand the selected plan
  const selectedPlan = element.closest('.plan');
  if (selectedPlan) {
    selectedPlan.classList.add('expanded');
  }
}



function updatePrice(price) {
  document.getElementById('total-price').textContent = `$${price.toFixed(2)} USD`;
}
