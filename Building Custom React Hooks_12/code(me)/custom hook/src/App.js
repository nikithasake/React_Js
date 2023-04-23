import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './hooks/use-http';
import React,{useEffect,useState,useCallback} from 'react';
function App() {
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
 
  const [tasks, setTasks] = useState([]);

  const {isLoading,error,sendRequest:fetchTasks}=useHttp();

  // const fetchTasks = async (taskText) => {
  //   setIsLoading(true);
  //   setError(null);
  //   try {
  //     const response = await fetch(
  //       'https://tasks-21fbe-default-rtdb.firebaseio.com/tasks.json'
  //     );

  //     if (!response.ok) { 
  //       throw new Error('Request failed!');
  //     }

  //     const data = await response.json();

  //     const loadedTasks = [];

  //     for (const taskKey in data) {
  //       loadedTasks.push({ id: taskKey, text: data[taskKey].text });
  //     }

  //     setTasks(loadedTasks);
  //   } catch (err) {
  //     setError(err.message || 'Something went wrong!');
  //   }
  //   setIsLoading(false);
  // };

  useEffect(() => {
    const transformTasks=((tasksObj)=>{
      const loadedTasks = [];
  
      for (const taskKey in tasksObj) {
        loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
      }
  
      setTasks(loadedTasks);
    });
    fetchTasks({url: 'https://tasks-21fbe-default-rtdb.firebaseio.com/tasks.json'},transformTasks);
    },[fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
