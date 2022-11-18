import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";


// const todoList = [
//     { title: '开发任务-1', status: '22-05-22 18:15'},
//     { title: '开发任务-3', status: '22-05-22 18:15'},
//     { title: '开发任务-5', status: '22-05-22 18:15'},
//     { title: '测试任务-3', status: '22-05-22 18:15'},
// ];


const KanBanBoard = ({ children }) => (
    <main className="kanban-board">{children}</main>
)

const KanBanColumn = ({ children, className, title }) => {
    const combinedClassName = `kanban-column ${className}`;
    return (
        <section className={combinedClassName}>
            <h2>{title}</h2>
            <ul>{children}</ul>
        </section>
    );
}

const KanBanCard = ({ title, status}) => {
    return (
        <li className="kanban-card">
            <div className="card-title">{title}</div>
            <div className="card-status">{status}</div>
        </li>
    );
};

const KanBanNewCard = ({ onSubmit }) => {
    const [title, setTitle] = useState('');
    const handleChange = (evt) => {
        setTitle(evt.target.value)
    }
    const handleKeyDown = (evt) => {
        if (evt.key === 'Enter') {
            onSubmit(title)
        }
    }

    return (
      <li className="kanban-card">
          <h3>添加新卡片</h3>
          <div className="card-title">
              <input type="text" value={title}
                onChange={handleChange} onKeyDown={handleKeyDown}
              />
          </div>
      </li>
    );
}
// 知识盲点
// 1. css 样式
// 2. 数据的传递与更新

function App() {
    const [showAdd, setShowAdd] = useState(false);
    const [todoList, setTodoList] = useState([
        { title: '开发任务-1', status: '22-05-22 18:15'},
        { title: '开发任务-3', status: '22-05-22 18:15'},
        { title: '开发任务-5', status: '22-05-22 18:15'},
        { title: '测试任务-3', status: '22-05-22 18:15'},
    ])
    const [ongoingList, setOngoingList] = useState(
        [
            { title: "开发任务-4", status: "22-05-22 18:15"},
            { title: "开发任务-6", status: "22-05-22 18:15"},
            { title: "开发任务-2", status: "22-05-22 18:15"},
        ]
    );

    const [doneList, setDoneList] = useState(
        [
            { title: "开发任务-2", status: "22-05-22 18:15"},
            { title: "测试任务-1", status: "22-05-22 18:15"},
        ]
    );
    const handleAdd = (evt) => {
        setShowAdd(true);
    }


    const todoTitle = (
        <>
            <span>待处理</span><button onClick={handleAdd}
                                    disabled={showAdd}>&#8853; 添加新卡片</button>
        </>
    );

    const handleSubmit = (title) => {
        // todoList.unshift({ title, status: new Date().toDateString()});
        // setShowAdd(false);
        setTodoList(currentTodoList => [
            {title, status: new Date().toDateString()},
            ...currentTodoList
        ])
    }

  return (
    <div className="App">
        <header className="App-header">
            <h1>我的看板</h1>
            <img src={logo} className={App-logo} alt={logo}></img>
        </header>
            <KanBanBoard>
                    <KanBanColumn className="column-todo" title="待处理">
                        {/*<h2>待处理<button onClick={handleAdd} disabled={showAdd}>&#8853;添加新卡片</button></h2>*/}
                        { todoList.map(props => <KanBanCard {...props} />)}
                    </KanBanColumn>

                    <KanBanColumn className="column-ongoing" title="进行中">
                        { ongoingList.map(props => <KanBanCard {...props} />)}
                    </KanBanColumn>

                    <KanBanColumn className="column-done" title="已完成">
                        { doneList.map(props => <KanBanCard {...props} />)}
                    </KanBanColumn>
            </KanBanBoard>
    </div>
  );
}

export default App;
