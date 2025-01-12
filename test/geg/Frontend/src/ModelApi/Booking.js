import { ref, onMounted } from 'vue';
import api from '@/api';
export const Bookings = ref([])
export const currentBooking = ref()
export const bookedDates = ref([]);

export async function getBookings() {
    await api
    .get("/backend/Booking/")
    .then((res) => res.data)
    .then((data) => {
        Bookings.value = data
        console.log(Bookings.value)
        console.log(data);

        bookedDates.value = data.map((booking) => new Date(booking.Date));
        
    })
    .catch((err) => alert(err));
}

export async function createBooking(Email, FirstName, LastName, Company, Phone, Date, Mode, Plan) {
    const formData = new FormData();
    formData.append('Email', Email);
    formData.append('FirstName', FirstName);
    formData.append('LastName', LastName);
    formData.append('Company', Company);
    formData.append('Phone', Phone);
    formData.append('Date', Date);
    formData.append('Mode', Mode);
    formData.append('Plan', Plan);

    await api
        .post("backend/Booking/create/", formData)
        .then((res) => {
            if (res.status === 201) console.log("Booking created!");
            else console.log("Failed to make Booking.");
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
export async function updateBooking(Id, /* Email, FirstName, LastName, Company, Phone, */Date, Mode, Plan) {
    const formData = new FormData();
    // formData.append('Email', Email);
    // formData.append('FirstName', FirstName);
    // formData.append('LastName', LastName);
    // formData.append('Company', Company);
    // formData.append('Phone', Phone);
    formData.append('Date', Date);
    formData.append('Mode', Mode);
    formData.append('Plan', Plan);
    await api
    .put(`/backend/Booking/update/${Id}/`, formData)
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

export const useBooking = (id) => {
    onMounted(retrieveBooking(id))
    return { Bookings, getBookings, createBooking, updateBooking, deleteBooking, };
};