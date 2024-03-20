import AppTasks from './app-tasks';

export default function TaskView() {
  return (
    <div className="col-span-1 text-black-text dark:text-white-text">
      <AppTasks
        title="Tasks"
        list={[
          { id: '1', name: 'review agents orders' },
          { id: '2', name: 'Check orders with minister' },
          { id: '3', name: 'update medicines prices' },
          { id: '4', name: 'call agents for swifts' },
          { id: '5', name: 'reject agent last orders' },
        ]}
      />
    </div>
  );
}
