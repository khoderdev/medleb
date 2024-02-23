import { useMemo } from "react";
import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { orderStatus } from "./makeData";

// Function to generate unique 4-digit serial numbers
const generateSerialNumber = (() => {
  let counter = 0; // Initialize counter

  return () => {
    counter++; // Increment counter
    return counter.toString().padStart(4, "0"); // Return counter as padded string
  };
})();

// CREATE hook (post new order to API)
export function useCreateOrder() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (order) => {
      try {
        // Generate unique 4-digit serial number
        const orderId = generateSerialNumber();
        // Include default value for status field
        const response = await axios.post(
          "http://localhost:3000/orders",
          { ...order, orderId, status: "pending" } // Include generated orderId and default status
        );
        return response.data;
      } catch (error) {
        console.error("Error creating order:", error);
        throw new Error("Failed to create order");
      }
    },
    onMutate: (newOrderInfo) => {
      // Optimistic update: Add new order to cache with a temporary ID
      const temporaryId = generateSerialNumber(); // Use generated serial number
      queryClient.setQueryData(["orders"], (prevOrders) => [
        ...prevOrders,
        {
          ...newOrderInfo,
          id: temporaryId,
          status: "pending", // Include default status in optimistic update
        },
      ]);
    },
  });
}

// UPDATE hook (update order in API)
export function useUpdateOrder() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (updatedOrder) => {
      try {
        if (!updatedOrder.id) {
          throw new Error("Order ID is missing");
        }
        // Ensure status field is always submitted
        const response = await axios.put(
          `http://localhost:3000/orders/${updatedOrder.id}`,
          { ...updatedOrder, status: updatedOrder.status || "pending" } // Include status field or default to "pending"
        );
        return response.data;
      } catch (error) {
        console.error("Error updating order:", error);
        throw new Error("Failed to update order");
      }
    },
    onMutate: (updatedOrder) => {
      // Optimistic update: Update order in cache
      if (updatedOrder.id) {
        queryClient.setQueryData(["orders"], (prevOrders) =>
          prevOrders.map((order) =>
            order.id === updatedOrder.id ? updatedOrder : order
          )
        );
      }
    },
  });
}

// DELETE hook (delete order in API)
export function useDeleteOrder() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (orderId) => {
      try {
        // Send API request to delete order
        await axios.delete(`http://localhost:3000/orders/${orderId}`);
        return orderId;
      } catch (error) {
        console.error("Error deleting order:", error);
        throw new Error("Failed to delete order");
      }
    },
    onMutate: (orderId) => {
      // Optimistic update: Remove order from cache
      queryClient.setQueryData(["orders"], (prevOrders) =>
        prevOrders.filter((order) => order.id !== orderId)
      );
    },
  });
}

// READ hook (get orders from API)
export function useGetOrders() {
  return useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      try {
        // Send API request to fetch orders
        const response = await axios.get("http://localhost:3000/orders");

        // Modify response data to include default values for Order ID and Status
        const ordersWithDefaults = response.data.map((order) => ({
          ...order,
          orderId: order.orderId || generateSerialNumber(), // Include default Order ID if not provided
          status: order.status || "pending", // Include default status if not provided
        }));

        return ordersWithDefaults;
      } catch (error) {
        console.error("Error fetching orders:", error);
        throw new Error("Failed to fetch orders");
      }
    },
    refetchOnWindowFocus: false,
  });
}

// Function to handle status change
export function handleStatusChange(updatedOrder, setStatus, status) {
  return async (event) => {
    const newStatus = event.target.value;
    setStatus(newStatus);
    try {
      // Send API request to update status
      await axios.put(`http://localhost:3000/orders/${updatedOrder.id}`, {
        ...updatedOrder,
        status: newStatus,
      });
    } catch (error) {
      console.error("Error updating status:", error);
      setStatus(status); // Revert status if update fails
    }
  };
}
