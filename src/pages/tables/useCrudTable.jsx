import axios from "axios";
import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";


// Function to generate unique 4-digit serial numbers
const generateSerialNumber = (() => {
  let counter = 0; // Initialize counter

  return () => {
    counter++; // Increment counter
    return counter.toString().padStart(4, "0"); // Return counter as padded string
  };
})();

// CREATE Hook (POST new order to API)
export function useCreateOrder() {
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
      // Optimistic update can be handled here if needed
    },
  });
}

// READ Hook (GET Orders from API)
export function useGetOrder() {
  return useQuery({
    queryKey: ["Orders"],
    queryFn: async () => {
      try {
        const response = await axios.get("http://localhost:3000/orders");
        const ordersWithData = response.data.map((order, index) => ({
          ...order,
          OrderNumber: (index + 1).toString().padStart(6, "0"), // Generate OrderNumber based on index
        }));
        return ordersWithData; // Access response data with OrderNumber
      } catch (error) {
        console.error("Failed to fetch orders:", error);
        throw new Error("Failed to fetch orders"); // Throw an error to be caught by react-query
      }
    },
    refetchOnWindowFocus: false,
  });
}

/// UPDATE Hook (PUT Orders in API)
export function useUpdateOrder() {
  return useMutation({
    mutationFn: async (updatedOrders) => {
      // Convert updatedOrders to an array if it's not already one
      if (!Array.isArray(updatedOrders)) {
        updatedOrders = [updatedOrders];
      }

      try {
        const updatedOrderResponses = await Promise.all(
          updatedOrders.map(async (updatedOrder) => {
            const response = await axios.put(
              `http://localhost:3000/orders/${updatedOrder.id}`,
              updatedOrder
            );
            return response.data;
          })
        );

        return updatedOrderResponses;
      } catch (error) {
        console.error("Failed to update orders:", error);
        throw new Error("Failed to update orders");
      }
    },
    onMutate: (newOrderInfo) => {
      // Optimistic update can be handled here if needed
    },
  });
}

const useOrders = () => {
  const [editedOrders, setEditedOrders] = useState({});
  const queryClient = useQueryClient();

  const { mutateAsync: updateOrder } = useUpdateOrder();

  const handleUpdateOrder = async (orderId, newStatus) => {
    const updatedOrder = { id: orderId, status: newStatus };
    await updateOrder(updatedOrder);
  };

  return { editedOrders, setEditedOrders, handleUpdateOrder };
};

export function useOrdersQuery() {
  const { editedOrders, setEditedOrders, handleUpdateOrder } = useOrders();

  const {
    data: fetchedOrders = [],
    isError: isLoadingOrdersError,
    isFetching: isFetchingOrders,
    isLoading: isLoadingOrders,
  } = useQuery({
    queryKey: ["Orders"],
    queryFn: async () => {
      try {
        const response = await axios.get("http://localhost:3000/orders");
        const ordersWithData = response.data.map((order, index) => ({
          ...order,
          OrderNumber: (index + 1).toString().padStart(6, "0"), // Generate OrderNumber based on index
        }));
        return ordersWithData; // Access response data with OrderNumber
      } catch (error) {
        console.error("Failed to fetch orders:", error);
        throw new Error("Failed to fetch orders"); // Throw an error to be caught by react-query
      }
    },
    refetchOnWindowFocus: false,
  });

  return {
    editedOrders,
    setEditedOrders,
    handleUpdateOrder,
    fetchedOrders,
    isLoadingOrdersError,
    isFetchingOrders,
    isLoadingOrders,
  };
}

// DELETE Hook (DELETE order in API)
export function useDeleteOrder() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (orderId) => {
      const response = await axios.delete(
        `http://localhost:3000/orders/${orderId}`
      );

      if (!response.ok) {
        throw new Error("Failed to delete order");
      }
    },
    onMutate: (orderId) => {
      // Optimistic update: Remove order from cache
    },
  });
}
