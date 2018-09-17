//const myElements = document.querySelectorAll("div");
//const button = document.querySelector("button");
//const button = document.getElementsByTagName("button");
const form = document.getElementsByClassName("checklist")[0];
const checklistItems = form.querySelectorAll("input");
const checklistSummary = document.getElementById("checklist-summary");
class Checklist {
  constructor() {
    this.checked = 0;
    this.size = 3;
  }

  countChecks(event){
    const isChecked = event.target.checked;
    if (isChecked) {
      checklist.checked++;
    } else {
      checklist.checked--;
    }
    if (checklist.checked === checklist.size) {
      this.checkSummary();
    }
    if (checklist.checked === 0) {
      this.uncheckSummary();
    }
  }

  checkSummary(){
    checklistSummary.checked = true;
  }

  uncheckSummary(){
    checklistSummary.checked = false;
  }

  checkOrUncheckAll(event) {
    if (event.target.checked) {
      checklistItems.forEach(item => {
        item.checked = true;
      });
    } else {
      checklistItems.forEach(item => {
        item.checked = false;
      }); 
    }
  }

}

const checklist = new Checklist();

Array.from(checklistItems).forEach(el => {
  el.addEventListener("click", function(event) {
    checklist.countChecks(event);
  });
});

checklistSummary.addEventListener('click', function(event) {
  checklist.checkOrUncheckAll(event);
})


