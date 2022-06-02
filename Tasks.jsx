import TaskItem from './TasksItem';

const Tasks = ({ tasks, onDelete}) => {
    return(
        <>
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} onDelete={onDelete}/>  
                ))}
            </>

    );
};

export default Tasks;