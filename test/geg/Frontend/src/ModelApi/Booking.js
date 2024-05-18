import { ref, onMounted } from 'vue';
import api from '@/api';
export const Bookings = ref([])
export const currentBooking = ref()


export async function getBookings() {
    await api
    .get("/backend/Booking/")
    .then((res) => res.data)
    .then((data) => {
        Bookings.value = data
        console.log(Bookings.value)
        console.log(data);
    })
    .catch((err) => alert(err));
}

export async function createBooking(Email, Name, Company, Phone, Date, Mode, Plan) {
    await api
        .post("backend/Booking/create/", { Email, Name, Company, Phone, Date, Mode, Plan })
        .then((res) => {
            if (res.status === 201) alert("Booking created!");
            else alert("Failed to make Booking.");
            getBookings();
        })
        .catch((err) => alert(err));
}

export async function retrieveBooking(id){
    await api
    .get(`/backend/Booking/update/${id}/`)
    .then((res) => res.data)
    .then((data) => {
        currentBooking.value = data
    })
    .catch((err) => alert(err));
}
export async function updateBooking(Id, data) {
    await api
    .put(`/backend/Booking/update/${Id}/`, data)
    .then((res) => {
        if (res.status === 200) alert("Booking updated!");
        else alert("Failed to update Booking.");
        getBookings();
    })
    .catch((err) => alert(err));
}

export async function deleteBooking(Id) {
    await api
    .delete(`/backend/Booking/delete/${Id}/`)
    .then((res) => {
        if (res.status === 204) alert("Booking deleted!");
        else alert("Failed to delete Booking.");
        getBookings();
    })
    .catch((error) => alert(error));
}
export const useBookings = () => {
    onMounted(getBookings)
    return { Bookings, createBooking, updateBooking, deleteBooking, };
};

export const useBooking = () => {
    onMounted(retrieveBooking)
    return { Bookings, getBookings, createBooking, updateBooking, deleteBooking, };
};