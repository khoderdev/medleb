import PropTypes from "prop-types";
import React, { useState } from "react";

import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import CardHeader from "@mui/material/CardHeader";
import FormControlLabel from "@mui/material/FormControlLabel";
import "../../../index.css";

import Iconify from "../../../../user/iconify";

// ----------------------------------------------------------------------

export default function AnalyticsTasks({ title, subheader, list, ...other }) {
  const [tasks, setTasks] = useState(list);
  const [selected, setSelected] = useState(["2"]);

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

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

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
    </Card>
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
          "&:not(:last-of-type)": {
            borderBottom: (theme) => `dashed 1px ${theme.palette.divider}`,
          },
          ...(checked && {
            color: "text.disabled",
            textDecoration: "line-through",
            fontFamily: "Roboto Condensed', sans-serif",
          }),
        }}
      >
        {isEditing ? (
          <TextField
            value={editedContent}
            onChange={handleChange}
            fullWidth
            variant="standard"
            size="small"
          />
        ) : (
          <FormControlLabel
            control={<Checkbox checked={checked} onChange={onChange} />}
            label={task.name}
            sx={{ flexGrow: 1, m: 0 }}
          />
        )}

        {isEditing ? (
          <Button onClick={handleSave} size="small">
            Save
          </Button>
        ) : (
          <IconButton
            color={open ? "inherit" : "default"}
            onClick={handleOpenMenu}
          >
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        )}
      </Stack>

      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem onClick={handleEdit}>
          <Iconify icon="solar:pen-bold" sx={{ mr: 2 }} />
          Edit
        </MenuItem>

        <MenuItem onClick={handleDelete} sx={{ color: "error.main" }}>
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
