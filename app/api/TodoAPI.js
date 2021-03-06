var $=require('jquery');
module.exports={
    setTodos:function(todos)
    {
        if($.isArray(todos))
        {
            localStorage.setItem('todos',JSON.stringify(todos));
            return todos;
        }
    },
    getTodos:function(){
        var stringTodos= localStorage.getItem(todos);
        var todos=[];
          try{
              todos=JSON.parse(stringTodos);

          }
          catch(e){
          
          }
          return $.isArray(todos)?
          todos:[];

    },
    fliterTodos:function(todos, showCompleted, searchText)
    {
        var filterTodos=todos;
        filterTodos=filterTodos.filter((todo)=>{
            return !todo.completed||showCompleted
        })
        filteredTodos= filteredTodos.filter((todo)=>{
            var test=todo.text.toLowerCase();
            return searchText.length==0||text.indexOf(searchText)>-1
      })
      filteredTodos.sort((a,b)=>{
          if(!a.completed && b.completed)
          {
              return -1;
          }
          else if(a.completed && !b.completed)
          {
              return 1;
          }
          else{
              return 0;
          }
      })
      return filterTodos
    }
}