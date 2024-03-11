// // import { useState } from 'react';
// // import PropTypes from 'prop-types';

// // import Stack from '@mui/material/Stack';
// // import Avatar from '@mui/material/Avatar';
// // import Popover from '@mui/material/Popover';
// // import TableRow from '@mui/material/TableRow';
// // import Checkbox from '@mui/material/Checkbox';
// // import MenuItem from '@mui/material/MenuItem';
// // import TableCell from '@mui/material/TableCell';
// // import Typography from '@mui/material/Typography';
// // import IconButton from '@mui/material/IconButton';
// // import FormControlLabel from '@mui/material/FormControlLabel';

// // import Label from './label';
// // import Iconify from './iconify';

// // export default function UserTableRow({
// //   selected,
// //   name,
// //   avatarUrl,
// //   company,
// //   role,
// //   isVerified,
// //   status,
// //   handleClick,
// //   handleEdit,
// //   handleDelete,
// // }) {
// //   const [open, setOpen] = useState(null);

// //   const handleOpenMenu = (event) => {
// //     setOpen(event.currentTarget);
// //   };

// //   const handleCloseMenu = () => {
// //     setOpen(null);
// //   };

// //   return (
// //     <>
// //       <TableRow hover tabIndex={-1} role="checkbox" selected={selected}>
// //         <TableCell padding="checkbox">
// //           <Checkbox disableRipple checked={selected} onChange={handleClick} />
// //         </TableCell>

// //         <TableCell component="th" scope="row" padding="none">
// //           <Stack direction="row" alignItems="center" spacing={2}>
// //             <Avatar alt={name} src={avatarUrl} />
// //             <Typography variant="subtitle2" noWrap>
// //               {name}
// //             </Typography>
// //           </Stack>
// //         </TableCell>

// //         <TableCell>{company}</TableCell>

// //         <TableCell>{role}</TableCell>

// //         <TableCell align="center">
// //           <FormControlLabel
// //             control={<Checkbox checked={isVerified} color="primary" />}
// //             label={isVerified ? 'Yes' : 'No'}
// //             labelPlacement="end"
// //           />
// //         </TableCell>

// //         <TableCell>
// //           <Label color={(status === 'inactive' && 'error') || 'success'}>{status}</Label>
// //         </TableCell>

// //         {/* <TableCell>
// //           <Label color={(status === 'banned' && 'error') || 'success'}>{status}</Label>
// //         </TableCell> */}

// //         <TableCell align="right">
// //           <IconButton onClick={handleOpenMenu}>
// //             <Iconify icon="eva:more-vertical-fill" />
// //           </IconButton>
// //         </TableCell>
// //       </TableRow>

// //       <Popover
// //         open={!!open}
// //         anchorEl={open}
// //         onClose={handleCloseMenu}
// //         anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
// //         transformOrigin={{ vertical: 'top', horizontal: 'right' }}
// //         PaperProps={{
// //           sx: { width: 140 },
// //         }}
// //       >
// //         <MenuItem
// //           onClick={() => {
// //             handleEdit();
// //             handleCloseMenu();
// //           }}
// //         >
// //           <Iconify icon="eva:edit-fill" sx={{ mr: 2 }} />
// //           Edit
// //         </MenuItem>

// //         <MenuItem
// //           onClick={() => {
// //             handleDelete();
// //             handleCloseMenu();
// //           }}
// //           sx={{ color: 'error.main' }}
// //         >
// //           <Iconify icon="eva:trash-2-outline" sx={{ mr: 2 }} />
// //           Delete
// //         </MenuItem>
// //       </Popover>
// //     </>
// //   );
// // }

// // UserTableRow.propTypes = {
// //   avatarUrl: PropTypes.any,
// //   company: PropTypes.any,
// //   handleClick: PropTypes.func,
// //   handleEdit: PropTypes.func,
// //   handleDelete: PropTypes.func,
// //   isVerified: PropTypes.bool,
// //   name: PropTypes.any,
// //   role: PropTypes.any,
// //   selected: PropTypes.bool,
// //   status: PropTypes.string,
// // };

// // //////////////////////////////////////////////////////////////////////

// import { useState } from "react";
// import PropTypes from "prop-types";

// import Stack from "@mui/material/Stack";
// import Avatar from "@mui/material/Avatar";
// import Popover from "@mui/material/Popover";
// import TableRow from "@mui/material/TableRow";
// import Checkbox from "@mui/material/Checkbox";
// import MenuItem from "@mui/material/MenuItem";
// import TableCell from "@mui/material/TableCell";
// import Typography from "@mui/material/Typography";
// import IconButton from "@mui/material/IconButton";
// import FormControlLabel from "@mui/material/FormControlLabel";

// import Label from "./label";
// import Iconify from "./iconify";

// export default function UserTableRow({
//   selected,
//   name,
//   avatarUrl,
//   company,
//   role,
//   isVerified,
//   status,
//   handleClick,
//   handleEdit,
//   handleDelete,
//   showEditDeleteIcons, // New prop
// }) {
//   const [open, setOpen] = useState(null);

//   const handleOpenMenu = (event) => {
//     setOpen(event.currentTarget);
//   };

//   const handleCloseMenu = () => {
//     setOpen(null);
//   };

//   return (
//     <>
//       <TableRow hover tabIndex={-1} role="checkbox" selected={selected}>
//         <TableCell padding="checkbox">
//           <Checkbox disableRipple checked={selected} onChange={handleClick} />
//         </TableCell>

//         <TableCell component="th" scope="row" padding="none">
//           <Stack direction="row" alignItems="center" spacing={2}>
//             <Avatar alt={name} src={avatarUrl} />
//             <Typography variant="subtitle2" noWrap>
//               {name}
//             </Typography>
//           </Stack>
//         </TableCell>

//         <TableCell>{company}</TableCell>

//         <TableCell>{role}</TableCell>

//         <TableCell align="center">
//           <FormControlLabel
//             control={<Checkbox checked={isVerified} color="primary" />}
//             label={isVerified ? "Yes" : "No"}
//             labelPlacement="end"
//           />
//         </TableCell>

//         <TableCell>
//           <Label color={(status === "inactive" && "error") || "success"}>
//             {status}
//           </Label>
//         </TableCell>

//         {showEditDeleteIcons && (
//           <TableCell align="right">
//             <IconButton onClick={handleOpenMenu}>
//               <Iconify icon="eva:more-vertical-fill" />
//             </IconButton>
//           </TableCell>
//         )}
//       </TableRow>

//       {showEditDeleteIcons && (
//         <Popover
//           open={!!open}
//           anchorEl={open}
//           onClose={handleCloseMenu}
//           anchorOrigin={{ vertical: "top", horizontal: "left" }}
//           transformOrigin={{ vertical: "top", horizontal: "right" }}
//           PaperProps={{
//             sx: { width: 140 },
//           }}
//         >
//           <MenuItem
//             onClick={() => {
//               handleEdit();
//               handleCloseMenu();
//             }}
//           >
//             <Iconify icon="eva:edit-fill" sx={{ mr: 2 }} />
//             Edit
//           </MenuItem>

//           <MenuItem
//             onClick={() => {
//               handleDelete();
//               handleCloseMenu();
//             }}
//             sx={{ color: "error.main" }}
//           >
//             <Iconify icon="eva:trash-2-outline" sx={{ mr: 2 }} />
//             Delete
//           </MenuItem>
//         </Popover>
//       )}
//     </>
//   );
// }

// UserTableRow.propTypes = {
//   avatarUrl: PropTypes.any,
//   company: PropTypes.any,
//   handleClick: PropTypes.func,
//   handleEdit: PropTypes.func,
//   handleDelete: PropTypes.func,
//   isVerified: PropTypes.bool,
//   name: PropTypes.any,
//   role: PropTypes.any,
//   selected: PropTypes.bool,
//   status: PropTypes.string,
//   showEditDeleteIcons: PropTypes.bool, // New prop type
// };
import { useState } from "react";
import PropTypes from "prop-types";

import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Popover from "@mui/material/Popover";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import MenuItem from "@mui/material/MenuItem";
import TableCell from "@mui/material/TableCell";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FormControlLabel from "@mui/material/FormControlLabel";

import Label from "./label";
import Iconify from "./iconify";

export default function UserTableRow({
  selected,
  name,
  avatarUrl,
  company,
  role,
  isVerified,
  status,
  handleClick,
  handleEdit,
  handleDelete,
  showEditDeleteIcons, // New prop
}) {
  const [open, setOpen] = useState(null);

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  return (
    <>
      <TableRow hover tabIndex={-1} role="checkbox" selected={selected}>
        <TableCell padding="checkbox">
          <Checkbox disableRipple checked={selected} onChange={handleClick} />
        </TableCell>

        <TableCell component="th" scope="row" padding="none">
          <Stack direction="row" alignItems="center" spacing={2}>
            <Avatar alt={name} src={avatarUrl} />
            <Typography variant="subtitle2" noWrap>
              {name}
            </Typography>
          </Stack>
        </TableCell>

        <TableCell>{company}</TableCell>

        <TableCell>{role}</TableCell>

        <TableCell align="center">
          <FormControlLabel
            control={<Checkbox checked={isVerified} color="primary" />}
            label={isVerified ? "Yes" : "No"}
            labelPlacement="end"
          />
        </TableCell>

        <TableCell>
          <Label color={(status === "inactive" && "error") || "success"}>
            {status}
          </Label>
        </TableCell>

        {showEditDeleteIcons && ( // Render icons conditionally based on showEditDeleteIcons prop
          <TableCell align="right">
            <IconButton onClick={handleOpenMenu}>
              <Iconify icon="eva:more-vertical-fill" />
            </IconButton>
          </TableCell>
        )}
      </TableRow>

      {showEditDeleteIcons && ( // Render popover conditionally based on showEditDeleteIcons prop
        <Popover
          open={!!open}
          anchorEl={open}
          onClose={handleCloseMenu}
          anchorOrigin={{ vertical: "top", horizontal: "left" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          PaperProps={{
            sx: { width: 140 },
          }}
        >
          <MenuItem
            onClick={() => {
              handleEdit();
              handleCloseMenu();
            }}
          >
            <Iconify icon="eva:edit-fill" sx={{ mr: 2 }} />
            Edit
          </MenuItem>

          <MenuItem
            onClick={() => {
              handleDelete();
              handleCloseMenu();
            }}
            sx={{ color: "error.main" }}
          >
            <Iconify icon="eva:trash-2-outline" sx={{ mr: 2 }} />
            Delete
          </MenuItem>
        </Popover>
      )}
    </>
  );
}

UserTableRow.propTypes = {
  avatarUrl: PropTypes.any,
  company: PropTypes.any,
  handleClick: PropTypes.func,
  handleEdit: PropTypes.func,
  handleDelete: PropTypes.func,
  isVerified: PropTypes.bool,
  name: PropTypes.any,
  role: PropTypes.any,
  selected: PropTypes.bool,
  status: PropTypes.string,
  showEditDeleteIcons: PropTypes.bool, // New prop type
};
