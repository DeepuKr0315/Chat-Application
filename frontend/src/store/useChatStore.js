import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios";
import { useAuthStore } from "./useAuthStore";

export const useChatStore = create((set) => ({
    messages: [],
    users: [],
    selectedUser: null,
    isUsersLoading: false,
    isMessagesLoading: false,

    getUsers: async () => {
        set({ isUsersLoadng: true });
        try{
            const res = await axiosInstance.get("/messages/users");
            set({ users: res.data });
        }catch(error){
            toast.error(error.respond.data.message);
        }finally{
            set({ isUserLoading: false });
        }
    },

    getMessages: async(userId) => {
        set({ isMessagesLoading: true });
        try{
            const res = await axiosInstance.get(`/messages/${userId}`);
            set({ messages: res.data });
        }catch(error){
            toast.error(error.response.data.message);
        }finally{
            set({ isMessagesLoading: false });
        }
    },

    setSelected: (selectedUser) => set({ selectedUser }),
}))