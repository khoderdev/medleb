/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */

// -----------------------------------------------------------

import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { styled } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import FormControlLabel from '@mui/material/FormControlLabel';

import '../../index.css';
import Iconify from '../../components/iconify';

// ----------------------------------------------------------------------

const StyledCheckbox = styled(Checkbox)({
  color: '#00a651',
  '&.Mui-checked': {
    color: '#00a651',
  },
});

// StyledButton component to customize Button styles
const StyledButton = styled(Button)({
  color: '#00a651',

  '&:hover': {
    color: '#00a651',
  },
});

// StyledTextField component to customize TextField styles
const StyledTextField = styled(TextField)({
  '& .MuiInputBase-root': {
    borderBottom: '1px solid green',
    '&:focus': {
      borderColor: 'green',
    },
  },
});

export default function AnalyticsTasks({ title, subheader, list, ...other }) {
  const [tasks, setTasks] = useState(list);
  const [selected, setSelected] = useState(['2']);
  const [newTaskInput, setNewTaskInput] = useState('');
  const [isAddingTask, setIsAddingTask] = useState(false);

  const handleClickComplete = (taskId) => {
    const tasksCompleted = selected.includes(taskId)
      ? selected.filter((value) => value !== taskId)
      : [...selected, taskId];

    setSelected(tasksCompleted);
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleSaveTask = (taskId, updatedContent) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, name: updatedContent } : task
    );
    setTasks(updatedTasks);
  };

  const handleAddTask = () => {
    setIsAddingTask(true);
  };

  const handleCancelAddTask = () => {
    setIsAddingTask(false);
    setNewTaskInput('');
  };

  const handleCreateTask = () => {
    if (newTaskInput.trim() !== '') {
      const newTask = {
        id: tasks.length + 1, // Assign a unique ID (you may need a more robust method)
        name: newTaskInput.trim(),
      };

      setTasks([...tasks, newTask]);
      setIsAddingTask(false);
      setNewTaskInput('');
    }
  };

  return (
    <div className="w-full rounded-2xl bg-white-contents dark:bg-black-contents dark:text-white-text p-3 overflow-y-auto">
      <div className="p-2">
        <h2 className="text-lg font-semibold">{title}</h2>
        {subheader && <p className="text-sm text-gray-600">{subheader}</p>}
      </div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          checked={selected.includes(task.id)}
          onChange={() => handleClickComplete(task.id)}
          onDelete={() => handleDeleteTask(task.id)}
          onSave={(updatedContent) => handleSaveTask(task.id, updatedContent)}
        />
      ))}
      {isAddingTask ? (
        <div className="flex items-center p-2">
          <input
            type="text"
            value={newTaskInput}
            onChange={(e) => setNewTaskInput(e.target.value)}
            className="w-full dark:bg-black-input rounded-md px-2 py-1 text-black-text dark:text-white-text"
            placeholder="New Task"
          />
          <button
            onClick={handleCreateTask}
            className="ml-2 px-1 py-1 text-green-pri focus:outline-none"
          >
            Save
          </button>
          <button
            onClick={handleCancelAddTask}
            className="ml-2 px-1 py-1 text-red-500 rounded-md focus:outline-none"
          >
            Cancel
          </button>
        </div>
      ) : (
        <button onClick={handleAddTask} className="px-4 py-1 text-green-pri focus:outline-none">
          New Task
        </button>
      )}
    </div>
  );
}

AnalyticsTasks.propTypes = {
  list: PropTypes.array,
  subheader: PropTypes.string,
  title: PropTypes.string,
};

// ----------------------------------------------------------------------

function TaskItem({ task, checked, onChange, onDelete, onSave }) {
  const [open, setOpen] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(task.name);

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  const handleEdit = () => {
    handleCloseMenu();
    setIsEditing(true);
  };

  const handleSave = () => {
    onSave(editedContent);
    setIsEditing(false);
  };

  const handleDelete = () => {
    handleCloseMenu();
    onDelete(task.id);
  };

  const handleChange = (event) => {
    setEditedContent(event.target.value);
  };

  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        className="roboto-font"
        sx={{
          pl: 2,
          pr: 1,
          py: 1,
          backgroundColor: 'transparent', // Remove white background
          '&:not(:last-of-type)': {
            borderBottom: (theme) => `dashed 1px ${theme.palette.divider}`,
          },
          ...(checked && {
            color: 'text.disabled',
            textDecoration: 'line-through',
            fontFamily: "'Roboto Condensed', sans-serif",
          }),
        }}
      >
        {isEditing ? (
          <StyledTextField
            value={editedContent}
            onChange={handleChange}
            fullWidth
            variant="standard"
            size="small"
            sx={{ backgroundColor: 'transparent' }} // Remove white background
          />
        ) : (
          <FormControlLabel
            control={<StyledCheckbox checked={checked} onChange={onChange} />} // Use StyledCheckbox component
            label={task.name}
            sx={{ flexGrow: 1, m: 0 }}
          />
        )}

        {isEditing ? (
          <StyledButton onClick={handleSave} size="small">
            Save
          </StyledButton>
        ) : (
          <IconButton color={open ? 'inherit' : 'default'} onClick={handleOpenMenu}>
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        )}
      </Stack>

      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem onClick={handleEdit}>
          <Iconify icon="solar:pen-bold" sx={{ mr: 2 }} />
          Edit
        </MenuItem>

        <MenuItem onClick={handleDelete} sx={{ color: 'error.main' }}>
          <Iconify icon="solar:trash-bin-trash-bold" sx={{ mr: 2 }} />
          Delete
        </MenuItem>
      </Popover>
    </>
  );
}

TaskItem.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  onDelete: PropTypes.func,
  onSave: PropTypes.func,
  task: PropTypes.object,
};
