
// import '@mantine/core/styles.css';
// import '@mantine/dates/styles.css'; //if using mantine date picker features
// import 'mantine-react-table/styles.css'; //make sure MRT styles were imported in your app root (once)
// import { useMemo, useState } from 'react';
// import {
//   MantineReactTable,
//   // createRow,
//   type MRT_ColumnDef,
//   type MRT_Row,
//   type MRT_TableOptions,
//   useMantineReactTable,
// } from 'mantine-react-table';
// import { ActionIcon, Button, Text, Tooltip } from '@mantine/core';
// import { ModalsProvider, modals } from '@mantine/modals';
// import { IconTrash } from '@tabler/icons-react';
// import {
//   QueryClient,
//   QueryClientProvider
// } from '@tanstack/react-query';
// import { orderStatus } from '../../makeData';
// import React from 'react';
// import {
//   useCreateOrder,
//   useGetOrder,
//   Order,
//   useUpdateOrder,
//   useDeleteOrder,
// } from "./useCrudTable";


// const Example = () => {
//   const [editedOrders, setEditedOrders] = useState<Record<string, Order>>({});

//   const { mutateAsync: createOrder, isPending: isCreatingOrder } = useCreateOrder();
//   const {
//     data: fetchedOrders = [],
//     isError: isLoadingOrdersError,
//     isFetching: isFetchingOrders,
//     isLoading: isLoadingOrders,
//   } = useGetOrder();
//   const { mutateAsync: updateOrder, isPending: isUpdatingOrder } = useUpdateOrder();
//   const { mutateAsync: deleteOrder, isPending: isDeletingOrder } = useDeleteOrder();

//   const handleCreateOrder = async ({ values, exitCreatingMode }: any) => {
//     await createOrder(values);
//     exitCreatingMode();
//   };

//   const handleSaveOrders = async () => {
//     try {
//       const updatedOrders = Object.values(editedOrders);
//       // Check if any orders are being updated
//       if (updatedOrders.length === 0) {
//         console.warn("No orders to update.");
//         return;
//       }
//       // Loop through each updated order and call updateOrder with orderId
//       for (const updatedOrder of updatedOrders) {
//         await updateOrder(updatedOrder); // Ensure updatedOrder has the correct id field set
//       }
//       setEditedOrders({});
//     } catch (error) {
//       console.error("Error updating orders:", error);
//     }
//   };




//   const openDeleteConfirmModal = (row: MRT_Row<Order>) =>
//     modals.openConfirmModal({
//       title: 'Are you sure you want to delete this Order?',

//       labels: { confirm: 'Delete', cancel: 'Cancel' },
//       confirmProps: { color: 'red' },
//       onConfirm: () => deleteOrder(row.original.id),
//     });

//   const columns = useMemo<MRT_ColumnDef<Order>[]>(() => [
//     {
//       id: "OrderNumber",
//       accessorKey: "OrderNumber",
//       header: "Order Number",
//       enableEditing: false,
//       size: 100,
//     },
//     {
//       accessorKey: "drugName",
//       header: "Drug Name",
//       mantineEditTextInputProps: ({ cell, row }) => ({
//         type: 'text',
//       }),
//     },
//     {
//       accessorKey: "requestedQty",
//       header: "Req Quantity",
//       mantineEditTextInputProps: ({ cell, row }) => ({
//         type: 'text',
//       }),
//     },
//     {
//       accessorKey: "agent",
//       header: "Agent",
//       mantineEditTextInputProps: ({ cell, row }) => ({
//         type: 'text',
//       }),
//     },
//     {
//       accessorKey: "notes",
//       header: "Notes",
//       mantineEditTextInputProps: ({ cell, row }) => ({
//         type: 'text',
//       }),
//     },
//     {
//       accessorKey: 'orderStatus',
//       header: 'Status',
//       editVariant: 'select',
//       mantineEditSelectProps: ({ row }) => ({
//         data: orderStatus,
//         onChange: (value: any) =>
//           setEditedOrders({
//             ...editedOrders,
//             [row.id]: { ...row.original, status: value },
//           }),
//       }),
//     },
//   ], [editedOrders]);

//   const table = useMantineReactTable({
//     columns,
//     data: fetchedOrders,
//     createDisplayMode: 'row',
//     editDisplayMode: 'table',
//     enableEditing: true,
//     enableRowActions: true,
//     positionActionsColumn: 'last',
//     getRowId: (row) => row.id,
//     mantineToolbarAlertBannerProps: isLoadingOrdersError
//       ? {
//         color: 'red',
//         children: 'Error loading data',
//       }
//       : undefined,
//     mantineTableContainerProps: {
//       style: {
//         minHeight: '500px',
//       },
//     },
//     onCreatingRowCancel: () => { },
//     onCreatingRowSave: handleCreateOrder,
//     renderRowActions: ({ row }) => (
//       <Tooltip label="Delete">
//         <ActionIcon color="red" onClick={() => openDeleteConfirmModal(row)}>
//           <IconTrash />
//         </ActionIcon>
//       </Tooltip>
//     ),
//     renderBottomToolbarCustomActions: () => (
//       <Button
//         color="blue"
//         onClick={handleSaveOrders}
//         disabled={Object.keys(editedOrders).length === 0}
//         loading={isUpdatingOrder}
//       >
//         Save
//       </Button>
//     ),
//     renderTopToolbarCustomActions: ({ table }) => (
//       <Button
//         onClick={() => {
//           table.setCreatingRow(true);
//         }}
//       >
//         Create New Order
//       </Button>
//     ),
//     state: {
//       isLoading: isLoadingOrders,
//       isSaving: isCreatingOrder || isUpdatingOrder || isDeletingOrder,
//       showAlertBanner: isLoadingOrdersError,
//       showProgressBars: isFetchingOrders,
//     },
//   });

//   return <MantineReactTable table={table} />;
// };

// const queryClient = new QueryClient();

// const ExampleWithProviders = () => (
//   <QueryClientProvider client={queryClient}>
//     <ModalsProvider>
//       <div className='p-10'>
//         <Example />
//       </div>
//     </ModalsProvider>
//   </QueryClientProvider>
// );

// export default ExampleWithProviders;



// ظظظظظظظظظظظظظظظظظظظظظظظظظظظظ
// ظظظظظظظظظظظظظظظظظظظظظظظظظظظظ
// ظظظظظظظظظظظظظظظظظظظظظظظظظظظظ



import '@mantine/core/styles.css';
import '@mantine/dates/styles.css'; //if using mantine date picker features
import 'mantine-react-table/styles.css'; //make sure MRT styles were imported in your app root (once)
import { useMemo, useState } from 'react';
import {
  MantineReactTable,
  // createRow,
  type MRT_ColumnDef,
  type MRT_Row,
  type MRT_TableOptions,
  useMantineReactTable,
} from 'mantine-react-table';
import { ActionIcon, Button, Text, Tooltip } from '@mantine/core';
import { ModalsProvider, modals } from '@mantine/modals';
import { IconTrash } from '@tabler/icons-react';
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import { orderStatus } from '../../makeData';
import React from 'react';
import {
  useCreateOrder,
  useGetOrder,
  Order,
  useUpdateOrder,
  useDeleteOrder,
} from "./useCrudTable";


const Example = () => {
  const [editedOrders, setEditedOrders] = useState({});

  const { mutateAsync: createOrder, isPending: isCreatingOrder } = useCreateOrder();
  const { data: fetchedOrders = [], isError: isLoadingOrdersError, isFetching: isFetchingOrders, isLoading: isLoadingOrders } = useGetOrder();
  const { mutateAsync: updateOrder, isPending: isUpdatingOrder } = useUpdateOrder();
  const { mutateAsync: deleteOrder, isPending: isDeletingOrder } = useDeleteOrder();

  const handleCreateOrder = async ({ values, exitCreatingMode }) => {
    await createOrder(values);
    exitCreatingMode();
  };

  const handleSaveOrders = async () => {
    try {
      const updatedOrders = Object.values(editedOrders);
      if (updatedOrders.length === 0) {
        console.warn("No orders to update.");
        return;
      }
      for (const updatedOrder of updatedOrders) {
        await updateOrder(updatedOrder);
      }
      setEditedOrders({});
    } catch (error) {
      console.error("Error updating orders:", error);
    }
  };

  const openDeleteConfirmModal = (row) =>
    modals.openConfirmModal({
      title: 'Are you sure you want to delete this Order?',
      labels: { confirm: 'Delete', cancel: 'Cancel' },
      confirmProps: { color: 'red' },
      onConfirm: () => deleteOrder(row.original.id),
    });

  const columns = useMemo(() => [
    {
      id: "OrderNumber",
      accessorKey: "OrderNumber",
      header: "Order Number",
      enableEditing: false,
      size: 100,
    },
    {
      accessorKey: "drugName",
      header: "Drug Name",
      mantineEditTextInputProps: ({ cell, row }) => ({
        type: 'text',
      }),
    },
    {
      accessorKey: "requestedQty",
      header: "Req Quantity",
      mantineEditTextInputProps: ({ cell, row }) => ({
        type: 'text',
      }),
    },
    {
      accessorKey: "agent",
      header: "Agent",
      mantineEditTextInputProps: ({ cell, row }) => ({
        type: 'text',
      }),
    },
    {
      accessorKey: "notes",
      header: "Notes",
      mantineEditTextInputProps: ({ cell, row }) => ({
        type: 'text',
      }),
    },
    {
      accessorKey: 'orderStatus',
      header: 'Status',
      editVariant: 'select',
      mantineEditSelectProps: ({ row }) => ({
        data: orderStatus,
        onChange: (value) =>
          setEditedOrders({
            ...editedOrders,
            [row.id]: { ...row.original, status: value },
          }),
      }),
    },
  ], [editedOrders]);

  const table = useMantineReactTable({
    columns,
    data: fetchedOrders,
    createDisplayMode: 'row',
    editDisplayMode: 'table',
    enableEditing: true,
    enableRowActions: true,
    positionActionsColumn: 'last',
    getRowId: (row) => row.id,
    mantineToolbarAlertBannerProps: isLoadingOrdersError
      ? {
        color: 'red',
        children: 'Error loading data',
      }
      : undefined,
    mantineTableContainerProps: {
      style: {
        minHeight: '500px',
      },
    },
    onCreatingRowCancel: () => { },
    onCreatingRowSave: handleCreateOrder,
    renderRowActions: ({ row }) => (
      <Tooltip label="Delete">
        <ActionIcon color="red" onClick={() => openDeleteConfirmModal(row)}>
          <IconTrash />
        </ActionIcon>
      </Tooltip>
    ),
    renderBottomToolbarCustomActions: () => (
      <Button
        color="blue"
        onClick={handleSaveOrders}
        disabled={Object.keys(editedOrders).length === 0}
        loading={isUpdatingOrder}
      >
        Save
      </Button>
    ),
    renderTopToolbarCustomActions: ({ table }) => (
      <Button
        onClick={() => {
          table.setCreatingRow(true);
        }}
      >
        Create New Order
      </Button>
    ),
    state: {
      isLoading: isLoadingOrders,
      isSaving: isCreatingOrder || isUpdatingOrder || isDeletingOrder,
      showAlertBanner: isLoadingOrdersError,
      showProgressBars: isFetchingOrders,
    },
  });

  return <MantineReactTable table={table} />;
};

const queryClient = new QueryClient();

const ExampleWithProviders = () => (
  <QueryClientProvider client={queryClient}>
    <ModalsProvider>
      <div className='p-10'>
        <Example />
      </div>
    </ModalsProvider>
  </QueryClientProvider>
);

export default ExampleWithProviders;