import { ref, onMounted } from 'vue';
import api from '@/api';
export const Bookings = ref([])


export function getBookings() {
    api
    .get("/backend/Booking/")
    .then((res) => res.data)
    .then((data) => {
        Bookings.value = data
        console.log(Bookings.value)
        console.log(data);
    })
    .catch((err) => alert(err));
}

export function createBooking(Email, Name, Company, Phone, Date, Mode, Plan) {
    api
        .post("backend/Booking/create/", { Email, Name, Company, Phone, Date, Mode, Plan })
        .then((res) => {
            if (res.status === 201) alert("Booking created!");
            else alert("Failed to make Booking.");
            getBookings();
        })
        .catch((err) => alert(err));
}
export function updateBooking(Id, Email, Name, Company, Phone, Date, Mode, Plan) {
    api
    .put(`/backend/Booking/update/${Id}/`, {Email, Name, Company, Phone, Date, Mode, Plan})
    .then((res) => {
        if (res.status === 200) alert("Booking updated!");
        else alert("Failed to update Booking.");
        getBookings();
    })
    .catch((err) => alert(err));
}

export function deleteBooking(Id) {
    api
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
    return { Bookings, getBookings, createBooking, updateBooking, deleteBooking, };
};