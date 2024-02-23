import { useMemo, useState } from "react";
import axios from "axios"; // Import axios for making HTTP requests
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { orderStatus } from "./makeData"; // Assuming this file contains the orderStatus array
import DeleteIcon from "@mui/icons-material/Delete";
import {
  useCreateOrder,
  useGetOrders,
  useUpdateOrder,
  useDeleteOrder,
} from "./useCrudTable";

const CrudTable = () => {
  const [validationErrors, setValidationErrors] = useState({});
  const [editedOrders, setEditedOrders] = useState({});

  const columns = useMemo(
    () => [
      {
        id: "orderId",
        accessorKey: "orderId",
        header: "Order ID",
        enableEditing: false,
        size: 100,
      },
      {
        id: "drugName",
        accessorKey: "drugName",
        header: "Drug Name",
        uiEditTextFieldProps: {
          type: "text",
        },
      },
      {
        id: "requestedQty",
        accessorKey: "requestedQty",
        header: "Req Quantity",
        muiEditTextFieldProps: {
          type: "number",
        },
      },
      {
        accessorKey: "agent",
        header: "Agent",
        muiEditTextFieldProps: {
          type: "agent",
        },
      },
      {
        id: "notes",
        accessorKey: "notes",
        header: "Notes",
        muiEditTextFieldProps: {
          type: "text",
        },
      },
      {
        id: "status",
        accessorKey: "status",
        header: "Status",
        editVariant: "select",
        editSelectOptions: orderStatus,
        muiEditTextFieldProps: {
          select: true,
        },
      },
    ],
    []
  );

  // Define CREATE hook to handle order creation
  const { mutateAsync: createOrder, isPending: isCreatingOrder } =
    useCreateOrder();

  // Call READ hook
  const {
    data: fetchedOrders = [],
    isError: isLoadingOrdersError,
    isFetching: isFetchingOrders,
    isLoading: isLoadingOrders,
  } = useGetOrders();

  // Call UPDATE hook
  const { mutateAsync: updateOrder, isPending: isUpdatingOrders } =
    useUpdateOrder();
  // Call DELETE hook
  const { mutateAsync: deleteOrder, isPending: isDeletingOrder } =
    useDeleteOrder();

  // CREATE action
  const handleCreateOrder = async ({ values, table }) => {
    try {
      // Send a POST request to create a new order
      await createOrder(values);
      table.setCreatingRow(null);
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  // UPDATE action
  const handleSaveOrders = async () => {
    try {
      // Send a PUT request to update orders
      await updateOrder(Object.values(editedOrders)); // Change editedOrders to editedOrders
      setEditedOrders({}); // Change setEditedOrders to setEditedOrders
    } catch (error) {
      console.error("Error saving orders:", error);
    }
  };

  // DELETE action
  const openDeleteConfirmModal = async (row) => {
    if (window.confirm("Are you sure you want to delete this order?")) {
      try {
        // Send a DELETE request to delete an order
        await deleteOrder(row.original.id);
      } catch (error) {
        console.error("Error deleting order:", error);
      }
    }
  };

  const table = useMaterialReactTable({
    columns,
    data: fetchedOrders,
    createDisplayMode: "row", // ('modal', and 'custom' are also available)
    editDisplayMode: "table", // ('modal', 'row', 'cell', and 'custom' are also
    enableEditing: true,
    enableRowActions: true,
    positionActionsColumn: "last",
    getRowId: (row) => row.id,
    muiToolbarAlertBannerProps: isLoadingOrdersError
      ? {
          color: "error",
          children: "Error loading data",
        }
      : undefined,
    muiTableContainerProps: {
      sx: {
        minHeight: "500px",
        borderRadius: "20px",

        // marginTop:"",
      },
    },
    onCreatingRowCancel: () => setValidationErrors({}),
    onCreatingRowSave: handleCreateOrder,
    renderRowActions: ({ row }) => (
      <Box sx={{ display: "flex", gap: "1rem" }}>
        <Tooltip title="Delete">
          <IconButton color="error" onClick={() => openDeleteConfirmModal(row)}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Box>
    ),

    renderBottomToolbarCustomActions: () => (
      <Box sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Button
          color="success"
          variant="contained"
          onClick={handleSaveOrders}
          disabled={
            Object.keys(editedOrders).length === 0 ||
            Object.values(validationErrors).some((error) => !!error)
          }
        >
          {isUpdatingOrders ? <CircularProgress size={25} /> : "Save"}
        </Button>
        {Object.values(validationErrors).some((error) => !!error) && (
          <Typography color="error">Fix errors before submitting</Typography>
        )}
      </Box>
    ),

    renderTopToolbarCustomActions: ({ table }) => (
      <Button
        variant="contained"
        onClick={() => {
          table.setCreatingRow(true);
        }}
      >
        Create New Order
      </Button>
    ),

    status: {
      isLoading: isLoadingOrders,
      isSaving: isCreatingOrder || isUpdatingOrders || isDeletingOrder,
      showAlertBanner: isLoadingOrdersError,
      showProgressBars: isFetchingOrders,
    },
  });

  return <MaterialReactTable table={table} />;
};

const queryClient = new QueryClient();

const Table = () => (
  //Put this with your other react-query providers near root of your app
  <QueryClientProvider client={queryClient}>
    <div className="p-10">
      <CrudTable />
    </div>
  </QueryClientProvider>
);

export default Table;
