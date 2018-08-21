var React=require('react');
var moment=require('moment');
var Todo=React.createClass({
    render: function(){
        var{id,text,completed,createdAt,completedAt}=this.props;
        var todoClassName=completed ? 'todo todo-completed':'todo';
        var renderData=()=>
        {
            var message='created';
            var timestamp=createdAt;
            if(completed)
            {
                message='completed';
                timestamp=completedAt;

        }
        return message+moment.unix(timestamp).format('MM Do YYYY @ h:mm a');
        };
        return (
        <div className={todoClassName} onClick={()=>{
              this.props.onToggle(id);
        }}>
        <div>
            <input type="checkbox" checked={completed}/>
            </div>
            <div>
                <p> {text}</p>
            <p className="todo_subtext">
            {renderData()}
            </p>
            </div>
            </div>
        )
    }
});
module.exports=Todo