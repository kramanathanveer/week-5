Vue.component('list-component', {
  props: ['data'],
  template: '<p>{{ data }}</p>'
})
var app = new Vue({
  el: '#app',
  data: {
    itemsList: [
      'Sample 1',
      'Sample 2',
      'Sample 3',
    ]
  }
});
function addItem(){
  const data = prompt('Enter any text here');
  if(data){
    if(data.trim() != ''){
      app.itemsList.push(data);
    }
  } 
}