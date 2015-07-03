describe('some angular e2e testing on angularjs.org', function() {

  // it('should go to angularjs.org', function() {
  //   browser.driver.get('https://angularjs.org');
    
  //   expect(browser.getTitle()).toContain('AngularJS — Superheroic JavaScript MVW Framework');
    
  //   element(by.model('yourName')).sendKeys('Bert');
    
  //   var name= element(by.binding('yourName')).getText();
    
  //   expect(name).toEqual('Hello Bert!');
    
  // });
  
  it('should add a new todo', function() {
    browser.driver.get('https://angularjs.org');
    
    element(by.model('todoList.todoText')).sendKeys('this is a new task');
    
    //this works:
    //$('[value=add]').click();
    
    
    var repeater =element.all(by.repeater('todo in todoList.todos'));
    
    expect(repeater.count()).toEqual(3);
    
  });
  
});









// describe('angularjs homepage todo list', function() {
//   it('should add a todo', function() {
//     //browser.get('https://angularjs.org');
//     // browser.driver.get('https://www-dev1.macquarie.com.au/wealth/ui/client/#/wealth');
    
//     // var titlePromise = browser.getTitle();
//     // titlePromise.then(function(text){
//     //   expect(text).toEqual('wrong title');
//     // });  
    

//     // element(by.model('todoList.todoText')).sendKeys('write first protractor test');
//     // element(by.css('[value="add"]')).click();



//     // var todoList = element.all(by.repeater('todo in todoList.todos'));
//     // expect(todoList.count()).toEqual(3);
//     // expect(todoList.get(2).getText()).toEqual('write first protractogdgdr test');

//     // // You wrote your first test, cross it off the list
//     // todoList.get(2).element(by.css('input')).click();
//     // var completedAmount = element.all(by.css('.done-true'));
//     //expect(completedAmount.count()).toEqual(2);
//   });
// });